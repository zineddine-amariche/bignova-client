

import Footer from '../layout/footer';
import Header from '../layout/header-3';
import { useState } from "react";
import AllServices from '../element/all-services';
import Team from '../element/team';
import Testimonial from '../element/testimonial';
import Link from 'next/link';
import Quote from '../element/quote';


function Produits() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Nos offres d'emploi</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Acceuil</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Offre D'emploi</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
			
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							{/* <div className="icon-bx-md radius bg-yellow shadow-yellow"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-office"></i>
								</a> 
							</div> */}
							<div className="icon-content">
								<h4 className="dlab-title">Développeur fullstack Django/Angular</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<br/>
							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<Link href='/services-details-1'>
									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
								</Link>	
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							{/* <div className="icon-bx-md radius bg-red shadow-red"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-website"></i>
								</a> 
							</div> */}
								<div className="icon-content">
								<h4 className="dlab-title">Développeur frontend react-js/react-native</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<br/>
							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<Link href='/services-details-1'>
									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
								</Link>	
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							
							<div className="icon-content">
								<h4 className="dlab-title">Data scientist</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<br/>
							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<Link href='/services-details-1'>
									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
								</Link>	
							</div>
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
						
						<div className="icon-content">
								<h4 className="dlab-title">Développeur frontend reat-native</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<br/>
							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<Link href='/services-details-1'>
									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
								</Link>	
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
						<div className="icon-content">
								<h4 className="dlab-title">Ui/Ux Designer</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<br/>
							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<Link href='/services-details-1'>
									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
								</Link>	
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">
						<div className={`${open === "p7" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p7")}>
						<div className="icon-content">
								<h4 className="dlab-title">Développeur logiciels</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<br/>
							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<Link href='/services-details-1'>
									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
								</Link>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Newsletter --> */}
		{/* <section className="content-inner-3 bg-primary" style={{"backgroundImage":"url(images/background/bg13.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-media m-b30">
							<img src="images/about/img9.png" className="move-2" alt=""/>
						</div>
					</div>
					<div className="col-lg-8 col-md-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 text-white">
							<h6 className="sub-title bgl-light m-b20">Newsletter</h6>
							<h2 className="title m-b30">Subscribe To Our Newsletter For Latest Update Of Finanical Services </h2>
							<p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p>
						</div>
						<div className="dlab-subscribe style-2 max-w500">
							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
								<div className="dzSubscribeMsg"></div>
								<div className="form-group">
									<div className="input-group">
										<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
										<div className="input-group-addon">
											<button name="submit" value="Submit" type="submit" className="btn rounded-xl shadow btn-primary">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>	 */}
		
		{/* <!-- Fetures --> */}
		{/* <section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Fetures</h6>
							<h2 className="title">Our Working Process To Help Your Boost Your Business</h2>
						</div>
						<div className="section-wraper-one">
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-red"> 
									<Link href="#">
										<a  className="icon-cell">
											<i className="flaticon-idea"></i>
										</a>
									</Link>	
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Idea & Analysis Gathering</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-yellow"> 
									<Link href="#">	
										<a className="icon-cell">
											<i className="flaticon-line-graph"></i>
										</a> 
									</Link>	
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Designing & Developing</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-green"> 
									<Link href="#">
										<a className="icon-cell">
											<i className="flaticon-rocket"></i>
										</a> 
									</Link>	
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Testing & Lunching</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-5 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-media">
							<img src="images/about/img5.png" className="move-2" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section> */}
		
		{/* <!-- Team --> */}
		{/* <Team/> */}
		
		{/* <!-- Testimonials --> */}
		<Testimonial/>
		<div className="content-inner"></div>
		{/* <!-- Get A Quote --> */}
		{/* <Quote/> */}
		
		{/* <!-- Call To action --> */}
		{/* <section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<Link href='/contact-us-1'>
							<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
						</Link>	
					</div>
				</div>
			</div>
		</section> */}
		
	</div>
    <Footer/>
    </>
  )
}

export default Produits;

// import Footer from '../layout/footer';
// import Header from '../layout/header-3';
// import { useState } from "react";
// import AllServices from '../element/all-services';
// import Team from '../element/team';
// import Testimonial from '../element/testimonial';
// import Link from 'next/link';
// import Quote from '../element/quote';


// export async function getServerSideProps() {
// 	try {
// 	  let url = "http://localhost:8000/api/getJobs";
// 	  const res = await fetch(url);
  
// 	  if (!res.ok) {
// 		throw new Error('Request failed with status code ' + res.status);
// 	  }
  
// 	  const data = await res.json();
  
// 	  // ... remaining code ...
// 	  	  return {
// 		props: {
// 		  res: data
// 		}
// 	  };
// 	} catch (error) {
// 	  console.error('Error fetching or parsing data:', error);
// 	  return {
// 		props: {
// 		  res: null
// 		}
// 	  };
// 	}
//   }


// function Produits({res}) {
//     const [open, setOpen] = useState("p2")
//   return (
//     <>
//     <Header/>
//     <div className="page-content bg-white">
// 		{/* <!-- Banner  --> */}
// 		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
// 			<div className="container">
// 				<div className="dlab-bnr-inr-entry">
// 					<h1>Nos offres d'emploi</h1>
// 					{/* <!-- Breadcrumb Row --> */}
// 					<nav aria-label="breadcrumb" className="breadcrumb-row">
// 						<ul className="breadcrumb">
// 							<li className="breadcrumb-item"><Link href="/"><a>Acceuil</a></Link></li>
// 							<li className="breadcrumb-item active" aria-current="page">Offre D'emploi</li>
// 						</ul>
// 					</nav>
// 					{/* <!-- Breadcrumb Row End --> */}
// 				</div>
// 			</div>
// 		</div>
// 		{/* <!-- Banner End --> */}
		
// 		{/* <!-- Services --> */}
// 		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
// 			<div className="container">
			
// 				<div className="row">
// 					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
// 					<div className={`${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
// 							{/* <div className="icon-bx-md radius bg-yellow shadow-yellow"> 
// 								<a href="#" className="icon-cell">
// 									<i className="flaticon-office"></i>
// 								</a> 
// 							</div> */}
// 							<div className="icon-content">
// 								<h4 className="dlab-title">Développeur fullstack Django/Angular</h4>
// 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// 							</div>
// 							<br/>
// 							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
// 								<Link href='/services-details-1'>
// 									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
// 								</Link>	
// 							</div>
// 						</div>
// 					</div>
// 					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
// 						<div className={`${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
// 							{/* <div className="icon-bx-md radius bg-red shadow-red"> 
// 								<a href="#" className="icon-cell">
// 									<i className="flaticon-website"></i>
// 								</a> 
// 							</div> */}
// 								<div className="icon-content">
// 								<h4 className="dlab-title">Développeur frontend react-js/react-native</h4>
// 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// 							</div>
// 							<br/>
// 							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
// 								<Link href='/services-details-1'>
// 									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
// 								</Link>	
// 							</div>
// 						</div>
// 					</div>
// 					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
// 						<div className={`${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							
// 							<div className="icon-content">
// 								<h4 className="dlab-title">Data scientist</h4>
// 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// 							</div>
// 							<br/>
// 							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
// 								<Link href='/services-details-1'>
// 									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
// 								</Link>	
// 							</div>
// 						</div>
// 					</div>
					
// 					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
// 						<div className={`${open === "p5" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
						
// 						<div className="icon-content">
// 								<h4 className="dlab-title">Développeur frontend reat-native</h4>
// 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// 							</div>
// 							<br/>
// 							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
// 								<Link href='/services-details-1'>
// 									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
// 								</Link>	
// 							</div>
// 						</div>
// 					</div>
// 					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
// 						<div className={`${open === "p6" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
// 						<div className="icon-content">
// 								<h4 className="dlab-title">Ui/Ux Designer</h4>
// 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// 							</div>
// 							<br/>
// 							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
// 								<Link href='/services-details-1'>
// 									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
// 								</Link>	
// 							</div>
// 						</div>
// 					</div>
// 					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">
// 						<div className={`${open === "p7" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p7")}>
// 						<div className="icon-content">
// 								<h4 className="dlab-title">Développeur logiciels</h4>
// 								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// 							</div>
// 							<br/>
// 							<div className="col-lg-8 col-md-6 text-left m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
// 								<Link href='/services-details-1'>
// 									<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>En savoir plus</a>
// 								</Link>	
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
		
// 		{/* <!-- Newsletter --> */}
// 		{/* <section className="content-inner-3 bg-primary" style={{"backgroundImage":"url(images/background/bg13.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
// 			<div className="container">
// 				<div className="row align-items-center">
// 					<div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
// 						<div className="dlab-media m-b30">
// 							<img src="images/about/img9.png" className="move-2" alt=""/>
// 						</div>
// 					</div>
// 					<div className="col-lg-8 col-md-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
// 						<div className="section-head style-1 text-white">
// 							<h6 className="sub-title bgl-light m-b20">Newsletter</h6>
// 							<h2 className="title m-b30">Subscribe To Our Newsletter For Latest Update Of Finanical Services </h2>
// 							<p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p>
// 						</div>
// 						<div className="dlab-subscribe style-2 max-w500">
// 							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
// 								<div className="dzSubscribeMsg"></div>
// 								<div className="form-group">
// 									<div className="input-group">
// 										<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
// 										<div className="input-group-addon">
// 											<button name="submit" value="Submit" type="submit" className="btn rounded-xl shadow btn-primary">Subscribe Now</button>
// 										</div>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>	 */}
		
// 		{/* <!-- Fetures --> */}
// 		{/* <section className="content-inner-2">
// 			<div className="container">
// 				<div className="row align-items-center">
// 					<div className="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
// 						<div className="section-head style-1">
// 							<h6 className="sub-title bgl-primary m-b20 text-primary">Fetures</h6>
// 							<h2 className="title">Our Working Process To Help Your Boost Your Business</h2>
// 						</div>
// 						<div className="section-wraper-one">
// 							<div className="icon-bx-wraper style-2 left m-b30">
// 								<div className="icon-bx-md radius bg-white text-red"> 
// 									<Link href="#">
// 										<a  className="icon-cell">
// 											<i className="flaticon-idea"></i>
// 										</a>
// 									</Link>	
// 								</div>
// 								<div className="icon-content">
// 									<h4 className="dlab-title">Idea & Analysis Gathering</h4>
// 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// 								</div>
// 							</div>
// 							<div className="icon-bx-wraper style-2 left m-b30">
// 								<div className="icon-bx-md radius bg-white text-yellow"> 
// 									<Link href="#">	
// 										<a className="icon-cell">
// 											<i className="flaticon-line-graph"></i>
// 										</a> 
// 									</Link>	
// 								</div>
// 								<div className="icon-content">
// 									<h4 className="dlab-title">Designing & Developing</h4>
// 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
// 								</div>
// 							</div>
// 							<div className="icon-bx-wraper style-2 left m-b30">
// 								<div className="icon-bx-md radius bg-white text-green"> 
// 									<Link href="#">
// 										<a className="icon-cell">
// 											<i className="flaticon-rocket"></i>
// 										</a> 
// 									</Link>	
// 								</div>
// 								<div className="icon-content">
// 									<h4 className="dlab-title">Testing & Lunching</h4>
// 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="col-xl-6 col-lg-5 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
// 						<div className="dlab-media">
// 							<img src="images/about/img5.png" className="move-2" alt=""/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section> */}
		
// 		{/* <!-- Team --> */}
// 		{/* <Team/> */}
		
// 		{/* <!-- Testimonials --> */}
// 		<Testimonial data={res}/>
// 		<div className="content-inner"></div>
// 		{/* <!-- Get A Quote --> */}
// 		{/* <Quote/> */}
		
// 		{/* <!-- Call To action --> */}
// 		{/* <section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
// 			<div className="container">
// 				<div className="row action-box style-1 align-items-center">
// 					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
// 						<div className="section-head style-1">
// 							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
// 							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
// 						</div>
// 					</div>
// 					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
// 						<Link href='/contact-us-1'>
// 							<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
// 						</Link>	
// 					</div>
// 				</div>
// 			</div>
// 		</section> */}
		
// 	</div>
//     <Footer/>
//     </>
//   )
// }

// export default Produits;