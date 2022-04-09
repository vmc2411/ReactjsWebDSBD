import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";

const ChiTietTapChi = () => {
  const [idTinTuc, setIdTinTuc] = useState(useParams().id);
  const [listLoaiTinTuc, setListLoaiTinTuc] = useState([]);
  const [listTinTuc, setListTinTuc] = useState([]);
  const [tintuc, setTinTuc] = useState({
    _id: "",
    TieuDe: "",
    NoiDung: ""
  });
  function getListTinTuc(idLoaiTinTuc) {
    axios
      .get(idLoaiTinTuc ? `api/tintuc?idloaitintuc=${idLoaiTinTuc}` : "api/tintuc")
      .then((res) => {
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
  useEffect(() => {
    axios.get(`/api/tintuc/${idTinTuc}`).then((res) => {
      setTinTuc(res.data);
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
                        
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="blog-listing">
                      <div className="text_Title_Detail_box">
                        <h3>{tintuc.TieuDe}</h3>
                        <p>Sân tổ chức các cuộc thi đấu nội hạng anh.</p>
                      </div>
                      <div className="infor_tabcontent">
                      
                        <div className="row novaticDivAuctionProperty">
                          <div className="col-sm-9 col-xs-6 my-2">
                          <div
                          dangerouslySetInnerHTML={{
                            __html: tintuc.NoiDung
                          }}></div>
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
                    <hr />
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

export default ChiTietTapChi;
