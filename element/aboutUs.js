import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/about.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">Qui sommes-nous ?</h6>
                              <h2 className="title">Un groupe de personnes enthousiastes</h2>
                          </div>
                            <p>BigNova, une boite de developpement créative et réactive.</p>
                          <p className="m-b30">Experts en création de sites internet, applications web et mobile sur mesure,web design,graphic design, conseils et optimisation digitale, BigNova est une boite fondée et dirigée par des technologues du web , mobile et de design.</p>
                          <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">BigNova</h4>
                         <Link href="/about-us-1"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a></Link> 
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;