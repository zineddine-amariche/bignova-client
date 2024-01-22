import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Link from "next/link";
import Cta from "../element/cta";
import BlogCard from "../element/blogcard";

import styles from "../styles/service-details-1.module.css";

function blog() {
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
              <h1>Blog Detail</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <SectionBolg/> // comment this part to add new blog version   */}
        <NewBodyBlog />
      </div>
      <Footer />
    </>
  );
}

export default blog;

const NewBodyBlog = () => {
    const blogData = [
      {
        image: "Images/blogImg.jpg",
        date: "June 1, 2023",
        name: "Blog Post 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "Images/blogImg.jpg",
        date: "June 1, 2023",
        name: "Blog Post 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "Images/blogImg.jpg",
        date: "June 1, 2023",
        name: "Blog Post 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
  
      // Add more objects for other blog cards
    ];
  
    return (
      <section
        className="content-inner bg-img-fix"
        style={{
          backgroundImage: "url(images/background/bg1.png)",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">Blog</h6>
            <h2 className="title">En savoir plus sur nos blogs</h2>
          </div>
          <div className={styles.rowContainer}>
            {blogData.map((data, index) => (
              <div className={styles.card}>
                <BlogCard {...data} key={index} />
                <BlogCard {...data} key={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };