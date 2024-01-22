
import TestimonialSlider from './../component/testimonialSlider';

function Testimonial() {
  return (
    <>
      <section className="content-inner bg-primary" style={{"backgroundImage":"url(images/background/bg3.png)"}}>
			<div className="px-xl-5 px-md-4 px-3">
				<div className="row testimonials-wraper-1">
					<div className="col-lg-9">
						<TestimonialSlider/>
					</div>
					<div className="col-lg-3 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="section-head style-1 text-white p-t15">
							<h6 className="sub-title bgl-light m-b20">Avis</h6>
							<h2 className="title m-b10">Découvrez ce qu'ils disent de nous ! </h2>
							{/* <p>Fusce vitae sapien eu mauris semper faucibus eget tristique lorem.</p> */}
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Testimonial;

// import TestimonialSlider from "./../component/testimonialSlider";

// function Testimonial({ data }) {
//   return (
//     <>
//       {data?.length == 0 ? null : (
//         <section
//           className="content-inner bg-primary"
//           style={{ backgroundImage: "url(images/background/bg3.png)" }}
//         >
//           <div className="px-xl-5 px-md-4 px-3">
//             <div className="row testimonials-wraper-1">
//               <div className="col-lg-9">
//                 <TestimonialSlider data={data} />
//               </div>
//               <div
//                 className="col-lg-3 wow fadeInRight"
//                 data-wow-duration="2s"
//                 data-wow-delay="0.8s"
//               >
//                 <div className="section-head style-1 text-white p-t15">
//                   <h6 className="sub-title bgl-light m-b20">Avis</h6>
//                   <h2 className="title m-b10">
//                     Découvrez ce qu'ils disent de nous !{" "}
//                   </h2>
//                   {/* <p>Fusce vitae sapien eu mauris semper faucibus eget tristique lorem.</p>  */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }

// export default Testimonial;
