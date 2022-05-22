import React from 'react'

export const Home = () => {
  return (
    <div>
      <section id="hero" className="d-flex justify-cntent-center align-items-center">
        <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

          
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">Bienvenido <span>Job-Search</span></h2>
              <p className="animate__animated animate__fadeInUp"><h5> Encuentra tu empleo ideal con tan solo un click. Proceso de búsqueda rápido y fácil.</h5></p>
            </div>
          </div>

          
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">Descubre las mejores empresas </h2>
              <p className="animate__animated animate__fadeInUp"><h5>Trabajo presencial o remoto , part-time o full-time. Tú decides</h5></p>
            </div>
          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
          </a>

        </div>
      </section>

      <main id="main">
        <section className="services">
          <div className="container">

            <div className="row">

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box icon-box-blue">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title">Detecta oportunidades</h4>
                  <p className="description">A nivel mundial, los desarrollodores front y back end están entre los más buscados.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                <div className="icon-box icon-box-pink">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4 className="title">Disponibilidad</h4>
                  <p className="description">Trabajos desde casa o desde cualquier lugar del mundo. Puedes asumir tus retos día a día de la forma que prefieras.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box icon-box-cyan">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4 className="title">Las mejores empresas</h4>
                  <p className="description"> Si tu perfil es el indicado, lograrás que las empresas te contacten directamente para ofrecerte una oferta laboral.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box icon-box-green">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4 className="title">Gana Dólores</h4>
                  <p className="description">Diferentes empresas pagan sus salarios en dólares. Dichos salarios son altamente competitivos </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section className="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <img src="assets/img/features-1.svg" className="img-fluid" alt=""></img>
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-center p-5">

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-fingerprint"></i></div>
                  <h4 className="title">Si eres desarrollador POSTULATE!</h4>
                  <p className="description"> Analiza cual es la mejor propuesta que se adapte en base a tus habilidades</p>
                </div>

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-gift"></i></div>
                  <h4 className="title">Si eres un reclutador CREA OFERTAS!</h4>
                  <p className="description">Encuentra el mejor profesional para tu empresa </p>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
