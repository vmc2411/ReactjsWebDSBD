import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const ListTaiKhoan = () => {
    const [taikhoans, setTaikhoans] = useState([]);

    // function Delete(row) {
    //     axios
    //         .delete(`http://localhost:8800/api/tintuc/delete/${row._id}`)
    //         .then((res) => {
    //             setTintucs(
    //                 tintucs.filter((item) => {
    //                     return item._id !== res.data.tintuc._id;
    //                 })
    //             );
    //         });
    // }

    useEffect(() => {
        axios.get("http://localhost:8800/api/auth").then((res) => {
            setTaikhoans(res.data);
        });
    }, []);

    const columns = [
        {
            name: "Họ và tên",
            selector: (row) => row["fullname"],
            sortable: true,
        },
        {
            name: "Tên tài khoản",
            selector: (row) => row["username"],
            sortable: true,
        },
        {
            name: "Vai trò",
            selector: (row) => {
                if (row["isAdmin"]) {
                    return (
                        <>
                            <span style={{ color: "green", fontWeight: "bold" }}>
                                Admin
                            </span>
                        </>
                    );
                } else {
                    return (
                        <>
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                                User
                            </span>
                        </>
                    );
                }
            },
            sortable: true,
        },
        {
            name: "Thao tác",
            cell: (row) => (
                <>
                    <Link to={`edit/${row._id}`} className="btn btn-primary">
                        <i className="fas fa-edit"></i>
                    </Link>

                    <button
                        type="button"
                        className="btn btn-danger"
                    >
                        <i className="fas fa-times-circle"></i>
                    </button>
                </>
            ),
        },
    ];

    return (
        <>
            <h3>Danh sách tài khoản</h3>
            <Link to={"/admin/taikhoan/add"} className="btn btn-primary mb-2">
                <i className="fas fa-plus-circle"></i>
                Thêm mới
            </Link>
            <DataTable columns={columns} data={taikhoans} pagination></DataTable>
        </>
    );
};

export default ListTaiKhoan;
