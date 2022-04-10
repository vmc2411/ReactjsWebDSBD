import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const PhieuDatSan = () => {
  const [lichsus, setLichsus] = useState([]);
  useEffect(() => {
    

    axios
      .post("api/phieudatsan/lichsudatsan", {iduser: window.localStorage.getItem("iduser")})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
       console.log(data);
       setLichsus(data);
      });
  }, []);
  const columns = [
    {
      name: "Tổng tiền",
      selector: (row) => row["TongTien"],
      sortable: true,
    },
    {
      name: "Ngày lập",
      selector: (row) => row["NgayLapPhieu"],
      sortable: true,
    },
    {
      name: "Thao tác",
      cell: (row) => (
        <>
          <Link to={`detail/${row._id}`} className="btn btn-primary">
            <i className="fas fa-edit"></i>
          </Link>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="container"> 
         <h3>Lịch sử đặt sân</h3>
      <DataTable columns={columns} data={lichsus} pagination></DataTable>
      </div>
    </>
  )
}

export default PhieuDatSan