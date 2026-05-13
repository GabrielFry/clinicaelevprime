"use client";

import { useEffect } from "react";

const ATTR = "data-carousel-boot";
const UI_ATTR = "data-carousel-ui";

function stripSlideLayout(li: HTMLElement) {
  li.style.removeProperty("float");
  li.style.removeProperty("margin-right");
  li.style.removeProperty("opacity");
  li.style.removeProperty("z-index");
  li.style.position = "relative";
}

function setArrowEdges(
  prev: HTMLAnchorElement | null | undefined,
  next: HTMLAnchorElement | null | undefined,
  index: number,
  n: number,
) {
  const atStart = index === 0;
  const atEnd = index >= n - 1;
  prev?.classList.toggle("flex-disabled", atStart);
  next?.classList.toggle("flex-disabled", atEnd);
  if (prev) {
    prev.tabIndex = atStart ? -1 : 0;
    prev.setAttribute("aria-disabled", atStart ? "true" : "false");
  }
  if (next) {
    next.tabIndex = atEnd ? -1 : 0;
    next.setAttribute("aria-disabled", atEnd ? "true" : "false");
  }
}

function initStripCarousel(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>(".flex-viewport");
  const ul = viewport?.querySelector<HTMLElement>("ul.slides");
  if (!viewport || !ul) return () => {};

  const slides = [...ul.querySelectorAll<HTMLElement>(":scope > li")];
  const n = slides.length;
  if (n === 0) return () => {};

  const prev = root.querySelector<HTMLAnchorElement>(
    ".flex-direction-nav a.flex-prev",
  );
  const next = root.querySelector<HTMLAnchorElement>(
    ".flex-direction-nav a.flex-next",
  );

  const autoplayAttr = Math.max(
    0,
    parseInt(root.getAttribute("data-carousel-autoplay") || "0", 10) || 0,
  );
  const autoplayMs = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches
    ? 0
    : autoplayAttr;
  const resumeAfterPauseMs = Math.max(
    autoplayMs,
    parseInt(
      root.getAttribute("data-carousel-autoplay-pause-ms") || "0",
      10,
    ) || autoplayMs,
  );

  const mqlDesktop = window.matchMedia("(min-width: 768px)");
  const isServicosCarousel = Boolean(root.closest("#servicos"));

  let index = 0;
  let stride = 0;
  let autoplayTimer: ReturnType<typeof setInterval> | null = null;
  let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
  let hoverPause = false;

  const setStripArrows = () => {
    if (n <= 1) {
      prev?.classList.add("flex-disabled");
      next?.classList.add("flex-disabled");
      if (prev) {
        prev.tabIndex = -1;
        prev.setAttribute("aria-disabled", "true");
      }
      if (next) {
        next.tabIndex = -1;
        next.setAttribute("aria-disabled", "true");
      }
      return;
    }
    const atStart = index === 0;
    prev?.classList.toggle("flex-disabled", atStart);
    if (prev) {
      prev.tabIndex = atStart ? -1 : 0;
      prev.setAttribute("aria-disabled", atStart ? "true" : "false");
    }
    /* Volta ao comportamento anterior: “próximo” sempre ativo (loop % n). */
    next?.classList.remove("flex-disabled");
    if (next) {
      next.tabIndex = 0;
      next.setAttribute("aria-disabled", "false");
    }
  };

  const go = (animate: boolean) => {
    if (stride <= 0) return;
    ul.style.transition = animate ? "transform 0.38s ease" : "none";
    ul.style.transform = `translate3d(${-index * stride}px,0,0)`;
    setStripArrows();

    slides.forEach((li, i) => {
      li.classList.toggle("flex-active-slide", i === index);
    });
  };

  const layout = () => {
    const w = viewport.getBoundingClientRect().width;
    if (w <= 0) return;
    viewport.style.overflow = "hidden";
    ul.style.display = "flex";
    ul.style.flexDirection = "row";
    ul.style.flexWrap = "nowrap";
    ul.style.willChange = "transform";
    ul.style.gap = "0px";
    ul.style.columnGap = "0px";

    stride = w;

    slides.forEach((li) => {
      stripSlideLayout(li);
      li.style.width = `${w}px`;
      li.style.minWidth = `${w}px`;
      li.style.flexShrink = "0";
      li.style.boxSizing = "border-box";
    });
    ul.style.width = `${n * w}px`;
    go(false);
  };

  const onPrev = (e: Event) => {
    e.preventDefault();
    if (index > 0) {
      index--;
      go(true);
      pauseAutoplayDebounced();
    }
  };
  const onNext = (e: Event) => {
    e.preventDefault();
    index = (index + 1) % n;
    go(true);
    pauseAutoplayDebounced();
  };

  const clearResumeTimeout = () => {
    if (resumeTimeout) {
      clearTimeout(resumeTimeout);
      resumeTimeout = null;
    }
  };

  const stopAutoplayInterval = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const canRunAutoplay = () => {
    const desktopOk = isServicosCarousel ? mqlDesktop.matches : true;
    return (
      desktopOk &&
      autoplayMs > 0 &&
      n > 1 &&
      !hoverPause &&
      document.visibilityState === "visible"
    );
  };

  const startAutoplayInterval = () => {
    clearResumeTimeout();
    stopAutoplayInterval();
    if (!canRunAutoplay()) return;
    autoplayTimer = setInterval(() => {
      index = (index + 1) % n;
      go(true);
    }, autoplayMs);
  };

  /** Pausa o intervalo e agenda retomada (após setas, swipe ou toque). */
  const pauseAutoplayDebounced = () => {
    if (autoplayMs <= 0) return;
    clearResumeTimeout();
    stopAutoplayInterval();
    resumeTimeout = setTimeout(() => {
      resumeTimeout = null;
      startAutoplayInterval();
    }, resumeAfterPauseMs);
  };

  prev?.addEventListener("click", onPrev);
  next?.addEventListener("click", onNext);

  let touchStartX = 0;
  const onTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
    stopAutoplayInterval();
    clearResumeTimeout();
  };
  const onTouchEnd = (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50 && index > 0) {
      index--;
      go(true);
    } else if (dx < -50 && n > 1) {
      index = (index + 1) % n;
      go(true);
    }
    pauseAutoplayDebounced();
  };
  viewport.addEventListener("touchstart", onTouchStart, { passive: true });
  viewport.addEventListener("touchend", onTouchEnd, { passive: true });

  const onMouseEnter = () => {
    hoverPause = true;
    stopAutoplayInterval();
    clearResumeTimeout();
  };
  const onMouseLeave = () => {
    hoverPause = false;
    startAutoplayInterval();
  };
  root.addEventListener("mouseenter", onMouseEnter);
  root.addEventListener("mouseleave", onMouseLeave);

  const onFocusIn = () => {
    hoverPause = true;
    stopAutoplayInterval();
    clearResumeTimeout();
  };
  const onFocusOut = () => {
    window.setTimeout(() => {
      if (!root.contains(document.activeElement)) {
        hoverPause = false;
        startAutoplayInterval();
      }
    }, 60);
  };
  root.addEventListener("focusin", onFocusIn);
  root.addEventListener("focusout", onFocusOut);

  const onVisibility = () => {
    if (document.visibilityState === "hidden") {
      stopAutoplayInterval();
      clearResumeTimeout();
    } else {
      startAutoplayInterval();
    }
  };
  document.addEventListener("visibilitychange", onVisibility);

  const onDesktopMqChange = () => {
    if (!isServicosCarousel) return;
    stopAutoplayInterval();
    clearResumeTimeout();
    if (mqlDesktop.matches) {
      startAutoplayInterval();
    }
  };
  if (isServicosCarousel) {
    mqlDesktop.addEventListener("change", onDesktopMqChange);
  }

  const ro = new ResizeObserver(() => layout());
  ro.observe(viewport);
  layout();
  startAutoplayInterval();

  return () => {
    stopAutoplayInterval();
    clearResumeTimeout();
    prev?.removeEventListener("click", onPrev);
    next?.removeEventListener("click", onNext);
    viewport.removeEventListener("touchstart", onTouchStart);
    viewport.removeEventListener("touchend", onTouchEnd);
    root.removeEventListener("mouseenter", onMouseEnter);
    root.removeEventListener("mouseleave", onMouseLeave);
    root.removeEventListener("focusin", onFocusIn);
    root.removeEventListener("focusout", onFocusOut);
    document.removeEventListener("visibilitychange", onVisibility);
    if (isServicosCarousel) {
      mqlDesktop.removeEventListener("change", onDesktopMqChange);
    }
    ro.disconnect();
  };
}

function initHeroPair(box53: HTMLElement, marked: HTMLElement[]) {
  const imgRoot = box53.querySelector<HTMLElement>("[data-hero-slider]");
  const navRoot = box53.querySelector<HTMLElement>("[data-hero-nav]");
  if (!imgRoot || !navRoot) return () => { };

  const imgUl = imgRoot.querySelector<HTMLElement>("ul.slides");
  const navViewport = navRoot.querySelector<HTMLElement>(".flex-viewport");
  const navUl = navViewport?.querySelector<HTMLElement>("ul.slides");
  if (!imgUl || !navViewport || !navUl) return () => { };

  const imgSlides = [...imgUl.querySelectorAll<HTMLElement>(":scope > li")];
  const navSlides = [...navUl.querySelectorAll<HTMLElement>(":scope > li")];
  const n = Math.min(imgSlides.length, navSlides.length);
  if (n === 0) return () => { };

  imgRoot.setAttribute(ATTR, "1");
  navRoot.setAttribute(ATTR, "1");
  marked.push(imgRoot, navRoot);

  const prev = imgRoot.querySelector<HTMLAnchorElement>(
    ".flex-direction-nav a.flex-prev",
  );
  const next = imgRoot.querySelector<HTMLAnchorElement>(
    ".flex-direction-nav a.flex-next",
  );

  const mql = window.matchMedia("(min-width: 768px)");

  let index = 0;





  const go = (animate: boolean) => {
    const wImg = imgRoot.getBoundingClientRect().width;
    if (wImg <= 0) return;
    const t = animate ? "transform 0.38s ease" : "none";
    imgUl.style.transition = t;
    imgUl.style.transform = `translate3d(${-index * wImg}px,0,0)`;

    imgSlides.forEach((li, i) => {
      li.classList.toggle("flex-active-slide", i === index);
    });

    if (mql.matches) {
      const wNav = navViewport.getBoundingClientRect().width;
      if (wNav > 0) {
        navUl.style.transition = t;
        navUl.style.transform = `translate3d(${-index * wNav}px,0,0)`;
      }
    } else {
      navUl.style.transition = "none";
      navUl.style.transform = "translate3d(0,0,0)";
    }

    setArrowEdges(prev, next, index, n);
  };

  const layout = () => {
    imgRoot.style.overflow = "hidden";

    const wImg = imgRoot.getBoundingClientRect().width;
    if (wImg <= 0) return;

    imgUl.style.display = "flex";
    imgUl.style.flexDirection = "row";
    imgUl.style.willChange = "transform";
    imgSlides.forEach((li) => {
      stripSlideLayout(li);
      li.style.width = `${wImg}px`;
      li.style.minWidth = `${wImg}px`;
      li.style.flexShrink = "0";
      li.style.boxSizing = "border-box";
    });
    imgUl.style.width = `${n * wImg}px`;

    if (mql.matches) {
      navViewport.style.overflow = "hidden";
      const wNav = navViewport.getBoundingClientRect().width;
      if (wNav > 0) {
        navUl.style.display = "flex";
        navUl.style.flexDirection = "row";
        navUl.style.willChange = "transform";
        navSlides.forEach((li) => {
          stripSlideLayout(li);
          li.style.width = `${wNav}px`;
          li.style.minWidth = `${wNav}px`;
          li.style.flexShrink = "0";
          li.style.boxSizing = "border-box";
        });
        navUl.style.width = `${n * wNav}px`;
      }
    }

    go(false);
  };

  const setIndex = (i: number, animate: boolean) => {
    if (i < 0 || i >= n) return;
    index = i;
    go(animate);
  };

  const onPrev = (e: Event) => {
    e.preventDefault();
    if (index > 0) setIndex(index - 1, true);
  };
  const onNext = (e: Event) => {
    e.preventDefault();
    if (index < n - 1) setIndex(index + 1, true);
  };

  prev?.addEventListener("click", onPrev);
  next?.addEventListener("click", onNext);

  let touchStartX = 0;
  const onTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50 && index > 0) setIndex(index - 1, true);
    else if (dx < -50 && index < n - 1) setIndex(index + 1, true);
  };
  imgRoot.addEventListener("touchstart", onTouchStart, { passive: true });
  imgRoot.addEventListener("touchend", onTouchEnd, { passive: true });
  navViewport.addEventListener("touchstart", onTouchStart, { passive: true });
  navViewport.addEventListener("touchend", onTouchEnd, { passive: true });



  const onMqChange = () => layout();
  mql.addEventListener("change", onMqChange);

  const ro = new ResizeObserver(() => layout());
  ro.observe(imgRoot);
  ro.observe(navViewport);
  layout();

  return () => {
    prev?.removeEventListener("click", onPrev);
    next?.removeEventListener("click", onNext);
    imgRoot.removeEventListener("touchstart", onTouchStart);
    imgRoot.removeEventListener("touchend", onTouchEnd);
    navViewport.removeEventListener("touchstart", onTouchStart);
    navViewport.removeEventListener("touchend", onTouchEnd);
    mql.removeEventListener("change", onMqChange);
    ro.disconnect();
    imgRoot.removeAttribute(ATTR);
    navRoot.removeAttribute(ATTR);
  };
}

export default function LegacyCarouselInit() {
  useEffect(() => {
    const boxes = document.getElementById("boxes");
    if (!boxes) return;

    const disposers: (() => void)[] = [];
    const marked: HTMLElement[] = [];

    const box53 = boxes.querySelector<HTMLElement>(".box.box53");
    if (box53 && !box53.querySelector(`[data-hero-slider][${ATTR}]`)) {
      disposers.push(initHeroPair(box53, marked));
    }

    boxes.querySelectorAll<HTMLElement>(".flexslider").forEach((fs) => {
      if (fs.hasAttribute(ATTR)) return;
      if (fs.closest(".box53")) return;
      if (fs.querySelector(".flex-viewport") && fs.querySelector("ul.slides")) {
        fs.setAttribute(ATTR, "1");
        marked.push(fs);
        disposers.push(initStripCarousel(fs));
      }
    });

    return () => {
      disposers.forEach((d) => d());
      marked.forEach((el) => el.removeAttribute(ATTR));
    };
  }, []);

  return null;
}
