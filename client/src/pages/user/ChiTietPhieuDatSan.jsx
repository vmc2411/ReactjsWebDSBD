import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link, useParams } from "react-router-dom";

const ChiTietPhieuDatSan = () => {
    const [id, setId] = useState(useParams().id);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/chitietphieudatsan/detail/${id}`)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                console.log(data);
                setDetails(data);
            });
    }, []);
    const columns = [
        {
            name: "Sân",
            selector: (row) => row["San"],
            sortable: true,
        },
        {
            name: "Ngày đá",
            selector: (row) => row["NgayDa"],
            sortable: true,
        },
        {
            name: "Thành tiền",
            selector: (row) => row["ThanhTien"],
            sortable: true,
        },
        {
            name: "Khung giờ",
            selector: (row) => row["Khunggio"],
            sortable: true,
        },
    ];
    return (
        <>
        <div className="container"> <h3>Chi tiết lịch sử đặt sân</h3>
            <Link to={`/phieudatsan`} className="btn btn-primary">
         Quay lại
          </Link>
            <DataTable columns={columns} data={details} pagination></DataTable></div>
           
        </>
    )
}

export default ChiTietPhieuDatSan