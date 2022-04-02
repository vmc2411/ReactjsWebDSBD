import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="get-it">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center p-5">
              <h3>Hãy nhanh tay đặt sân bóng ngay hôm nay !</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-light">Thông tin liên hệ</h4>
              <p className="text-light"><strong>Địa chỉ: 32 hai bà trưng, Phường 12,
                Quận 10, TPHCM</strong><br />Email: contact@footballdthcv.com<br />Thời gian làm việc:
                8:00-21:00<br /></p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-light">Về chúng tôi</h4>
              <ul className="list-unstyled">
                <p className="text-light">Chào mừng các bạn đến với Football Club DTHCV, luôn cập nhật những tin tức thể thao mới nhất, tin tức các câu lạc bộ và cầu thủ,cho thuê sân bóng giá rẻ.</p>
                
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-light">Chính sách</h4>
              <ul className="list-unstyled">
              <p className="text-light">Chính sách bảo mật</p>
              <p className="text-light">Điều khoản sử dụng</p>
              <p className="text-light">Cam kết chất lượng</p>
              <p className="text-light">Giới thiệu thể thao</p>
              </ul>
              <hr className="d-block d-md-none" />
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h4 className="mb-3 text-light">Đăng ký nhận tin mới qua email</h4>
              <form className="shadow">
                <div className="input-group">
                  <input type="text" className="form-control bg-light" /><span className="input-group-append" placeholder="Email">
                    <button type="button" className="btn btn-outline-secondary">ĐĂNG KÝ</button></span>
                </div>
              </form>
              <hr />
              <h4 className="mb-3 text-light">Chia sẻ</h4>
              <p className="social"><a href="#" className="facebook external"><i className="fa fa-facebook" /></a><a href="#" className="twitter external"><i className="fa fa-twitter" /></a><a href="#" className="instagram external"><i className="fa fa-instagram" /></a><a href="#" className="gplus external"><i className="fa fa-google-plus" /></a><a href="#" className="email external"><i className="fa fa-envelope" /></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="text-center col-lg-12 text-center-md">
              <p className="text-light">© 2022 Copyright: Football Club DTHCV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer