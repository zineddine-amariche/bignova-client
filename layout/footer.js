import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-4 col-md-4">
                  <div className="footer-logo">
                    <a href="/">
                      <img src="images/bignovaBlance.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-5 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="#">
                        <a className="icon-cell">
                          <i className="flaticon-email"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p style={{ fontSize: "2vmin" }}>
                        +213 7-82-20-50-66 / +213 5-49-81-85-99
                        <br />
                        contact@bignova-company.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="#">
                        <a className="icon-cell">
                          <i className="flaticon-location"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p>Sidi Ahmed,Bejaia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">À propos</h5>
                  <p>
                    BigNova, une boite de developpement experts en création de
                    sites internet, applications web et mobile sur mesure,web
                    design,graphic design, conseils et optimisation digitale.
                  </p>

                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-facebook"
                          href="https://web.facebook.com/bignova.company"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://www.instagram.com/bignova06/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-linkedin"
                          href="https://www.linkedin.com/company/bignova/"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Nos liens</h5>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Acceuil</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us-1">
                        <a>À propos</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-1">
                        <a>Services</a>
                      </Link>
                    </li>
                    {/* <li><Link href="/produits"><a>Produits</a></Link></li> */}
                    <li>
                      <Link href="/produits">
                        <a>Offre d'emploi</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Nos Services</h5>
                  <ul>
                    <li>
                      <Link href="#">
                        <a>Développement de logiciels</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Développement web</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Développement mobile</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Création d'outils d'intelligence artificielle</a>
                      </Link>
                    </li>
                    {/* <li><Link href="#"><a>Solutions Web/mobile </a></Link></li> */}
                    {/* <li><Link href="#"><a>Marketing Digital </a></Link></li> */}
                    <li>
                      <Link href="#">
                        <a>Design Web/mobile</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
						   <ul>
								<li><Link href="#"><a>FAQ</a></Link></li>
								<li><Link href="#"><a>Portfolio</a></Link></li>
								<li><Link href="#"><a>Privacy Policy</a></Link></li>
								<li><Link href="#"><a>Terms & Conditions</a></Link></li>
								<li><Link href="#"><a>Support </a></Link></li>
							</ul>
						</div>
                    </div> */}
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © 2023{" "}
                  <a href="#" target="_blank">
                    BigNova
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
