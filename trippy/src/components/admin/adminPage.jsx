import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you are using Axios for API requests

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config={method:'get'}
        const response = await fetch('http://localhost:4000/users/users',config);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log("Data:", data); // Logging the retrieved data
        setUsers(data.users)
        // Further processing of data if needed
      } catch (error) {
        console.error('Error fetching data:', error); // Log specific error
        // Handle the error appropriately (e.g., show an error message to the user)
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Users List</h1>
      <table
        style={{
          margin: 'auto',
          borderCollapse: 'collapse',
          width: '80%',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          borderRadius: '5px',
          marginTop: '10px',
        }}
      >
        <thead>
          <tr>
            <th>Sl No</th>
            <th>User Name</th>
            <th>Place Booked</th>
            <th>City</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            if (user.role !== 'admin') {
              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                    height: '40px',
                  }}
                >
                  <td>{users.filter(u => u.role !== 'admin').indexOf(user) + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.title}</td>
                  <td>{user.city}</td>
                  <td>{user.price}</td>
                </tr>
              );
            }
            return null; // Exclude users with role 'admin' from displaying
          })}
        </tbody>
      </table>
    </div>
  );
  
            }  
export default AdminPage;
