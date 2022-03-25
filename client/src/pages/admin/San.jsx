import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const San = () => {
  const [sans, setSans] = useState([]);
  const [san, setSan] = useState({ TenSan: "", LoaiSan: "" });
  const [loaisans, setLoaiSans] = useState([]);
  const [modal, setModal] = useState({ data: {} });

  const modalShow = (row) => {
    setModal({ data: row });
  };

  function Delete(row) {
    axios
      .delete(`http://localhost:8800/api/sans/delete/${row._id}`)
      .then((res) => {
        setSans(
          sans.filter((item) => {
            return item._id !== res.data.san._id;
          })
        );
      });
  }

  function handleChange(event) {
    setSan((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { TenSan, LoaiSan } = san;
    axios
      .post("http://localhost:8800/api/sans/add", {
        TenSan: TenSan,
        LoaiSan: LoaiSan,
      })
      .then((response) => {
        console.log(response.data.san)
        setSans(sans.concat([response.data.san]))
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    let abortController = new AbortController();

    axios.get("http://localhost:8800/api/sans").then((res) => {
      setSans(res.data);
    });

    axios.get("http://localhost:8800/api/loaisan").then((res) => {
      setLoaiSans(res.data);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  const columns = [
    {
      name: "Tên sân",
      selector: (row) => row["TenSan"],
      sortable: true,
    },
    {
      name: "Tình Trạng",
      selector: (row) => row["TinhTrang"],
      sortable: true,
    },
    {
      name: "Tên loại sân",
      selector: (row) => row["LoaiSan"].tenloaisan,
      sortable: true,
    },
    {
      name: "Thao tác",
      cell: (row) => (
        <>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => modalShow(row)}
            data-toggle="modal"
            data-target="#Modal"
          >
            <i className="fas fa-edit"></i>
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => Delete(row)}
          >
            <i className="fas fa-times-circle"></i>
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <h3>Danh sách sân banh</h3>
      <div className="row my-2 px-2">
        <form method="post" onSubmit={handleSubmit}>
          <div className="row align-items-center g-3">
            <div className="col-auto">
              <label htmlFor="tensan">Tên sân</label>
              <input
                type="text"
                name="TenSan"
                className="form-control"
                id="TenSan"
                value={san.TenSan || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-auto">
              <label htmlFor="loaisan">Loại sân</label>
              <select
                className="form-control"
                value={san.LoaiSan || ""}
                id="loaisan"
                name="LoaiSan"
                onChange={handleChange}
              >
                {loaisans.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.tenloaisan}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-auto align-self-end">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-plus-circle"></i>Thêm
              </button>
            </div>
          </div>
        </form>
      </div>

      <DataTable columns={columns} data={sans} pagination></DataTable>

      <div className="modal fade" id="Modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cập nhật thông tin
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
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="tensan">Tên sân</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tensan"
                    value={modal.data.TenSan}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tinhtrang">Tình trạng</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tinhtrang"
                    value={modal.data.TinhTrang}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loaisan">Loại sân</label>
                  <select className="form-control" id="loaisan">
                    {loaisans.map((item) => {
                      return (
                        <option value={item._id} key={item._id}>
                          {item.tenloaisan}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default San;
