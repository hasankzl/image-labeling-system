import React from "react";
import { connect } from "react-redux";
import kisiResim1 from "../../images/testimonials-1.jpg";
import kisiResim2 from "../../images/testimonials-2.jpg";
import kisiResim3 from "../../images/testimonials-3.jpg";
import bg1 from "../../images/bg-showcase-1.jpg";
import bg2 from "../../images/bg-showcase-2.jpg";
import bg3 from "../../images/bg-showcase-3.jpg";

export const Home = (props) => {
  return (
    <div>
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Online Resim Etiketleme Sistemi</h1>

                <form
                  className="form-subscribe"
                  id="contactForm"
                  data-sb-form-api-token="API_TOKEN"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-control form-control-lg"
                        id="emailAddress"
                        type="email"
                        placeholder="Email Adresiniz"
                        data-sb-validations="required,email"
                      />
                      <div
                        className="invalid-feedback text-white"
                        data-sb-feedback="emailAddress:required"
                      >
                        Email Adresi gereklidir
                      </div>
                      <div
                        className="invalid-feedback text-white"
                        data-sb-feedback="emailAddress:email"
                      >
                        Email Address gecerli degil
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        className="btn btn-primary btn-lg disabled"
                        id="submitButton"
                        type="submit"
                      >
                        Gonder
                      </button>
                    </div>
                  </div>

                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      <p>To activate this form, sign up at</p>
                      <a
                        className="text-white"
                        href="https://startbootstrap.com/solution/contact-forms"
                      >
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>

                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary"></i>
                </div>
                <h3>Responsive Tasarim</h3>
                <p className="lead mb-0">
                  Responsive tasarim ile uygulamamizi rahatlikla
                  kullanabilirsiniz.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary"></i>
                </div>
                <h3>Takim ??al????mas??n?? destekler</h3>
                <p className="lead mb-0">
                  ??r??n??m??z?? kullanarak tak??mlar halinde resim etiketleme
                  i??lerinizi ger??ekle??tirebilirsiniz.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary"></i>
                </div>
                <h3>Kurulumsuz Eri??im</h3>
                <p className="lead mb-0">
                  Internet olan her yerde ??r??n??m??ze eri??ip i??lemlerinizi
                  ger??ekle??tirebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <img
              className="col-lg-6 order-lg-2 text-white showcase-img"
              src={bg1}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Tak??m ??al????mas?? i??in birebir</h2>
              <p className="lead mb-0">
                ??r??n??m??z??n en temel ??zelli??i tak??m ??al????mas??n?? desteklemesidir.
                Bu sayede tak??mlar halinde resim etiketleme i??lerinizi
                ger??ekle??tirip zaman kazanabilirsiniz
              </p>
            </div>
          </div>
          <div className="row g-0">
            <img className="col-lg-6 text-white showcase-img" src={bg2} />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Kullan??m Kolayl??????</h2>
              <p className="lead mb-0">
                ??r??n??m??z??n kullan??m?? olduk??a kolayd??r. Tek ihtiyac??n??z olan
                internete ba??lanabilen bir cihaz. Onun aracal?????? ile her yerden
                resim etiketleme i??lemlerinizi ger??ekle??tirebilirsiniz
              </p>
            </div>
          </div>
          <div className="row g-0">
            <img
              className="col-lg-6 order-lg-2 text-white showcase-img"
              src={bg3}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>K??sayollar ile h??zl??ca i??lemlerini bitir</h2>
              <p className="lead mb-0">
                ??e??itli k??sayollar yard??m??yla resim etiketleme i??lemleri son
                derece h??zl?? bir ??ekilde bitirebilirsin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">Insanlar??n ??r??n??m??z hakk??nda d??????nceleri</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={kisiResim1}
                  alt="..."
                />
                <h5>Deniz B??cak</h5>
                <p className="font-weight-light mb-0">
                  Elinize sa??l??k ??ok iyi bir i?? ba??arm????s??n??z
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={kisiResim2}
                  alt="..."
                />
                <h5>Taha Sa??lam</h5>
                <p className="font-weight-light mb-0">
                  Tak??m ??al????mas?? destekli g??zel bir ??r??n olmu??, tavsiye ederim
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={kisiResim3}
                  alt="..."
                />
                <h5>Ela Y??z??c??</h5>
                <p className="font-weight-light mb-0">
                  Bu ??r??n ile sekt??rde g??zel f??rsatlar yakalayabilirsiniz.
                  Ba??ar??lar dilerim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">
                Kullanmaya haz??r m??s??n??z? Hemen kay??t olu??turun!
              </h2>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <p className="text-muted small mb-4 mb-lg-0">
                &copy; Your Website 2022. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="bi-facebook fs-3"></i>
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="#!">
                    <i className="bi-twitter fs-3"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <i className="bi-instagram fs-3"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
