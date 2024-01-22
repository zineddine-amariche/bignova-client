import Link from "next/link";
import Quote from "../element/quote";
import Rendezvous from "../element/rendez-vous";
import Footer from "../layout/footer";
import Header from "../layout/header-3";


function RendezVous() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Rendez-vous</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Acceuil</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Rendez-vous</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Get A Quote --> */}
		<Rendezvous/>
		
 
 
	</div>
	<Footer/>
    </>
  )
}

export default RendezVous;