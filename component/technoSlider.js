import { useState } from 'react';
import Slider from "react-slick";


function TechnoSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:true,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        dots:false,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings} 
                
            >
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
					
                >
                    {/* <div className="testimonial-1"></div> */}
                    
                      
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/react.png"
                                    alt=""
                                />
                           
                           
                        </div>
                    
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    
                    
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/angular.png"
                                    alt=""
                                />
                            
                            
                        </div>
                    
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                    
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/node.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/mongo.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/kafka.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/next.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/java.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/python.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/django.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/spring.png"
                                    alt=""
                                />
                            
                           
                        </div>
                   
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/elastic.png"
                                    alt=""
                                />
                            
                           
                        </div>
                   
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/docker.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/bateau.png"
                                    alt=""
                                />
                            
                           
                        </div>
                   
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/aws.png"
                                    alt=""
                                />
                            
                           
                        </div>
                    
                </div>

                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    
                       
                        <div className="testimonial-detail">
                            
                                <img
                                    src="images/techno/figma.png"
                                    alt=""
                                />
                            
                           
                        </div>
                   
                </div>
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TechnoSlider;
