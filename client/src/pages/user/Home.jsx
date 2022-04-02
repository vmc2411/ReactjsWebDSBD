import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <div id="all">
  <div id="content">
    <div className="row">
      <div className="col-md-12">
        <div id="main-slider" className="owl-carousel owl-theme">
          <img src="picture/img/football.jpeg" alt="Example blog post alt" className="img-fluid" />
          <img src="picture/img/football.jpeg" alt="Example blog post alt" className="img-fluid" />
          <img src="picture/img/football.jpeg" alt="Example blog post alt" className="img-fluid" />
          <img src="picture/img/football.jpeg" alt="Example blog post alt" className="img-fluid" />
        </div>
      </div>
    </div>
    <section className="services" id="service"> 
      <div className="container">
        <div className="content_service text-center">
          <h3>Dịch vụ của chúng tôi</h3>
          <p>Cung cấp các thông tin về dịch vụ đặt sân bóng đá.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box_boder text-center" style={{marginBottom: '25px'}}>
              <div className="title_items text-uppercase">
                <h4>KẾT NỐI</h4>
              </div>
              <div className="text_items" >
                <p>Kết nối khách hàng dễ dàng và hiệu quả.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className=" text-uppercase title_items">
                <h4>Tận tình</h4>
              </div>
              <div className="text_items" style={{color: '#7e7e7e'}}>
                <p> Khách hàng là niềm tin của chúng tôi.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="title_items text-uppercase">
                <h4>Chuyên nghiệp</h4>
              </div>
              <div className="text_items">
                <p> Tổ chức thi đấu chuẩn như FIFA.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="title_items text-uppercase">
                <h4>Ưu đãi</h4>
              </div>
              <div className="text_items">
                <p> Nhiều ưu đãi hấp dẫn bất ngờ.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="title_items text-uppercase">
                <h4>nhanh chóng</h4>
              </div>
              <div className="text_items">
                <p> Tìm sân, đặt sân chỉ bằng vài cú nhấp chuột.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_boder text-center">
              <div className="title_items text-uppercase">
                <h4>tiện lợi</h4>
              </div>
              <div className="text_items">
                <p> Đầy đủ tiện nghi, dịch vụ chu đáo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="intro_new">
            <div class="intro__content">
                <div class="row">
                    <div class="col-md-4">
                        <div class="intro__item d-flex">
                            <div class="icon">
                                <i class="fa fa-bullseye"></i>
                            </div>
                            <div class="icon__content">
                                <p>100,000 đã xem</p>
                                <p>Tin tức bóng đá mới nhất</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="intro__item d-flex">
                            <div class="icon">
                                <i class="fa fa-spinner"></i>
                            </div>
                            <div class="icon__content">
                                <p>100,000 đã xem</p>
                                <p>Tin tức bóng đá nhanh nhất</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="intro__item d-flex">
                            <div class="icon">
                                <i class="fa fa-sync"></i>
                            </div>
                            <div class="icon__content">
                                <p>100,000 đã xem</p>
                                <p>Tin tức bóng đá chính xác nhất</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
    <div id="hot">
      <div className="box py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-0">TẠP CHÍ BÓNG ĐÁ</h2>
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
                  <div className="front"><a href="detail.html"><img src="picture/img/football.jpeg" alt className="img-fluid" /></a>
                  </div>
                  <div className="back"><a href="detail.html"><img src="picture/img/football.jpeg" alt className="img-fluid" /></a>
                  </div>
                </div>
              </div><a href="detail.html" className="invisible"><img src="picture/img/football.jpeg" alt className="img-fluid" /></a>
              <div className="text">
                <h3><a href="detail.html">{'{'}{'{'}$item-&gt;TieuDe{'}'}{'}'}</a></h3>
                <p className="author-category">By <a href="#">{'{'}{'{'}$item-&gt;TenNguoiDung{'}'}{'}'}</a> <a href /></p>
                <p className="read-more center"><a href="/tapchi/detail/{{$item->IdTinTuc}}" className="btn btn-primary">Đọc thêm</a></p>
              </div>
            </div>
            {/* /.product*/}
          </div>
          {/* /.product-slider*/}
        </div>
        {/* /.container*/}
      </div>
      {/* /#hot*/}
      {/* *** HOT END ****/}
    </div>
    </section>
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
              <img src="picture/img/support.png" alt className="img-fluid" />
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
                {/* /.row*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
export default Home

