import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import tintuc from "../../../assets/images/wallpaper/wallpaper_football.jpg";
const TinTuc = () => {
  const [listTinTuc, setListTinTuc] = useState([]);
  const [listLoaiTinTuc, setListLoaiTinTuc] = useState([]);

  function getListTinTuc(idLoaiTinTuc) {
    axios
      .get(idLoaiTinTuc ? `api/tintuc?idloaitintuc=${idLoaiTinTuc}` : "api/tintuc")
      .then((res) => {
      console.log(res.data);
        return res.data;

      })
      .then((data) => {
        setListTinTuc(data);
      });
  }

  function filterCate(idLoaiTinTuc) {
    getListTinTuc(idLoaiTinTuc);
  }

  useEffect(() => {
    getListTinTuc();

    axios
      .get("api/loaitintuc")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setListLoaiTinTuc(data);
      });
  }, []);

  return (
    <>
      <div id="all">
        <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* breadcrumb*/}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li aria-current="page" className="breadcrumb-item active">Tạp chí</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              {/*
      *** LEFT COLUMN ***
      _________________________________________________________
      */}
              <div id="blog-listing" className="col-lg-9">
                {listTinTuc.map((item, index) => {
                  return (
                    <div
                      className="col-lg-12 col-md-9 col-xs-12 filter shadow"
                      key={index}
                    >
                      <div className="post">
                        <h2><a href="post.html">{item.TieuDe}</a></h2>
                        <p className="author-category">By <a href="#">{item.User.fullname}</a> <a href /></p>
                        <hr />
                        <p className="date-comments"><a href="post.html"><i className="fa fa-calendar-o" />{item.NgapLap}</a><a href="post.html" /></p><a href="post.html">
                        </a><div className="image"><a href="post.html">
                        </a><a href="post.html"><img src={tintuc} alt="Example blog post alt" className="img-fluid" /></a>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.NoiDung.substr(0, 400) + "..."
                          }}></div>
                        <p className="read-more">
                          <Link
                            to={`/tintuc/${item._id}`}
                            className="btn btn-primary"
                          >
                            Đọc thêm
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="col-lg-3">
                <div className="card sidebar-menu mb-4">
                  <div className="card-header">
                    <h3 className="h4 panel-title">Loại tạp chí</h3>
                  </div>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                      aria-current="true"
                      onClick={() => filterCate()}
                    >
                      Xem tất cả
                    </button>
                    {listLoaiTinTuc.map((item, index) => {
                      return (
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                          aria-current="true"
                          key={index}
                          onClick={() => filterCate(item._id)}
                        >
                          {item.tenloaitintuc}
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

    </>
  );
};

export default TinTuc;
