import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

const Test = () => {
    const [Data, setData] = useState([]);
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = 'http://localhost:8800/api/loaiSan'
        axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
   
    //call this function in useEffect
   
    useEffect(() => {
        GetEmployeeData();
    }, [])
    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary'><i className='fa fa-plu'></i>
                        Add New Employee
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Id loai san</th>
                                <th>Ten loai san</th>
                                <th>So luong nguoi</th>
                                <th>Gia</th>

                            </tr>
                        </thead>
                        <tbody>
                           
                        </tbody>
                    </table>
                </div>
            </div>
 
      
        </div>
    );
};

export default Test;