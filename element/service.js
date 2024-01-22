import { useEffect, useState } from "react";
import Link from 'next/link';
// import { WOW } from "wowjs";

function Service() {
  const [open, setOpen] = useState("p2");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className="content-inner wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Nos valeurs
            </h6>
            <h2 className="title">Ce qui fait notre quotidien</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
					<Link href="#">
					  <a className="icon-cell">
						<img src="images/gens.png"></img>
					  </a>
					</Link>  
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Orientée vers les gens</h4>
                  <p>
                  Chez BigNova la priorité, c'est d'offrir un environnement de travail sain, agréable, épanouissant et respectueux pour tout un chacun.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-skyblue shadow-skyblue">
					<Link href="#">	
						<a className="icon-cell">
							<img src="images/passion.png"></img>
						</a>
					</Link>	
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">La passion</h4>
                  <p>
                  Notre travail est un domaine passionnant qui suscite constamment notre curiosité. Nous découvrons, apprenons et diffusons chaque jour. Nous ne tenons pas notre expertise pour acquise, il y a toujours la prochaine révolution à venir.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
					<Link href="#">	
						<a className="icon-cell">
							<img src="images/transparence.png"></img>
						</a>
					</Link>	
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">La transparence</h4>
                  <p>
                  Nous voulons travailler efficacement et favoriser la confiance dans le processus collaboratif. Par conséquent, nous communiquons de manière claire et franche et évitons les suppositions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
