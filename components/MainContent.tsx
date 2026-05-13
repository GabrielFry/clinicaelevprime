import React from 'react';

export default function MainContent() {
  return (
    <div id="boxes">


      <div className="box box54 flex min-h-dvh flex-col items-center justify-center px-4 py-12" id="servicos">

        <div className="container flex w-full max-w-7xl flex-col items-center justify-center">

          <div className="row flex w-full flex-col items-center justify-center gap-8">

            <div className="box54__header flex w-full flex-col items-center text-center">

              <h2>
                Conheça a Clínica ElevPrime
              </h2>
              <p>

                <a className="button-link" href="#contato">
                  Ver todos os serviços e agendar
                </a>

              </p>

            </div>
            <div
              className="carousel center flex w-full flex-col items-center justify-center"
              role="region"
              aria-roledescription="carrossel"
              aria-label="Conheça a Clínica ElevPrime — serviços em destaque"
            >

              <div
                className="flexslider refresh-25"
                data-carousel-autoplay="5500"
                data-carousel-autoplay-pause-ms="8000"
              >


                <div className="flex-viewport" style={{ "overflow": "hidden", "position": "relative" }}>
                  <ul className="slides" style={{ "width": "1000%", "transitionDuration": "0s", "transform": "translate3d(0px,0px,0px)" }}>

                    <li className="slide flex flex-col items-center justify-center text-center flex-active-slide" style={{ "width": "1262px", "marginRight": "0px", "float": "left", "display": "block" }} data-thumb-alt="">

                      <div>

                          <picture>
                            <img src="/topbar.JPG" alt="Consulta médica na Clínica ElevPrime — atendimento acolhedor e profissional." className="lcp" width="1280" height="720" loading="lazy" draggable="false" srcSet="" sizes="" />
                          </picture>

                      </div>
                      <div>

                        <div>

                          <div className="slide__content">

                            <div className="slide__titles flex flex-col items-center">

                              <p className="category">
                                Consultas
                              </p>
                              <a href="#contato">

                                <h3>
                                  Medicina de família e acompanhamento
                                </h3>

                              </a>

                            </div>
                            <div className="slide__description flex flex-col items-center">

                              <p>
                                Consultas com tempo adequado para ouvir suas queixas, revisar histórico e definir planos de cuidado claros — da prevenção ao tratamento contínuo.
                              </p>
                              <p>

                                <a href="#contato" className="button-link">
                                  Agendar consulta
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" data-thumb-alt="" style={{ "width": "1262px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div>

                          <picture>
                            <img src="/2.png" alt="Check-up e avaliação de saúde na Clínica ElevPrime." className="lcp" width="1280" height="720" loading="lazy" draggable="false" srcSet="" sizes="" />
                          </picture>

                      </div>
                      <div>

                        <div>

                          <div className="slide__content">

                            <div className="slide__titles flex flex-col items-center">

                              <p className="category">
                                Check-up
                              </p>
                              <a href="#contato">

                                <h3>
                                  Check-up executivo e preventivo
                                </h3>

                              </a>

                            </div>
                            <div className="slide__description flex flex-col items-center">

                              <p>
                                Pacotes de avaliação com exames essenciais, orientação nutricional e retorno médico para interpretar resultados e traçar metas de saúde realistas.
                              </p>
                              <p>

                                <a href="#contato" className="button-link">
                                  Montar meu check-up
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" data-thumb-alt="" style={{ "width": "1262px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div>

                          <picture>
                            <img src="/3.png" alt="Exames e diagnóstico — Clínica ElevPrime." className="lcp" width="1280" height="720" loading="lazy" draggable="false" srcSet="" sizes="" />
                          </picture>

                      </div>
                      <div>

                        <div>

                          <div className="slide__content">

                            <div className="slide__titles flex flex-col items-center">

                              <p className="category">
                                Exames
                              </p>
                              <a href="#contato">

                                <h3>
                                  Laboratório e imagem com parceiros de referência
                                </h3>

                              </a>

                            </div>
                            <div className="slide__description flex flex-col items-center">

                              <p>
                                Solicitação de exames com critério clínico, acompanhamento da coleta e entrega de laudos com explicação acessível — para você sair da consulta sabendo o próximo passo.
                              </p>
                              <p>

                                <a href="#contato" className="button-link">
                                  Solicitar exames
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>

                  </ul>
                </div>                <ol className="flex-control-nav flex-control-paging sf-hidden">

                </ol>                <ul className="flex-direction-nav" style={{ "display": "block" }}>
                  <li className="flex-nav-prev">
                    <a className="flex-prev flex-disabled" href="#" tabIndex={-1}>
                      Anterior
                    </a>
                  </li>                  <li className="flex-nav-next">
                    <a className="flex-next" href="#">
                      Próximo
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="box box4 background padding-reduced fadeInUp full-visible" id="sobre" data-timestamp="639140518539004633">

        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">

          <div className="flex w-full max-w-full flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-12 md:text-left">

            <div className="w-full shrink-0 md:w-1/2 md:max-w-lg">

              <picture>
                <img src="/drsamuel.jpeg" alt="Dr. André Samuel — retrato profissional na Clínica ElevPrime." className="lcp mx-auto h-auto max-h-[min(70vh,520px)] w-full max-w-sm rounded-sm object-cover object-top shadow-sm md:max-h-none md:max-w-none" width="648" height="648" loading="lazy" srcSet="" sizes="" />
              </picture>
            </div>
            <div className="min-w-0 flex-1">

              <p className="category">
                Cuidado integral
              </p>
              <h2>
                Tudo o que fazemos, em sintonia com você
              </h2>
              <p>
                Na ElevPrime, acreditamos que boa medicina combina evidência científica, escuta atenta e tecnologia a serviço do paciente — sem perder o toque humano.
              </p>
              <p>
                Seja para prevenir, diagnosticar ou acompanhar uma condição crônica, construímos juntos um plano claro, com metas e prazos que fazem sentido na sua vida.
              </p>
              <ul>

                <li>

                  <p className="a button-list-element">
                    <a href="#contato" title="Agendar">
                      Conheça nossa estrutura
                    </a>
                  </p>

                </li>
                <li>

                  <p className="button-list-element a">
                    <a href="#servicos" title="Serviços">
                      Nossos serviços
                    </a>
                  </p>

                </li>
                <li>

                  <p className="button-list-element a">
                    <a href="#contato" title="Contato">
                      Fale com a recepção
                    </a>
                  </p>

                </li>

              </ul>

              <ul className="buttons-list" data-timestamp="639140518539008436" data-macro="BoxLinks">


              </ul>

            </div>

          </div>

        </div>

      </div>
      <div className="box box53 fadeInUp full-visible hidden" aria-hidden="true">

        <div className="container">

          <div className="row">

            <h2 className="box52__title" id="pilares">
              Por que escolher a ElevPrime
            </h2>
            <div className="carousel carousel-hero hero-pilares-carousel">

              <div className="flexslider refresh-25 max-md:h-auto!" data-hero-slider="">

                <ul className="slides remove-width" data-slides-total="3">

                  <li className="slide flex flex-col items-center justify-center text-center slide-0 flex-active-slide" style={{ "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative", "opacity": "1", "display": "block", "zIndex": "2" }}>

                    <picture>
                      <img src="/assets/asset_80.webp" alt="Compromisso com o paciente — Clínica ElevPrime" className="lcp" width="563" height="317" loading="lazy" draggable="false" srcSet="" sizes="" />
                    </picture>
                    <div className="carousel-text__content sf-hidden">




                    </div>

                  </li>
                  <li className="slide flex flex-col items-center justify-center text-center slide-1" style={{ "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative", "opacity": "0", "display": "block", "zIndex": "1" }}>

                    <picture>
                      <img src="/assets/asset_81.webp" alt="Excelência clínica e protocolos atualizados" className="lcp" width="563" height="317" loading="lazy" draggable="false" srcSet="" sizes="" />
                    </picture>
                    <div className="carousel-text__content sf-hidden">




                    </div>

                  </li>
                  <li className="slide flex flex-col items-center justify-center text-center slide-2" style={{ "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative", "opacity": "0", "display": "block", "zIndex": "1" }}>

                    <picture>
                      <img src="/assets/asset_82.webp" alt="Sustentabilidade e responsabilidade social em saúde" className="lcp" width="563" height="317" loading="lazy" draggable="false" srcSet="" sizes="" />
                    </picture>
                    <div className="carousel-text__content sf-hidden">




                    </div>

                  </li>

                </ul>
                <ul className="flex-direction-nav" style={{ "display": "block" }}>
                  <li className="flex-nav-prev">
                    <a className="flex-prev" href="#">
                      Anterior
                    </a>
                  </li>                  <li className="flex-nav-next">
                    <a className="flex-next" href="#">
                      Próximo
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>
          <div className="row row-2">

            <div className="carousel carousel-text hidden md:block">

              <div className="flexslider" data-hero-nav="">


                <div className="flex-viewport" style={{ "overflow": "hidden", "position": "relative" }}>
                  <ul className="slides" style={{ "width": "600%", "transitionDuration": "0s", "transform": "translate3d(0px,0px,0px)" }}>

                    <li className="carousel-text__slide slide slide-0 flex-active-slide" style={{ "width": "539.333px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="carousel-text__content">

                        <p className="carousel-text__description">
                          Ética, transparência e respeito: o que guia cada atendimento na ElevPrime.
                        </p>
                        <p className="carousel-text__btn">
                          <a className="button-link" href="#sobre" target="_self">
                            Nossos valores
                          </a>
                        </p>

                      </div>

                    </li>
                    <li className="carousel-text__slide slide slide-1" style={{ "width": "539.333px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="carousel-text__content">

                        <p className="carousel-text__description">
                          Da prevenção às terapias mais atuais: ajudamos você a escolher o que faz sentido, com base em evidências.
                        </p>
                        <p className="carousel-text__btn">
                          <a className="button-link" href="#servicos" target="_self">
                            Excelência em saúde
                          </a>
                        </p>

                      </div>

                    </li>
                    <li className="carousel-text__slide slide slide-2" style={{ "width": "539.333px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="carousel-text__content">

                        <p className="carousel-text__description">
                          Compromisso com práticas sustentáveis, redução de desperdício e saúde da comunidade em que estamos inseridos.
                        </p>
                        <p className="carousel-text__btn">
                          <a className="button-link" href="#sobre" target="_self">
                            Responsabilidade social
                          </a>
                        </p>

                      </div>

                    </li>

                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="box widget-hotels-new-openings margin-standard background padding-reduced fadeInUp full-visible !hidden flex min-h-dvh flex-col items-center justify-center gap-8 px-4 py-12" aria-hidden="true">

        <div className="box box17 margin-reduced flex w-full max-w-7xl flex-col items-center justify-center" id="box17-1067" data-macro="BoxesBox17" data-timestamp="639140518539016182">

          <div className="flex w-full flex-col items-center text-center">

            <h2>
              Em expansão: novidades na ElevPrime
            </h2>              <p>
              <a className="button-link" target="_self" href="#contato">
                Conheça o que está por vir e cadastre-se para novidades
              </a>
            </p>

          </div>

        </div>
        <div className="container flex w-full max-w-7xl flex-col items-center justify-center">

          <div className="row flex w-full flex-col items-center justify-center gap-8">

            <div className="carousel flex w-full flex-col items-center justify-center">

              <div className="flexslider refresh-25">


                <div className="flex-viewport" style={{ "overflow": "hidden", "position": "relative" }}>
                  <ul className="slides" style={{ "width": "1800%", "transitionDuration": "0s", "transform": "translate3d(0px,0px,0px)" }}>

                    <li className="slide flex flex-col items-center justify-center text-center" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }} data-thumb-alt="">

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_83.webp" alt="Nova área de diagnóstico na Clínica ElevPrime." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Em breve
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Núcleo de diagnóstico por imagem ampliado (2026)
                                </a>

                              </h3>
                              <p>

                                Nova sala de ultrassom com doppler, ecocardiografia e laudos em parceria com corpo clínico de referência — menos deslocamento, mais conforto para o paciente.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" data-thumb-alt="" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_84.webp" alt="Telemedicina e prontuário integrado — ElevPrime." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Tecnologia
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Hub de telemedicina e prontuário eletrônico (2026)
                                </a>

                              </h3>
                              <p>

                                Retornos por vídeo, prescrições digitais e histórico unificado para quem acompanha tratamentos contínuos — com a mesma segurança do atendimento presencial.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" data-thumb-alt="" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_85.webp" alt="Medicina do trabalho e saúde ocupacional." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Empresas
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Programa de medicina do trabalho corporativo (2027)
                                </a>

                              </h3>
                              <p>

                                Exames admissionais, periódicos e integração com SESMT: laudos ágeis, equipe dedicada e relatórios para apoiar a gestão de saúde nas organizações.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" data-thumb-alt="" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_86.webp" alt="Saúde mental integrada — Clínica ElevPrime." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Saúde mental
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Núcleo de saúde mental integrada (2027)
                                </a>

                              </h3>
                              <p>

                                Psicologia, psiquiatria e grupos terapêuticos no mesmo endereço, com triagem humanizada e continuidade de cuidado entre as especialidades.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" data-thumb-alt="" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_87.webp" alt="Vacinação e imunizações na ElevPrime." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Imunizações
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Centro de vacinação ampliado (2027)
                                </a>

                              </h3>
                              <p>

                                Calendário vacinal completo, vacinas importadas sob demanda e orientação individual para gestantes, viajantes e idosos — com registro em carteira digital.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_88.webp" alt="Pilates clínico e reabilitação — ElevPrime." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Reabilitação
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Estúdio de pilates clínico e fisioterapia (2027)
                                </a>

                              </h3>
                              <p>

                                Aparelhos de solo e cadillac, fisioterapeutas especializados e vínculo direto com ortopedia e medicina esportiva para recuperação segura pós-cirúrgica.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_89.webp" alt="Genética e medicina personalizada — ElevPrime." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Medicina de precisão
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Consultório de genética médica (2027)
                                </a>

                              </h3>
                              <p>

                                Testes genéticos com aconselhamento pré e pós-resultado, integração com oncologia, cardiologia e planejamento familiar — sempre com critérios éticos rigorosos.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_90.webp" alt="Pré-natal e maternidade — Clínica ElevPrime." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Maternidade
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Programa pré-natal premium (2027)
                                </a>

                              </h3>
                              <p>

                                Acompanhamento obstétrico, nutrição, vacinas e suporte emocional em um fluxo coordenado — da descoberta da gravidez ao puerpério.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>
                    <li className="slide flex flex-col items-center justify-center text-center" style={{ "width": "671.111px", "marginRight": "0px", "float": "left", "display": "block" }}>

                      <div className="item">

                        <div>

                            <picture>
                              <img src="/assets/asset_91.webp" alt="Programa longevity e envelhecimento saudável." className="lcp" width="368" height="252" loading="lazy" draggable="false" srcSet="" sizes="" />
                            </picture>

                        </div>
                        <div>

                          <div>

                            <div>

                              <p className="category">
                                Longevidade
                              </p>
                              <h3>

                                <a target="_self" href="#contato">
                                  Clínica de envelhecimento saudável (2027)
                                </a>

                              </h3>
                              <p>

                                Avaliação de sarcopenia, hormônios, sono e metabolismo com planos personalizados — sempre com foco em autonomia, segurança e qualidade de vida na maturidade.
                              </p>
                              <p>

                                <a className="button-link" target="_self" href="#contato">
                                  Saiba mais
                                </a>

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </li>

                  </ul>
                </div>                <ol className="flex-control-nav flex-control-paging sf-hidden">

                </ol>                <ul className="flex-direction-nav" style={{ "display": "block" }}>
                  <li className="flex-nav-prev">
                    <a className="flex-prev flex-disabled" href="#" tabIndex={-1}>
                      Anterior
                    </a>
                  </li>                  <li className="flex-nav-next">
                    <a className="flex-next" href="#">
                      Próximo
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
      <section className="box box52 fadeInUp full-visible">

        <div className="container">

          <div className="row">

            <h2 className="box52__title">
              Conheça a nossa equipe
            </h2>
            <div className="box52-cards-grid mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

              <div className="card flex flex-col items-center text-center">

                  <picture className="card__picture">
                    <img src="/medico1.jpeg" alt="Dr. André Samuel — Diretor Clínico na Clínica ElevPrime" className="lcp" width="368" height="459" loading="lazy" draggable="false" srcSet="" sizes="" />
                  </picture>
                <span className="card__tagline category">
                  Diretor Clínico
                </span>
                <a href="#contato" target="_self" className="card__title">

                  <h4>
                    Dr. André Samuel
                  </h4>

                </a>
                <p className="card__short-description">
                  Médico dedicado ao cuidado integral e excelência no atendimento personalizado.
                </p>
                <p className="card__btn">

                  <a className="button-link" href="#contato" target="_self">
                    Agendar com Dr. André
                  </a>

                </p>

              </div>

              <div className="card flex flex-col items-center text-center">

                  <picture className="card__picture">
                    <img src="/medico2.jpg" alt="Dr. Leo Clecio — Médico na Clínica ElevPrime" className="lcp" width="368" height="459" loading="lazy" draggable="false" srcSet="" sizes="" />
                  </picture>
                <span className="card__tagline category">
                  Especialista
                </span>
                <a href="#contato" target="_self" className="card__title">

                  <h4>
                    Dr. Leo Clecio
                  </h4>

                </a>
                <p className="card__short-description">
                  Comprometido com a saúde preventiva e o bem-estar duradouro de seus pacientes.
                </p>
                <p className="card__btn">

                  <a className="button-link" href="#contato" target="_self">
                    Agendar com Dr. Leo
                  </a>

                </p>

              </div>

              <div className="card flex flex-col items-center text-center sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none">

                  <picture className="card__picture">
                    <img src="/medico3.jpg" alt="Dr. Fhellipe Saymon — Médico na Clínica ElevPrime" className="lcp" width="368" height="459" loading="lazy" draggable="false" srcSet="" sizes="" />
                  </picture>
                <span className="card__tagline category">
                  Especialista
                </span>
                <a href="#contato" target="_self" className="card__title">

                  <h4>
                    Dr. Fhellipe Saymon
                  </h4>

                </a>
                <p className="card__short-description">
                  Focado em diagnósticos precisos e tratamentos humanizados de alta qualidade.
                </p>
                <p className="card__btn">

                  <a className="button-link" href="#contato" target="_self">
                    Agendar com Dr. Fhellipe
                  </a>

                </p>

              </div>

              <div className="card flex flex-col items-center text-center">

                  <picture className="card__picture">
                    <img src="/medico4.jpg" alt="Dra. Franciely L Avelino — Médica na Clínica ElevPrime" className="lcp" width="368" height="459" loading="lazy" draggable="false" srcSet="" sizes="" />
                  </picture>
                <span className="card__tagline category">
                  Especialista
                </span>
                <a href="#contato" target="_self" className="card__title">

                  <h4>
                    Dra. Franciely L Avelino
                  </h4>

                </a>
                <p className="card__short-description">
                  Dedicação e cuidado atencioso para a saúde e qualidade de vida dos pacientes.
                </p>
                <p className="card__btn">

                  <a className="button-link" href="#contato" target="_self">
                    Agendar com Dra. Franciely
                  </a>

                </p>

              </div>

              <div className="card flex flex-col items-center text-center">

                  <picture className="card__picture">
                    <img src="/medico5.jpg" alt="Dr. Américo Motta — Médico na Clínica ElevPrime" className="lcp" width="368" height="459" loading="lazy" draggable="false" srcSet="" sizes="" />
                  </picture>
                <span className="card__tagline category">
                  Especialista
                </span>
                <a href="#contato" target="_self" className="card__title">

                  <h4>
                    Dr. Américo Motta
                  </h4>

                </a>
                <p className="card__short-description">
                  Experiência e compromisso com a excelência clínica e o atendimento humanizado.
                </p>
                <p className="card__btn">

                  <a className="button-link" href="#contato" target="_self">
                    Agendar com Dr. Américo
                  </a>

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      <div className="box box26 fadeInUp full-visible !hidden" id="boxNewsletter" data-macro="Umbraco.Cms.Core.Models.PartialViewMacroModel
    .MacroAlias" data-timestamp="639140518539041305" aria-hidden="true">

        <div>

          <div>

            <p className="category">

              Newsletter ElevPrime

            </p>
            <h2>

              Receba novidades sobre saúde e eventos na clínica

            </h2>
            <p>

              Dicas de prevenção, campanhas de vacinação, novos especialistas e conteúdos selecionados para você cuidar melhor da sua família.

            </p>
            <p className="button-link">

              <a href="#contato">

                Inscrever-me

              </a>

            </p>

          </div>
          <div>

            <picture>

              <img src="/assets/asset_97.svg" alt="Newsletter" loading="lazy" srcSet="" sizes="" />

            </picture>

          </div>

        </div>

      </div>


    </div>
  );
}
