import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import sanbongda from "../../assets/images/sanbongda.jpeg";
const San = () => {
  const [listSan, setListSan] = useState([]);
  const [listLoaiSan, setListLoaiSan] = useState([]);

  function getListSan(idLoaiSan) {
    axios
      .get(idLoaiSan ? `api/sans?idloaisan=${idLoaiSan}` : "api/sans")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setListSan(data);
      });
  }

  function filterCate(idLoaiSan) {
    getListSan(idLoaiSan);
  }

  useEffect(() => {
    getListSan();

    axios
      .get("api/loaisan")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setListLoaiSan(data);
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
                      Sân
                    </li>
                  </ol>
                </nav>
                <div className="box">
                  <div className="container">
                    <form role="search" className="ml-auto">
                      <div className="input-group">
                        <input
                          type="text"
                          id="myInput"
                          placeholder="Tìm kiếm sân..."
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <hr />
                <h2>Sân Bóng Đá</h2>
                <br />
                <div className="row">
                  <div className="col-md-9">
                    <div id="myDIV" className="row products">
                      {listSan.map((item, index) => {
                        return (
                          <div
                            className="col-lg-4 col-md-4 col-xs-12 filter shadow"
                            key={index}
                          >
                            <div className="product">
                              <div className="flip-container">
                                <div className="flipper">
                                  <div className="front">
                                    <img
                                      src={sanbongda}
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="back">
                                    <img
                                      src={sanbongda}
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <a href="detail.html" className="invisible">
                                <img src={sanbongda} className="img-fluid" />
                              </a>
                              <div className="text">
                                <h5>Số người: {item.LoaiSan.soluongnguoi}</h5>
                                <div className="price">
                                  <h5>
                                    Giá:{" "}
                                    <span style={{ color: "red" }}>
                                      {item.LoaiSan.gia}đ
                                    </span>
                                    /Trận
                                  </h5>
                                  <h5>
                                    Tình trạng:{" "}
                                    <span className="text-success">
                                      {item.TinhTrang}
                                    </span>
                                  </h5>
                                </div>
                                <Link
                                  to={`/san/${item._id}`}
                                  className="btn btn-primary w-100"
                                >
                                  Chi tiết
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="list-group">
                      <button
                        type="button"
                        className="list-group-item list-group-item-action active"
                        aria-current="true"
                      >
                        Danh mục loại sân
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        onClick={() => filterCate()}
                      >
                        Xem tất cả
                      </button>
                      {listLoaiSan.map((item, index) => {
                        return (
                          <button
                            type="button"
                            className="list-group-item list-group-item-action"
                            aria-current="true"
                            key={index}
                            onClick={() => filterCate(item._id)}
                          >
                            {item.tenloaisan}
                          </button>
                        );
                      })}
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

export default San;
