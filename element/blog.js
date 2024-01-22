import BlogSlider from "../component/blogSlider";


function Blog() {
  return (
    <>
      <section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Blog</h6>
					<h2 className="title">Nos récents blog</h2>
				</div>
				<BlogSlider/>
			</div>
		</section>
    </>
  )
}

export default Blog;