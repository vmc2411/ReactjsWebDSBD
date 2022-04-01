import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import football from "../../assets/images/football.jpeg";
const ChiTietSan = () => {
  const [id, setId] = useState(useParams().id);
  const [san, setSan] = useState({
    _id: "",
    TenSan: "",
    TinhTrang: "",
    LoaiSan: {
      _id: "",
      tenloaisan: "",
      soluongnguoi: 0,
      gia: 0,
    },
  });

  useEffect(() => {
    axios
      .get(`/api/sans/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setSan(data);
      });

  }, []);

  return (
    <>
      <div id="all">
        <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>Trang chủ</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Sân bóng đá
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-12 order-1 order-lg-2 ">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-12">
                        <div id="main-slider">
                          <div className="item">
                            <img src={football} className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="blog-listing">
                      <div className="text_Title_Detail_box">
                        <h3>{san.TenSan}</h3>
                        <p>Sân tổ chức các cuộc thi đấu nội hạng anh.</p>
                      </div>
                      <div className="infor_tabcontent">
                        <div className="row novaticDivAuctionProperty">
                          <div className="col-sm-5 col-xs-6 my-2">
                            <span className="spanauctionproperty">Mã sân:</span>
                          </div>
                          <div className="col-sm-7 col-xs-6 my-2">
                            <span
                              className="spanColorAuctionproperty"
                              id="idsan"
                            >
                              {san._id}
                            </span>
                          </div>
                        </div>
                        <div className="row novaticDivAuctionProperty">
                          <div className="col-sm-5 col-xs-6 my-2">
                            <span className="spanauctionproperty">
                              Tên sân:
                            </span>
                          </div>
                          <div className="col-sm-7 col-xs-6 my-2">
                            <span className="spanColorAuctionproperty">
                              {san.TenSan}
                            </span>
                          </div>
                        </div>
                        <div className="row novaticDivAuctionProperty">
                          <div className="col-sm-5 col-xs-6 my-2">
                            <span className="spanauctionproperty">
                              Số lượng:
                            </span>
                          </div>
                          <div className="col-sm-7 col-xs-6 my-2">
                            <span className="spanColorAuctionproperty">
                              {san.LoaiSan.soluongnguoi + " " + "người trở lên"}
                            </span>
                          </div>
                        </div>
                        <div className="row novaticDivAuctionProperty">
                          <div className="col-sm-5 col-xs-6 my-2">
                            <span className="spanauctionproperty">Giá:</span>
                          </div>
                          <div className="col-sm-7 col-xs-6 my-2">
                            <span
                              id="stepPrice"
                              className="spanColorAuctionproperty novaticPrice"
                            >
                              {san.LoaiSan.gia}₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="py-3">
                      <h3 className="text_Title_Detail_box">Đặt sân</h3>
                      <label className="col-form-label font-weight-bold">
                        Chọn ngày đá:
                      </label>
                      <div className="row g-3 align-items-center">
                        <div className="col-auto">
                          <input
                            id="ngayda"
                            type="date"
                            className="form-control"
                          />
                        </div>
                        <div className="col-auto">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#Modal"
                          >
                            Tiến hành đặt sân
                          </button>
                        </div>
                      </div>
                      <label className="col-form-label mt-1 font-weight-bold">
                        Chọn khung giờ:
                      </label>
                      <div className="timetable" />
                      <label className="col-form-label mt-1 font-weight-bold">
                        Khung giờ đã chọn:
                      </label>
                      <div className="row g-3 align-items-center time-list"></div>
                      <div
                        className="modal fade"
                        id="Modal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-booking">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Xác nhận đặt sân
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            {/* <c:choose>
                              <c:when test="${sessionScope.user  == null}">
                                <div className="modal-body">
                                  <h3>Bạn phải đăng nhập để tiếp tục</h3>
                                  <a href="/login" className="btn btn-success">
                                    Đến trang đăng nhập
                                  </a>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Đóng
                                  </button>
                                </div>
                              </c:when>
                              <c:when test="${sessionScope.user != null}">
                                <div className="modal-body">
                                  <div className="modal-infor d-flex">
                                    <label className="font-weight-bold">
                                      Họ Tên:
                                    </label>
                                    <p>
                                      ${"{"}sessionScope.user.tenNguoiDung{"}"}
                                    </p>
                                  </div>
                                  <div className="modal-infor d-flex">
                                    <label className="font-weight-bold">
                                      Email:
                                    </label>
                                    <p>
                                      ${"{"}sessionScope.user.email{"}"}
                                    </p>
                                  </div>
                                  <div className="modal-infor d-flex">
                                    <label className="font-weight-bold">
                                      SĐT:
                                    </label>
                                    <p>
                                      ${"{"}sessionScope.user.sdt{"}"}
                                    </p>
                                  </div>
                                  <div className="modal-infor d-flex">
                                    <label className="font-weight-bold">
                                      Ngày đá:
                                    </label>
                                    <p />
                                  </div>
                                  <label className="font-weight-bold">
                                    Khung giờ đã chọn:
                                  </label>
                                  <div className="row g-3 time-list"></div>
                                  <br />
                                  <div className="modal-infor d-flex justify-content-between mt-2">
                                    <h4 className="font-weight-bold">
                                      Tổng tiền:
                                    </h4>
                                    <h4
                                      id="total-money"
                                      className="font-weight-bold text-danger"
                                    >
                                      0<span>đ</span>
                                    </h4>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Đóng
                                  </button>
                                  <a
                                    type="button"
                                    id="btn-confirm"
                                    className="btn btn-primary"
                                  >
                                    Xác nhận
                                  </a>
                                </div>
                              </c:when>
                            </c:choose> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietSan;
