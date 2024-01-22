import OffresCards from "./OffresCards";


function Offres() {
  return (
    <>
      <section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Offres</h6>
					<h2 className="title">Nos Offres</h2>
				</div>

				<OffresCards />
			</div>
		</section>
    </>
  )
}

export default Offres;