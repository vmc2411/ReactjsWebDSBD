import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenloaisan: '',
            soluongnguoi: '',
            gia: ''
        }
    }

    componentDidMount = () => {
        this.getById();
    }

    // To get employee based on ID
    getById() {
        axios.get('/api/loaiSan/' + this.props.match.params.id)
            .then((response) => {
                this.setState({

                    tenloaisan: response.data.tenloaisan,
                    soluongnguoi: response.data.soluongnguoi,
                    gia: response.data.gia
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To update the record on submit
    handleSubmit = (event) => {
        event.preventDefault();
        const { tenloaisan, soluongnguoi, gia } = this.state;
        axios.put('api/loaiSan/update/' + this.props.match.params.id, {

            tenloaisan: tenloaisan,
            soluongnguoi: soluongnguoi,
            gia: gia,
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/list');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="container">
                <form style={customStyle} onSubmit={this.handleSubmit}>
                    <label>
                        Tên loại sân
                        <input
                            name="tenloaisan"
                            type="text"
                            value={this.state.tenloaisan}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Số lượng người
                        <input
                            name="soluongnguoi"
                            type="text"
                            value={this.state.soluongnguoi}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Giá
                        <input
                            name="gia"
                            type="text"
                            value={this.state.gia}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default Edit;