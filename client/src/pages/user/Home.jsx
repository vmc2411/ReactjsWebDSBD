import React from 'react'

function Home() {
  return (
   <div id="all">
  <div id="content">
    <div className="row">
      <div className="col-md-12">
        <div id="main-slider" className="owl-carousel owl-theme">
          <div className="item"><img src="football.jpeg" /> </div>
          <div className="item"><img src="football.jpeg" /> </div>
          <div className="item"><img src="img football.jpeg" /></div>
          <div className="item"><img src="img football.jpeg" /></div>
        </div>
      </div>
    </div>
    {/* <section class="carousel">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h1>Learn on your schedule</h1>
                <p>Study any topic, anytime. Choose from thousands of expert-led cour ses now.</p>
                <form class="">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for anything"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section> */}
    <section className="services" id="service"> 
      <div className="container">
        <div className="content_service text-center">
          <h3>massive services</h3>
          <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
            nemo minima rerums unsers sadips amets.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="icon"> <i className="fa fa-lightbulb" /></div>
              <div className="title_items text-uppercase">
                <h4>Creative design</h4>
              </div>
              <div className="text_items">
                <p> Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi
                  eleifend.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="icon">
                <i className="fa fa-lightbulb" />
              </div>
              <div className=" text-uppercase title_items">
                <h4>Creative design</h4>
              </div>
              <div className="text_items" style={{color: '#7e7e7e'}}>
                <p> Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi
                  eleifend.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="icon">
                <i className="fa fa-table" />
              </div>
              <div className="title_items text-uppercase">
                <h4>Creative design</h4>
              </div>
              <div className="text_items">
                <p> Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi
                  eleifend.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="icon">
                <i className="fa fa-laptop" />
              </div>
              <div className="title_items text-uppercase">
                <h4>Creative design</h4>
              </div>
              <div className="text_items">
                <p> Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi
                  eleifend.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="icon">
                <i className="fa fa-cog" />
              </div>
              <div className="title_items text-uppercase">
                <h4>Creative design</h4>
              </div>
              <div className="text_items">
                <p> Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi
                  eleifend.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="icon">
                <i className="fa fa-ruler-combined" />
              </div>
              <div className="title_items text-uppercase">
                <h4>Creative design</h4>
              </div>
              <div className="text_items">
                <p> Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi
                  eleifend.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="intro_new">
      <div className="intro__content">
        <div className="row">
          <div className="col-md-4">
            <div className="intro__item d-flex">
              <div className="icon">
                <i className="fa fa-bullseye" />
              </div>
              <div className="icon__content">
                <p>100,000 online courses</p>
                <p>Explore a variety of fresh topics</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="intro__item d-flex">
              <div className="icon">
                <i className="fa fa-spinner" />
              </div>
              <div className="icon__content">
                <p>100,000 online courses</p>
                <p>Explore a variety of fresh topics</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="intro__item d-flex">
              <div className="icon">
                <i className="fa fa-sync" />
              </div>
              <div className="icon__content">
                <p>100,000 online courses</p>
                <p>Explore a variety of fresh topics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /#advantages*/}
    {/* *** ADVANTAGES END ****/}
    {/*
      *** HOT PRODUCT SLIDESHOW ***
      _________________________________________________________
  */}
    <div id="hot">
      <div className="box py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-0">TÀI SẢN SẮP ĐƯỢC ĐẤU GIÁ</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product-slider owl-carousel owl-theme">
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product1_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                <p className="price">
                  <del />$143.00
                </p>
              </div>
            
          
            </div>
       
          </div>
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">White Blouse Armani</a></h3>
                <p className="price">
                  <del>$280</del>$143.00
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">Black Blouse Versace</a></h3>
                <p className="price">
                  <del />$143.00
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">Black Blouse Versace</a></h3>
                <p className="price">
                  <del />$143.00
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">White Blouse Versace</a></h3>
                <p className="price">
                  <del />$143.00
                </p>
              </div>
              <div className="ribbon new">
              
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front"><a href="detail.html"><img src="img/product1.jpg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product1_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">Fur coat</a></h3>
                <p className="price">
                  <del />$143.00
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">White Blouse Armani</a></h3>
                <p className="price">
                  <del>$280</del>$143.00
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="product">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">Black Blouse Versace</a></h3>
                <p className="price">
                  <del />$143.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="box text-center">
      <div className="container">
        <div className="col-md-12">
          <h3 className="text-uppercase">TIN TỨC ĐẤU GIÁ</h3>
          <p className="lead mb-0">What's new in the world of fashion? <a href="blog.html">Check our blog!</a></p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="col-md-12">
        <div id="blog-homepage" className="row">
          <div className="col-sm-6">
            <div className="post">
              <h4><a href="post.html">Fashion now</a></h4>
              <p className="author-category">By <a href="#">John Slim</a> in <a href>Fashion and style</a></p>
              <hr />
              <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a></p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="post">
              <h4><a href="post.html">Who is who - example blog post</a></h4>
              <p className="author-category">By <a href="#">John Slim</a> in <a href>About Minimal</a></p>
              <hr />
              <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a></p>
            </div>
          </div>
        </div>
        {/* /#blog-homepage*/}
      </div>
    </div>
    <div className="box text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-0">LIÊN HỆ VỚI CHÚNG TÔI</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="row py-1 mt-4 align-items-center">
            <div className="col-sm-6">
            </div>
            <div className="col-sm-6 shadow">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="firstname" type="text" className="form-control" placeholder="Họ tên" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="phone" type="number" className="form-control" placeholder="Số điện thoại" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="email" type="text" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="Address" type="text" className="form-control" placeholder="Nơi công tác" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea id="message" className="form-control" placeholder="tin nhắn" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12 py-5 text-center">
                    <button type="submit" className="form-control bg-success btn btn-primary"><i className="fa fa-envelope-o" /> Gửi tin nhắn</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* *** BLOG HOMEPAGE END ****/}
  </div>

  )
}

export default Home