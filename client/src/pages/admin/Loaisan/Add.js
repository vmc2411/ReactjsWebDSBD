import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {

            tenloaisan: '',
            soluongnguoi: '',
            gia: ''
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { tenloaisan, soluongnguoi, gia } = this.state;
        axios.post('/api/loaiSan/add', {

            tenloaisan: tenloaisan,
            soluongnguoi: soluongnguoi,
            gia: gia,
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/loaisan');
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

export default Add;