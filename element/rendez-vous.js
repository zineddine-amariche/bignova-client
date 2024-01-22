import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function onChange(value) {
	console.log("Captcha value:", value);
  }

function Rendezvous() {
	const form = useRef();

  	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bhgtuqz',
	 'template_6ed06ym', 
	 form.current, 
	 'neQj30tEtxgpuNbAV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
	return (
		<>
			<section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div className="section-head style-1">
								<h6 className="sub-title bgl-primary m-b20 text-primary">Rendez-vous</h6>
								{/* <h2 className="title">We Love To Help Great Companies To Enlarge Their Revenues.</h2> */}
								<h2 className="title">Réservez dès maintenant et laissez-nous prendre soin de vous. </h2>
							</div>
							 
						</div>
						<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
							<div className="dlab-media cf-r-img">
								<img src="images/about/contact.png"  alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Rendezvous;