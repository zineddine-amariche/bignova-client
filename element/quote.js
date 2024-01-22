import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function onChange(value) {
	console.log("Captcha value:", value);
  }

function Quote() {
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
								<h6 className="sub-title bgl-primary m-b20 text-primary">Contacter-nous</h6>
								{/* <h2 className="title">We Love To Help Great Companies To Enlarge Their Revenues.</h2> */}
								<h2 className="title">BigNova est à votre service pour toutes vos questions</h2>
							</div>
							<form className="dlab-form dzForm" method="POST" action="script/contact.php" ref={form} onSubmit={sendEmail}>
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzName" type="text" required className="form-control" placeholder="Nom" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzLastName" type="text" className="form-control" required placeholder="Prénom" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope"></i></span>
											</div>
											<input name="dzEmail" type="text" required className="form-control" placeholder="Adresse e-mail" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-phone"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Numéro de téléphone " />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-file-alt"></i></span>
											</div>
											<input name="project_title" type="text" className="form-control" required placeholder="Titre du projet" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-list"></i></span>
											</div>
											<select name="dzOther[choose_service]" className="form-control" required>
												<option selected>Choisir un service</option>
												<option value="1">Developpement web</option>
												<option value="2">Developpement mobile</option>
												<option value="3">Design web</option>
												<option value="4">Stratégie et recherche</option>
												<option value="5">Marketing digital</option>
											</select>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-sms"></i></span>
											</div>
											<textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
										</div>
									</div>
									{/* <div className="col-sm-12">
										<div className="input-group">
											<div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style={{ "display": "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
										</div>
									</div> */}
									<ReCAPTCHA
										sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
										onChange={onChange}
									/>
									<div className="col-sm-12 mt-2">
										<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Soumettre</button>
									</div>
								</div>
							</form>
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

export default Quote;