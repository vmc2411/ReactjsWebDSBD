import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

 const Test =() => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    const [idloaisan, setidloaisan] = useState("")
    const [tenloaisan, settenloaisan] = useState("")
    const [soluongnguoi, setsoluongnguoi] = useState("")
    const [gia, setgia] = useState("")

    const history = useHistory();

    const [Delete, setDelete] = useState(false)

    useEffect(() => {
        const url = "/api/loaiSan"
        const getData = async () => {
            const res = await axios.get(url);
            setData(res.data);

        };
        getData();
    }, []);

    const handleSubmite = async () => {
        try {
            const Credentials = { idloaisan, tenloaisan, soluongnguoi, gia }    
            const res = await axios.post(
                "/api/loaiSan", Credentials
            );
                history.push("/test");
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
        
    };

    const handleEdit = (() => {
        const getData = async () => {
            const Credentials = { idloaisan,tenloaisan, soluongnguoi, gia }
            const res = await axios.get(`/api/loaiSan/${idloaisan}`,Credentials);
            setData(res.data);

        };
        getData();
    }, []);

    const handleDelete = () => {
        try {
            axios.defaults.headers.delete['idloaisan'] = idloaisan._id;
            axios.delete("/api/loaiSan/" + idloaisan._id).then((result) => {
                console.log('Deleted');
            }).catch((err) => {
                console.log(err);
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Thêm
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Id loại sân</th>
                                <th>Tên loại sân</th>
                                <th>Số lượng người</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.idloaisan}</td>
                                    <td>{item.tenloaisan}</td>
                                    <td>{item.soluongnguoi}</td>
                                    <td>{item.gia}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button onClick={() => { handleViewShow(SetRowData(item)) }}>Chi tiết</Button>|
                                        <Button onClick={() => { handleEditShow(SetRowData(item), setidloaisan(item.idloaisan)) }}>Sửa</Button>|
                                        <Button onClick={() => { handleViewShow(SetRowData(item), setidloaisan(item.idloaisan), setDelete(true)) }}>Xóa</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Chi tiết</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.idloaisan} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.tenloaisan} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.soluongnguoi} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.gia} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Xóa</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setidloaisan(e.target.value)} placeholder="Nhập ID loại sân" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => settenloaisan(e.target.value)} placeholder="Nhập tên loại sân" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setsoluongnguoi(e.target.value)} placeholder="Nhập số lượng người" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setgia(e.target.value)} placeholder="Nhập giá" />
                            </div>

                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Thêm</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Ðóng</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit employee record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Sửa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Id loại sân</label>
                                <input type="text" className='form-control' onChange={(e) => setidloaisan(e.target.value)} defaultValue={RowData.idloaisan} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Tên loại sân</label>
                                <input type="text" className='form-control' onChange={(e) => settenloaisan(e.target.value)} defaultValue={RowData.tenloaisan} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Số lượng người</label>
                                <input type="number" className='form-control' onChange={(e) => setsoluongnguoi(e.target.value)} defaultValue={RowData.soluongnguoi} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Giá</label>
                                <input type="number" className='form-control' onChange={(e) => setgia(e.target.value)} defaultValue={RowData.gia} />
                            </div>

                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Sửa</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Ðóng</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};
export default Test