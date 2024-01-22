import Link from "next/link";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import styles from "../styles/service-details-1.module.css";

const BlogCard = ({ image, date, name, description }) => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  return (
    <div className={styles.gap}>
      <div
        className="item mx-3 my-4 wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
      >
        <div className="dlab-blog style-1 bg-white text-center">
          <div className="dlab-media">
            <img
              src={`images/blog/blog-grid-1/pic${randomNumber}.jpg`}
              alt=""
            />
          </div>
          <div className="dlab-info">
            <h5 className="dlab-title">
              <Link href="/blog-details-1">
                <a>
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </a>
              </Link>
            </h5>
            <p className="m-b0">
              Pellentesque vel nibh gravida erat interdum lacinia vel in lectus.
              Sed fermentum pulvinar.
            </p>
            <div className="dlab-meta meta-bottom">
              <ul>
                <li className="post-date">
                  <i className="flaticon-clock m-r10"></i>7 March, 2020
                </li>
                <li className="post-comment">
                  {/* <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                        </a> */}
                </li>
                <li className="post-share">
                  <i className="flaticon-share"></i>
                  <ul>
                    <li>
                      <FacebookShareButton
                        url={"google.com"}
                        quote={"share to facebook"}
                      >
                        <a
                          className="fa fa-facebook"
                          // href="https://en-gb.facebook.com/"
                        ></a>
                      </FacebookShareButton>
                    </li>
                    <li>
                      <TwitterShareButton
                        url={"google.com"}
                        quote={"share to twitter"}
                      >
                        <a
                          className="fa fa-twitter"
                          // href="https://twitter.com/login?lang=en"
                        ></a>
                      </TwitterShareButton>
                    </li>
                    <li>
                      <LinkedinShareButton
                        url={"google.com"}
                        quote={"share to linkedin"}
                      >
                        <a
                          className="fa fa-linkedin"
                          // href="https://www.linkedin.com/login"
                        ></a>
                      </LinkedinShareButton>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
