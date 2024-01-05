import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

function User() {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  useEffect(
    () => {
      getData();
    }, []
  )

  function getData() {
    fetch(URL).then(
      (data) => {
        data.json().then((res) => {
          setData(res)
        })
      }
    )
  }

  const deleteUserFromServer = (id) => {
    fetch(URL + `/${id}`, { method: "DELETE" }).then(
      () => { getData() }
    )
  }


//   const deleteUser = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deleteUserFromServer(id)
//         Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success"
//         });
//       }
//     });
//   }


  return (
    <div>
      <h1>Users</h1>

     
        <Button variant="light" >Add User</Button>{' '}
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>


          {data.map((item) =>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <Button variant="light" onClick={() => alert(item.id)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => { alert(item.id) }}>Delete</Button>{' '}
              </td>
            </tr>

          )}
        </tbody>
      </Table>
    </div>
  )
}

export default User