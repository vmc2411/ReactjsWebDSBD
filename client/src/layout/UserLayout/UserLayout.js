import React from "react";
import Header from "../UserLayout/Header";
import Footer from "../UserLayout/Footer";
const UserLayout = () => {
  return (
    <div>
      <Header />
      <div id="all">
        <div id="content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div id="main-slider" class="owl-carousel owl-theme">
                  <div class="item">
                    <img
                      src="assets/img/main-slider1.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <img
                      src="assets/img/main-slider2.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <img
                      src="assets/img/main-slider3.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <img
                      src="assets/img/main-slider4.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="advantages">
            <div class="container">
              <div class="row mb-4">
                <div class="col-md-4">
                  <div class="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                    <div class="icon">
                      <i class="fa fa-heart"></i>
                    </div>
                    <h3>
                      <a href="#">We love our customers</a>
                    </h3>
                    <p class="mb-0">
                      We are known to provide best possible service ever
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                    <div class="icon">
                      <i class="fa fa-tags"></i>
                    </div>
                    <h3>
                      <a href="#">Best prices</a>
                    </h3>
                    <p class="mb-0">
                      You can check that the height of the boxes adjust when
                      longer text like this one is used in one of them.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box clickable d-flex flex-column justify-content-center mb-0 h-100">
                    <div class="icon">
                      <i class="fa fa-thumbs-up"></i>
                    </div>
                    <h3>
                      <a href="#">100% satisfaction guaranteed</a>
                    </h3>
                    <p class="mb-0">Free returns on everything for 3 months.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="hot">
            <div class="box py-4">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="mb-0">TÀI SẢN SẮP ĐƯỢC ĐẤU GIÁ</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="product-slider owl-carousel owl-theme">
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product2_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product1_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product1.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">
                          Fur coat with very but very very long name
                        </a>
                      </h3>
                      <p class="price">
                        <del></del>$143.00
                      </p>
                    </div>

                    <div class="ribbon sale">
                      <div class="theribbon">SALE</div>
                      <div class="ribbon-background"></div>
                    </div>

                    <div class="ribbon new">
                      <div class="theribbon">NEW</div>
                      <div class="ribbon-background"></div>
                    </div>

                    <div class="ribbon gift">
                      <div class="theribbon">GIFT</div>
                      <div class="ribbon-background"></div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product2_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">White Blouse Armani</a>
                      </h3>
                      <p class="price">
                        <del>$280</del>$143.00
                      </p>
                    </div>

                    <div class="ribbon sale">
                      <div class="theribbon">SALE</div>
                      <div class="ribbon-background"></div>
                    </div>

                    <div class="ribbon new">
                      <div class="theribbon">NEW</div>
                      <div class="ribbon-background"></div>
                    </div>

                    <div class="ribbon gift">
                      <div class="theribbon">GIFT</div>
                      <div class="ribbon-background"></div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product3.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product3_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product3.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">Black Blouse Versace</a>
                      </h3>
                      <p class="price">
                        <del></del>$143.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product3.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product3_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product3.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">Black Blouse Versace</a>
                      </h3>
                      <p class="price">
                        <del></del>$143.00
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product2_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">White Blouse Versace</a>
                      </h3>
                      <p class="price">
                        <del></del>$143.00
                      </p>
                    </div>

                    <div class="ribbon new">
                      <div class="theribbon">NEW</div>
                      <div class="ribbon-background"></div> -
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product1.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product1_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product1.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">Fur coat</a>
                      </h3>
                      <p class="price">
                        <del></del>$143.00
                      </p>
                    </div>

                    <div class="ribbon gift">
                      <div class="theribbon">GIFT</div>
                      <div class="ribbon-background"></div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product2_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">White Blouse Armani</a>
                      </h3>
                      <p class="price">
                        <del>$280</del>$143.00
                      </p>
                    </div>

                    <div class="ribbon sale">
                      <div class="theribbon">SALE</div>
                      <div class="ribbon-background"></div>
                    </div>

                    <div class="ribbon new">
                      <div class="theribbon">NEW</div>
                      <div class="ribbon-background"></div>
                    </div>

                    <div class="ribbon gift">
                      <div class="theribbon">GIFT</div>
                      <div class="ribbon-background"></div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="detail.html">
                            <img
                              src="assets/img/product3.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                        <div class="back">
                          <a href="detail.html">
                            <img
                              src="assets/img/product3_2.jpg"
                              alt=""
                              class="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="detail.html" class="invisible">
                      <img
                        src="assets/img/product3.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="text">
                      <h3>
                        <a href="detail.html">Black Blouse Versace</a>
                      </h3>
                      <p class="price">
                        <del></del>$143.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="col-md-12">
              <div class="box slideshow">
                <h2 class="mb-0">TÀI SẢN SẮP ĐƯỢC ĐẤU GIÁ</h2>
                <p class="lead">
                  Get the inspiration from our world class designers
                </p>
                <div id="get-inspired" class="owl-carousel owl-theme">
                  <div class="item">
                    <img
                      src="assets/img/bat_dong_san.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="item">
                    <a href="#">
                      <img
                        src="assets/img/getinspired2.jpg"
                        alt="Get inspired"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="item">
                    <a href="#">
                      <img
                        src="assets/img/getinspired3.jpg"
                        alt="Get inspired"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box text-center">
            <div class="container">
              <div class="col-md-12">
                <h3 class="text-uppercase">TIN TỨC ĐẤU GIÁ</h3>
                <p class="lead mb-0">
                  What's new in the world of fashion?{" "}
                  <a href="blog.html">Check our blog!</a>
                </p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="col-md-12">
              <div id="blog-homepage" class="row">
                <div class="col-sm-6">
                  <div class="post">
                    <h4>
                      <a href="post.html">Fashion now</a>
                    </h4>
                    <p class="author-category">
                      By <a href="#">John Slim</a> in{" "}
                      <a href="">Fashion and style</a>
                    </p>
                    <hr />
                    <p class="intro">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                    <p class="read-more">
                      <a href="post.html" class="btn btn-primary">
                        Continue reading
                      </a>
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="post">
                    <h4>
                      <a href="post.html">Who is who - example blog post</a>
                    </h4>
                    <p class="author-category">
                      By <a href="#">John Slim</a> in{" "}
                      <a href="">About Minimal</a>
                    </p>
                    <hr />
                    <p class="intro">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                    <p class="read-more">
                      <a href="post.html" class="btn btn-primary">
                        Continue reading
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box text-center">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="mb-0">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="col-md-12">
                <div class="row py-1 mt-4 align-items-center">
                  <div class="col-sm-6">
                    <img
                      src="assets/img/support.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-sm-6 shadow">
                    <form>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              id="firstname"
                              type="text"
                              class="form-control"
                              placeholder="Họ tên"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              id="phone"
                              type="number"
                              class="form-control"
                              placeholder="Số điện thoại"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              id="email"
                              type="text"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              id="Address"
                              type="text"
                              class="form-control"
                              placeholder="Nơi công tác"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              id="message"
                              class="form-control"
                              placeholder="tin nhắn"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12 py-5 text-center">
                          <button
                            type="submit"
                            class="form-control bg-success btn btn-primary"
                          >
                            <i class="fa fa-envelope-o"></i> Gửi tin nhắn
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
