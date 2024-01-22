
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from "../styles/header.module.css";

function Header() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
	 /* for class fixed  */
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
    const router = useRouter();
	
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent text-black mo-left" id="fix-header">
            {/* <!-- Main Header --> */}
            <div className={`sticky-header main-bar-wraper navbar-expand-lg ${scroll ? "is-fixed" : ""}`}>
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/"><a><img src="images/bignova.png" alt="" style={{width:60}}/></a></Link>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="/rendez-vous"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Prendre Rendez-vous.</a></Link>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/bignova.png" alt="" style={{width:60}}/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/"><a 
                                className={
                                    router.pathname === "/" ? styles.active : ""
                                  }
                                >Acceuil</a></Link></li>
                                {/* <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>À propos</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/about-us-1"><a>À propos BigNova</a></Link></li>
										<li><Link href="/faq-1"><a>Faq</a></Link></li>
                                        <li><Link href="/pricing-table-1"><a>Pricing Table</a></Link></li>
										<li><Link href="/team-1"><a>Equipe</a></Link></li>
                                        <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                        <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                        <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                    </ul>
                                </li> */}
                                
                                {/* <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu"> */}
                						<li><Link href="/about-us-1"><a>À propos</a></Link></li>	
										<li><Link href="/services-1"><a>Services</a></Link></li>
										{/* <li><Link href="/services-details-1"><a>Détail des services</a></Link></li> */}
                                    {/* </ul>
                                </li> */}
                                {/* <li><Link href="/produits"><a>Produits</a></Link></li> */}
                                {/* <li><Link href="/produits"><a>Offre d'emploi</a></Link></li> */}
                                {/* <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu"> */}
                                        {/* <li><Link href="/blog-large-right-sidebar"><a>Large barre latérale droite</a></Link></li> */}
										<li><Link href="/blogs"><a>Blog</a></Link></li>
                                    {/* </ul>
                                </li> */}
								{/* <li><Link href="/contact-us-1"><a>Contacter-nous</a></Link></li> */}
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    
                                    <Link href="https://en-gb.facebook.com/"><a className="fa fa-facebook"></a></Link>
                                    <Link href="https://twitter.com/login?lang=en"><a className="fa fa-twitter"></a></Link>
                                    <Link href="https://www.linkedin.com/login"><a className="fa fa-linkedin"></a></Link>
                                    <Link href="https://www.instagram.com/"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header;

  