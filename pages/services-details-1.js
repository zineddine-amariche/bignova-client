import Footer from '../layout/footer';
import Header from '../layout/header-3';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import AllServices from '../element/all-services';
import Link from 'next/link';
import Quote3 from '../element/-quote-3';


 
  


function ServicesDetails1(props) {
	const [isOpen, setOpen] = useState(false)

  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Développeur web</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Acceuil</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Details de l'offre </li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/blog/default/thum1.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Développeur web</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								<ul className="list-arrow primary m-b30">
										<li>Lorem Ipsum is simply dummy text of the printing.</li>
										<li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
										<li>when an unknown printer took a galley of type and scrambled.</li>
										<li>It has survived not only five centuries, but also the leap.</li>
										<li>Recently with desktop publishing software like Aldus PageMaker.</li>
										<li>Lorem Ipsum is simply dummy text of the printing industry.</li>
									</ul>
							</div>
							{/* <div className="row">
								<div className="col-lg-6">
									<h3>How You Start Web Development ?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
									<ul className="list-arrow primary m-b30">
										<li>Lorem Ipsum is simply dummy text of the printing.</li>
										<li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
										<li>when an unknown printer took a galley of type and scrambled.</li>
										<li>It has survived not only five centuries, but also the leap.</li>
										<li>Recently with desktop publishing software like Aldus PageMaker.</li>
										<li>Lorem Ipsum is simply dummy text of the printing industry.</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<div className="video-bx style-3">
										<img src="images/video/pic3.jpg" alt=""/>
										<div className="video-btn">
										<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
										</div>
										<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Service --> */}
		{/* <AllServices/> */}
		
		{/* <!-- Call To action --> */}
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Faites-partie de l’équipe BigNova</h6>
							<h2 className="title">Rejoindre notre équipe, c'est rejoindre une communauté de personnes passionnées et engagées. </h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						{/* <Link href='/emploi'> 
							<a className="btn btn-link d-inline-flex align-items-center">
								<i className="fa fa-angle-right m-r10"></i>Postulez maintenant !
							</a>
						</Link> */}
					</div>
				</div>
			</div>
		</section>
		<div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Postulez À notre offre</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Acceuil</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Candidature
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>

        {/* <!-- Get A Quote --> */}
        <Quote3 />
      </div>
		
	</div>
     <Footer/>
    </>
  )
}

export default ServicesDetails1;