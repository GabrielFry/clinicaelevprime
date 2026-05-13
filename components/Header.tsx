"use client";
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @font-face {
          font-family: "Avenir Next";
          font-display: swap;
          src: url(/fonts/AvenirNext-Regular.eot);
          src: url(/fonts/AvenirNext-Regular.eot?#iefix) format("embedded-opentype"), url(/fonts/AvenirNext-Regular.woff2) format("woff2"), url(/fonts/AvenirNext-Regular.woff) format("woff"), url(/fonts/AvenirNext-Regular.svg#AvenirNext-Regular) format("svg");
          font-weight: normal;
          font-style: normal;
        }
        .scrolled-header { background-color: #ffffff !important; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .scrolled-header > div > div:last-child { padding-top: 5px !important; padding-bottom: 5px !important; transition: all 0.3s ease; }
        .scrolled-header > div > div:last-child > div { height: 60px !important; transition: all 0.3s ease; }
        #main-menu > div > div:last-child > div { transition: height 0.3s ease; }

        .logo-custom {
          display: inline-flex !important;
          align-items: center !important;
          height: 100% !important;
          width: auto !important;
          text-decoration: none;
        }
        .logo-img {
          height: 100px;
          max-height: 120px;
          width: auto;
          display: block;
        }
        .logo-txt {
          display: none;
          font-family: var(--font-logo-serif), "Cormorant Garamond", Georgia, "Times New Roman", serif !important;
          font-weight: 600 !important;
          font-size: 24px !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          color: #c9a227 !important;
          white-space: nowrap !important;
          transition: color 0.3s ease !important;
        }
        
        .scrolled-header .logo-img {
          display: none !important;
        }
        .scrolled-header .logo-txt {
          display: inline-block !important;
          color: #c9a227 !important;
          line-height: 60px !important;
        }
        .scrolled-header .burger-menu {
          filter: none !important;
        }

        #main-menu > div > div:last-child > div {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          width: 100% !important;
          max-width: 100vw !important;
          box-sizing: border-box !important;
          padding-left: max(12px, env(safe-area-inset-left)) !important;
          padding-right: max(12px, env(safe-area-inset-right)) !important;
          gap: 0.5rem !important;
          flex-wrap: nowrap !important;
        }
        @media (max-width: 480px) {
          .scrolled-header .logo-txt {
            font-size: 0.85rem !important;
            letter-spacing: 0.08em !important;
            line-height: 1.2 !important;
            max-width: 52vw;
            white-space: normal !important;
          }
          #main-menu .ihgLoginBtn {
            font-size: 0.8rem !important;
            padding: 0.35rem 0.5rem !important;
          }
        }

        /* Mobile: barra do legado (46px) menor que a logo — sobe demais; safe area + altura e logo proporcionais */
        @media (max-width: 767px) {
          #main-menu > div > div:last-child {
            padding-top: max(0.75rem, calc(env(safe-area-inset-top, 0px) + 0.5rem)) !important;
            padding-bottom: 0.75rem !important;
          }
          #main-menu > div > div:last-child > div {
            height: auto !important;
            min-height: 3.25rem !important;
            align-items: center !important;
          }
          .logo-img {
            height: clamp(2.75rem, 10vw, 3.125rem) !important;
            max-height: 3.125rem !important;
            width: auto !important;
          }
          #main-menu > div > div:last-child > div > a.logo-custom {
            transform: translate(-50%, calc(-50% + 4px)) !important;
          }
          .scrolled-header > div > div:last-child {
            padding-top: max(0.45rem, calc(env(safe-area-inset-top, 0px) + 0.25rem)) !important;
            padding-bottom: 0.45rem !important;
          }
        }
      `}</style>
      <div id="main-menu" className={scrolled ? "scrolled-header" : ""} style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, transition: 'all 0.3s ease' }}>
        <div>
          <div style={{ "display": "none" }}>
          </div>
          <div>
            <div>

              <div>

                <a href="#" className="burger-menu" style={{ display: 'block', minWidth: '34px', minHeight: '15px', flexShrink: 0 }}>
                </a>
                <select className="psk-language-selector" defaultValue="/en/" style={{ display: 'none' }}>

                  <option value="/ar/">

                    AR
                  </option>
                  <option value="/en/">

                    EN
                  </option>
                  <option value="/es/">

                    ES
                  </option>
                  <option value="/fr/">

                    FR
                  </option>
                  <option value="/he/">

                    HE
                  </option>
                  <option value="/it/">

                    IT
                  </option>
                  <option value="/jp/">

                    JP
                  </option>
                  <option value="/pt/">

                    PT
                  </option>
                  <option value="/ru/">

                    RU
                  </option>
                  <option value="/tr/">

                    TR
                  </option>
                  <option value="/vn/">

                    VN
                  </option>
                  <option value="/zh/">

                    ZH
                  </option>

                </select>

              </div>
              <a href="#" className="logo-custom" aria-label="Clínica ElevPrime — início">
                <img src="/logo.webp" alt="Clínica ElevPrime" className="logo-img" />
                <span className="logo-txt">Clínica ElevPrime</span>
              </a>
              <div>

                <ul className="ihg-container">

                  <li className="ihg gigya-guest">

                    <a href="#contato" className="ihgLoginBtn">

                      Agendar

                    </a>

                  </li>
                  <li className="ihg gigya-member" style={{ "display": "none" }}>

                    /

                  </li>

                </ul>


              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
