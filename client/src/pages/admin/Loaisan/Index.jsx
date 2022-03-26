import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
// To use routing functionalities
import { Link } from 'react-router-dom';
import Delete from './Deletes';

var divStyle = {
    margin: '8% 8%',
};

class Index extends Component {

    constructor(props) {
        super(props);
        this.deleteloaisan = new Delete();
        this.state = {
            loaisan: []
        }
        this.delete = this.delete.bind(this);
    }

    componentDidMount = () => {
        this.getList();
    }

    // get all 
    getList() {
        axios.get('/api/loaiSan')
            .then((response) => {
                console.log(response);
                this.setState({
                    loaisan: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //  delete 
    delete(lsid) {
        this.deleteloaisan.delete(lsid);
        this.getList();
    }

    render() {
        const { loaisan } = this.state;
        return (
            <div style={divStyle}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Tên loại sân</th>
                            <th>Số lượng người</th>
                            <th>Giá</th>
                            <th><Link to="/admin/loaisan/add">Add New</Link></th>
                        </tr>
                    </thead>    
                    <tbody>
                        {
                            loaisan && loaisan.map((item, i) => {
                                <Link to={"add/" + item._id} className="btn btn-primary">Add</Link>
                                return (
                                    
                                    <tr key={i}>                                                                
                                        <td>{item.tenloaisan}</td>
                                        <td>{item.soluongnguoi}</td>
                                        <td>{item.gia}</td>                                                                       
                                        <td>
                                            <Link to={item._id} className="btn btn-primary">Edit</Link>
                                        </td>
                                        <td>
                                            <Button onClick={() => this.delete(item._id)} bsStyle="danger" >Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Index;