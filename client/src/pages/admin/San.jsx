import React, { useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
const columns = [
  {
    name: 'Tên sân',
    selector: 'TenSan',
    sortable: true,
  },
  {
    name: 'Tình Trạng',
    selector: 'TinhTrang',
    sortable: true,
  },
  {
    name: 'Loại Sân',
    selector: 'LoaiSan',
    sortable: true
  },
  {
    name: 'Chức năng',
    selector: 'ChucNang'
  }
];
const San = () => {
    const [sans, sansSet] = React.useState([]);
    useEffect(async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjMxZWRkZGQ1MDIwMjY1YzY1Y2ZmYTAiLCJpYXQiOjE2NDc0NDY0NTd9.WdQVAxYyJeJDbzmW5zuV4tQibNJ9e0ZkjmgLRhFdJi8';
        await axios.get('http://localhost:8800/api/sans', {
            headers: {
                Authorization: 'Kail ' + token //the token is a variable which holds the token
            }
        }).then(res => {
            sansSet(res.data)
            sans.forEach(item => {
                item.ChucNang = `<div>
                <Link to="${item._id}" className='btn btn-danger'>Xóa</Link>
                <Link to="${item._id}" className='btn btn-info'>Sửa</Link>
                </div>`;
            })
        })

    })

    return (
        <>
            <h3>Quản lý sân bóng</h3>
            <DataTable columns={columns} data={sans} prop>
            </DataTable>
        </>
    )
}

export default San

// import React from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";
// class San extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: [],
//     };
//   }

//   componentDidMount() {
//     $(document).ready(function () {
//       $("#example").DataTable();
//     });

//     let token =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjMxZWRkZGQ1MDIwMjY1YzY1Y2ZmYTAiLCJpYXQiOjE2NDc0NDY0NTd9.WdQVAxYyJeJDbzmW5zuV4tQibNJ9e0ZkjmgLRhFdJi8";
//     axios
//       .get("http://localhost:8800/api/sans", {
//         headers: {
//           Authorization: "Kail " + token,
//         },
//       })
//       .then((res) => {
//         this.setState({
//           isLoaded: true,
//           items: res.data,
//         });
//       });
//   }
//   render() {
//     const { error, isLoaded, items } = this.state;
//     return (
//       <table id="example" className="display">
//         <thead>
//           <tr>
//             <th>Tên Sân</th>
//             <th>Tình Trạng</th>
//             <th>Loại sân</th>
//             <th>Chức năng</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => {
//             <tr key={item._id}>
//               <td>{item}</td>
//               <td>{item.TinhTrang}</td>
//               <td>{item.LoaiSan}</td>
//               <td></td>
//             </tr>;
//           })}
//         </tbody>
//       </table>
//     );
//   }
// }
// export default San;
