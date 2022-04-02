import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="get-it">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center p-5">
              <h3>Tìm kiếm cơ hội của bạn ngay hôm nay !</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-light">Thông tin liên hệ</h4>
              <p className="text-light"><strong>địa chỉ: 32 hai bà trưng, phường 12,
                quận 10, tp. hồ chí minh</strong><br />email: contact@xemaydhcv.com<br />thời gian làm việc:
                8:00-21:00<br /></p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-light">Về chúng tôi</h4>
              <ul className="list-unstyled">
                <li><a href="category.html">Quy chế hoạt động</a></li>
                <li><a href="category.html">Cơ chế giải quyết tranh chấp</a></li>
                <li><a href="category.html">Tài liệu hướng dẫn sử dụng</a></li>
                <li><a href="category.html">Hướng dẫn giải quyết tranh chấp</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-light">Chính sách</h4>
              <ul className="list-unstyled">
                <li><a href="text.html">Cho thuê tổ chức đấu giá trực tuyến</a></li>
                <li><a href="text.html">Văn bản pháp quy</a></li>
                <li><a href="faq.html">Chính sách bảo mật thông tin</a></li>
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
              <h4 className="mb-3 text-light">Stay in touch</h4>
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
              <p className="text-light">© 2020 Copyright: XemayDHCV.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer