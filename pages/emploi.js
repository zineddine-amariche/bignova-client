import Link from "next/link";
import Quote3 from "../element/-quote-3";
import Quote from "../element/quote";
import Footer from "../layout/footer";
import Header from "../layout/header-3";

function Emploi() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default Emploi;
