import React from 'react'

export const Contact = () => {
  return (
    <div>

        <main id="main">
            <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">

                    <div className="row">

                    <div className="col-lg-6">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="info-box">
                            <i className="bx bx-map"></i>
                            <h3>Dirección</h3>
                            <p>Adam 108 </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p>info@jobsearch.com <br></br></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box">
                            <i className="bx bx-phone-call"></i>
                            <h3>Teléfono</h3>
                            <p>028456995<br></br></p>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <form className="php-email-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required></input>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required></input>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required></input>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Enviar</button></div>
                        </form>
                    </div>

                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
