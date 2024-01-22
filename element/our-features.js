

function Features() {
    return (
      <>
        <section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Caractéristiques</h6>
							<h2 className="title">Notre méthode de travail pour vous aider à dynamiser votre entreprise</h2>
						</div>
						<div className="section-wraper-one">
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-red"> 
									<a href="#" className="icon-cell">
										<i className="flaticon-idea"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Collecte d'idées et d'analyses</h4>
									<p>Nous analysons votre entreprise pour comprendre son fonctionnement. Examinez les outils utilisés, les processus mis en œuvre, les styles et les habitudes de communication. Le résultat est un plan d'action pour nos experts à décoller.</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-yellow"> 
									<a href="#" className="icon-cell">
										<i className="flaticon-line-graph"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Conception et développement</h4>
									<p>Nous créons des logiciels, ergonomiques et fonctionnels. Nous respectons et intégrons également les normes d'éco-conception et d'accessibilité web/mobile lors de la création de votre site internet/application mobile.</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-green"> 
									<a href="#" className="icon-cell">
										<i className="flaticon-rocket"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Tests et deploiement</h4>
									<p>Assurez la qualité de votre produit en testant automatiquement chaque modification apportée.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-5 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-media">
							<img src="images/about/features.png" className="move-2" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Features;