import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/header.module.css";

function Header3() {
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

//   console.log("router.pathname", router.pathname);
  return (
    <>
      {/* <!-- Header --> */}
      <header
        className="site-header header-transparent mo-left"
        id="fix-header"
      >
        {/* <!-- Main Header --> */}
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            scroll ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a>
                    <img
                      className="custom-logo-white"
                      src="images/bignovaBlance.png"
                      alt=""
                      style={{ width: 60 }}
                    />
                    {/* <img className="custom-logo" src="images/logo.png" alt="" /> */}
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="/rendez-vous">
                    <a className="btn btn-corner gradient btn-primary">
                      <i className="fa fa-angle-right m-r10"></i>Prendre Rendez-vous
                    </a>
                  </Link>
                </div>
              </div>

              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a>
                      <img
                        src="images/bignova.png"
                        alt=""
                        style={{ width: 60 }}
                      />
                    </a>
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar">
                  <li>
                    <Link href="/">
                      <a>Acceuil</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us-1">
                      <a
                        className={
                          router.pathname === "/about-us-1" ? styles.active : ""
                        }
                      >
                        À propos
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-1">
                      <a
                        className={
                          router.pathname === "/services-1" ? styles.active : ""
                        }
                      >
                        Services
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/produits">
                      <a
                        className={
                          router.pathname === "/produits" ? styles.active : ""
                        }
                      >
                        Offre d'emploi
                      </a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/blogs">
                      <a
                        className={
                          router.pathname === "/blog-details-1"
                            ? styles.active
                            : ""
                        }
                      >
                        Blog
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://en-gb.facebook.com/">
                      <a className="fa fa-facebook"></a>
                    </Link>
                    <Link href="https://twitter.com/login?lang=en">
                      <a className="fa fa-twitter"></a>
                    </Link>
                    <Link href="https://www.linkedin.com/login">
                      <a className="fa fa-linkedin"></a>
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <a className="fa fa-instagram"></a>
                    </Link>
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
  );
}

export default Header3;

//   <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
//   <div className="logo-header">
//       <Link href="/"><a><img src="images/bignova.png" alt=""style={{width:60}}/></a></Link>
//   </div>
//   <ul className="nav navbar-nav navbar">
//       <li><Link href="/"><a>Acceuil</a></Link></li>

{
  /* <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
          <ul className="sub-menu"> */
}
{
  /* <li><Link href="/about-us-1"><a>À propos</a></Link></li>
              <li><Link href="/services-1"><a>Services</a></Link></li> */
}
{
  /* <li><Link href="/services-details-1"><a>Services Details</a></Link></li>
          </ul>
      </li> */
}
{
  /* <li><Link href="/produits"><a>Produits</a></Link></li> */
}
{
  /* <li><Link href="/produits"><a>Offre d'emploi</a></Link></li> */
}
{
  /* <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
          <ul className="sub-menu">
              <li><Link href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></Link></li> */
}
{
  /* <li><Link href="/blog-details-1"><a>Blog</a></Link></li> */
}
{
  /* </ul>
      </li> */
}
{
  /* <li><Link href="/contact-us-1"><a>Contact Us</a></Link></li> */
}
{
  /* </ul>
  <div className="dlab-social-icon">
      <ul>
          <Link href="https://en-gb.facebook.com/"><a className="fa fa-facebook"></a></Link>
          <Link href="https://twitter.com/login?lang=en"><a className="fa fa-twitter"></a></Link>
          <Link href="https://www.linkedin.com/login"><a className="fa fa-linkedin"></a></Link>
          <Link href="https://www.instagram.com/"><a className="fa fa-instagram"></a></Link>
      </ul>
  </div>		
</div> */
}
