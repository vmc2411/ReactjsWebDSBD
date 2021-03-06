import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";
import football from "../../assets/images/football.jpeg";
const ChiTietSan = () => {
  const [idSan, setIdSan] = useState(useParams().id);
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
  const [khunggio, setKhunggio] = useState([
    {
      _id: "",
      thoigianbatdau: "",
      thoigianketthuc: "",
      hesogia: 0,
    },
  ]);
  const [khungGioDaDat, setKhungGioDaDat] = useState([]);
  const [ngayDa, setNgayDa] = useState(new Date().toISOString().split("T")[0]);
  const [khungGioDaChon, setkhungGioDaChon] = useState([]);
  const [tongTien, setTongTien] = useState(0);
  const [idUser, setIdUser] = useState(
    window.localStorage.getItem("iduser") || null
  );
  const [userName, setUserName] = useState(
    window.localStorage.getItem("fullname") || null
  );

  function handleChange(event) {
    setNgayDa(event.target.value);
    let btn_check = document.querySelectorAll(".btn-check");
    btn_check.forEach((item) => {
      item.checked = false;
    });
    setTongTien(0);
    setkhungGioDaChon([]);
    axios
      .get(
        `/api/chitietphieudatsan?idSan=${idSan}&ngayda=${event.target.value}`
      )
      .then((res) => {
        setKhungGioDaDat(
          res.data.map((item) => {
            return item.Khunggio;
          })
        );
      });
  }

  function chonKhungGio(item) {
    if (khungGioDaChon.includes(item)) {
      setkhungGioDaChon(khungGioDaChon.filter((khunggio) => khunggio != item));
      setTongTien((tongtien) => {
        return (tongtien -= san.LoaiSan.gia * item.hesogia);
      });
    } else {
      setkhungGioDaChon([...khungGioDaChon, item]);
      setTongTien((tongtien) => {
        return (tongtien += san.LoaiSan.gia * item.hesogia);
      });
    }
  }

  async function xacNhanDatSan() {
    if (tongTien === 0) {
      alert("B???n ch??a ch???n khung gi???");
    }
    const newHoaDon = await axios.post("/api/hoadon/add", {
      TongTien: tongTien
    });
    const newPhieuDatSan = await axios.post("/api/phieudatsan/add", {
      TongTien: tongTien,
      IDHoaDon: newHoaDon.data.hoadon._id,
      userID: idUser,
    });
    khungGioDaChon.forEach((item) => {
      let thanhtien = san.LoaiSan.gia * item.hesogia;
      axios
        .post("/api/chitietphieudatsan/add", {
          IDPhieuDatSan: newPhieuDatSan.data.phieudatsan._id,
          IDSan: san._id,
          NgayDa: ngayDa,
          ThanhTien: thanhtien,
          IDKhunggio: item._id,
        })
        .then((res) => {
          window.location.reload(false);
        });
    });
  }
  useEffect(() => {
    axios.get(`/api/sans/${idSan}`).then((res) => {
      setSan(res.data);
    });
    axios
      .get(`/api/chitietphieudatsan?idSan=${idSan}&ngayda=${ngayDa}`)
      .then((res) => {
        setKhungGioDaDat(
          res.data.map((item) => {
            return item.Khunggio;
          })
        );
      });
    axios.get(`/api/khunggio`).then((res) => {
      setKhunggio(res.data);
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
                      <Link to={"/"}>Trang ch???</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      S??n b??ng ????
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
                        <p>S??n t??? ch???c c??c cu???c thi ?????u n???i h???ng anh.</p>
                      </div>
                      <div className="infor_tabcontent">
                        <div className="row novaticDivAuctionProperty">
                          <div className="col-sm-5 col-xs-6 my-2" hidden>
                            <span className="spanauctionproperty">M?? s??n:</span>
                          </div>
                          <div className="col-sm-7 col-xs-6 my-2" hidden>
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
                              T??n s??n:
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
                              S??? l?????ng:
                            </span>
                          </div>
                          <div className="col-sm-7 col-xs-6 my-2">
                            <span className="spanColorAuctionproperty">
                              {san.LoaiSan.soluongnguoi + " " + "ng?????i tr??? l??n"}
                            </span>
                          </div>
                        </div>
                        <div className="row novaticDivAuctionProperty">
                          <div className="col-sm-5 col-xs-6 my-2">
                            <span className="spanauctionproperty">Gi??:</span>
                          </div>
                          <div className="col-sm-7 col-xs-6 my-2">
                            <span
                              id="stepPrice"
                              className="spanColorAuctionproperty novaticPrice"
                            >
                              {san.LoaiSan.gia}???
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="py-3">
                      <h3 className="text_Title_Detail_box">?????t s??n</h3>
                      <label className="col-form-label font-weight-bold">
                        Ch???n ng??y ????:
                      </label>
                      <div className="row g-3 align-items-center">
                        <div className="col-auto">
                          <input
                            id="ngayda"
                            type="date"
                            className="form-control"
                            defaultValue={ngayDa}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-auto">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#Modal"
                          >
                            Ti???n h??nh ?????t s??n
                          </button>
                        </div>
                        <label className="col-form-label mt-1 font-weight-bold">
                          Ch???n khung gi??? c??n tr???ng:
                        </label>
                        <div className="col-auto">
                          <div
                            className="btn-group row"
                            role="group"
                            aria-label="Basic checkbox toggle button group"
                          >
                            {khunggio.map((item, index) => {
                              if (!khungGioDaDat.includes(item._id)) {
                                return (
                                  <>
                                    <div
                                      className="col-md-2"
                                      style={{ padding: "0px", width: "140px" }}
                                      key={index}
                                    >
                                      <input
                                        type="checkbox"
                                        className="btn-check"
                                        id={item._id}
                                        autoComplete="off"
                                        value={item._id}
                                        onChange={() => chonKhungGio(item)}
                                      />
                                      <label
                                        className="btn btn-outline-primary"
                                        htmlFor={item._id}
                                      >
                                        {item.thoigianbatdau +
                                          " - " +
                                          item.thoigianketthuc}
                                      </label>
                                    </div>
                                  </>
                                );
                              } else {
                                return (
                                  <>
                                    <div
                                      className="col-md-2"
                                      style={{ padding: "0px", width: "140px" }}
                                      key={index}
                                    >
                                      <input
                                        type="checkbox"
                                        className="btn-check"
                                        id={item._id}
                                        autoComplete="off"
                                        value={item._id}
                                        disabled
                                      />
                                      <label
                                        className="btn btn-outline-danger disable"
                                        htmlFor={item._id}
                                        style={{ color: "red" }}
                                      >
                                        {item.thoigianbatdau +
                                          " - " +
                                          item.thoigianketthuc}
                                      </label>
                                    </div>
                                  </>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
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
                                X??c nh???n ?????t s??n
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">??</span>
                              </button>
                            </div>
                            {(() => {
                              if (idUser === null) {
                                return (
                                  <>
                                    <div className="modal-body">
                                      <h3>B???n ph???i ????ng nh???p ????? ti???p t???c</h3>
                                      <a
                                        href="/login"
                                        className="btn btn-success"
                                      >
                                        ?????n trang ????ng nh???p
                                      </a>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        ????ng
                                      </button>
                                    </div>
                                  </>
                                );
                              } else {
                                return (
                                  <>
                                    <div className="modal-body">
                                      <div className="modal-infor d-flex">
                                        <label className="font-weight-bold">
                                          H??? T??n:
                                        </label>
                                        <p>{userName}</p>
                                      </div>
                                      <div className="modal-infor d-flex">
                                        <label className="font-weight-bold">
                                          Ng??y ????:
                                        </label>
                                        <p>{ngayDa}</p>
                                      </div>
                                      <label className="font-weight-bold">
                                        Khung gi??? ???? ch???n:
                                      </label>
                                      <div className="row g-3 time-list">
                                        {khungGioDaChon.map((item, index) => {
                                          return (
                                            <div
                                              className="col-md-2"
                                              style={{
                                                padding: "0px",
                                                width: "140px",
                                              }}
                                              key={index}
                                            >
                                              <input
                                                type="checkbox"
                                                className="btn-check"
                                                id={item._id}
                                                autoComplete="off"
                                                value={item._id}
                                                onChange={() =>
                                                  chonKhungGio(item)
                                                }
                                              />
                                              <label
                                                className="btn btn-outline-primary"
                                                htmlFor={item._id}
                                              >
                                                {item.thoigianbatdau +
                                                  " - " +
                                                  item.thoigianketthuc}
                                              </label>
                                            </div>
                                          );
                                        })}
                                      </div>
                                      <br />
                                      <div className="modal-infor d-flex justify-content-between mt-2">
                                        <h4 className="font-weight-bold">
                                          T???ng ti???n:
                                        </h4>
                                        <h4
                                          id="total-money"
                                          className="font-weight-bold text-danger"
                                        >
                                          {tongTien}
                                          <span>??</span>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        ????ng
                                      </button>
                                      <button
                                        type="button"
                                        id="btn-confirm"
                                        className="btn btn-primary"
                                        onClick={() => xacNhanDatSan()}
                                      >
                                        X??c nh???n
                                      </button>
                                    </div>
                                  </>
                                );
                              }
                            })()}
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
