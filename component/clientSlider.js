import Slider from "react-slick";

function ClientSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/nbk-logo.png"
              alt="startup française"
            />
            {/* <img
							className="logo-hover"
							src="images/logo/nbk-logo.png"
							alt=""
							
						/> */}
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/resto-logo.png"
              alt="Plateforme de livraison"
            />
            {/* <img
							className="logo-hover"
							src="images/logo/resto-logo.png"
							alt=""
						/> */}
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/infoware.png"
              alt="Entreprise de vente et maintenance informatique"
            />
            {/* <img
							className="logo-hover"
							src="images/logo/touloum.png"
							alt=""
						/> */}
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/bdl.png"
              alt="Banque de dévelppement local"
            />
            {/* <img
							className="logo-hover"
							src="images/logo/ctib.png"
							alt=""
						/> */}
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/touloum.png"
              alt="Promotion immobiliére"
            />
            {/* <img
							className="logo-hover"
							src="images/logo/touloum.png"
							alt=""
						/> */}
          </div>
        </div>
        {/* <div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple5.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light5.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple6.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light6.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple6.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light6.png"
							alt=""
						/>
					</div>
				</div> */}
      </Slider>
    </>
  );
}

export default ClientSlider;
