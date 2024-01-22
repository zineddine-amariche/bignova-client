import { useState } from "react";

function AllServices() {
	const [open, setOpen] = useState("p2")
	return (
		<>
			{/* <!-- Service --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
			<div className="section-head style-1 text-center">
					
					<h2 className="title">Nous fournissons des services clients exeptionnels</h2>
					<div className="section-head style-1">
							
					<p>Bignova est reconnue pour son engagement envers la qualité et la satisfaction du client. L'entreprise travaille dur pour s'assurer que les solutions qu'elle fournit sont fiables, performantes et répondent aux attentes des clients. En outre, Bignova est déterminée à fournir un service client exceptionnel et est disponible pour répondre à toutes les questions et préoccupations des clients.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-md radius bg-yellow shadow-yellow"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-office"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Développement de logiciels personnalisés </h4>
								<p>Nous créons des applications personnalisées pour répondre aux besoins spécifiques des clients.En utilisant diverses technologies et langages de programmation pour créer des applications web, mobiles ou de bureau sur mesure.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-md radius bg-red shadow-red"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-website"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Développement web</h4>
								<p>Nous créons des sites web sur-mesure, ergonomiques et robustes pour les entreprises et les organisations. Nous concevons et développons des sites web statiques ou dynamiques, des sites de commerce électronique, des blogs et des forums..etc.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-md radius bg-green shadow-green"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Développement mobile</h4>
								<p>Nous développons des applications mobiles personnalisées pour répondre aux besoins spécifiques de chaque client. Les développeurs de Bignova peuvent créer des applications mobiles pour différents secteurs et plateformes tels que iOS at android</p>
							</div>
						</div>
					</div>
					
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-md radius bg-orange shadow-orange"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Création d'outils d'intelligence artificielle</h4>
								<p>Nous disposons d'une expertise en matière d'Intelligence Artificielle , nous créons des outils d'IA pour améliorer l'expérience utilisateur et offrir des fonctionnalités plus avancées.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								<a href="#" className="icon-cell">
								<i className="flaticon-office"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Design Web/mobile</h4>
								<p>Architecture de l'application web/mobile, arborescence, navigation, ergonomie, etc. Nous tenons compte de tous ces aspects afin de concevoir votre interface web/mobile avec la volonté d'offrir à vos visiteurs une expérience différenciante et agréable.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices;