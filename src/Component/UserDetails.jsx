import React from 'react'
import './User.css'
function UserDetails() {
  const users = [
  {
    id: 1,
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    role: "Frontend Developer",
    location: "Delhi"
  },
  {
    id: 2,
    name: "Sneha Sharma",
    email: "sneha.sharma@example.com",
    role: "Backend Developer",
    location: "Mumbai"
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    role: "Full Stack Developer",
    location: "Bangalore"
  },
  {
    id: 4,
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "Data Analyst",
    location: "Ahmedabad"
  },
  {
    id: 5,
    name: "Arjun Reddy",
    email: "arjun.reddy@example.com",
    role: "UI/UX Designer",
    location: "Hyderabad"
  }
];

  return (
    <div className='Counter'>
        <h2>User Details</h2>
    <table>
      <tr>
        <th>Sl.no</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Location</th>
     </tr>
     <tbody>
        {users.map((user)=>
        <tr>
            <td key={user.id}>{user.id}</td>
            <td key={user.id}>{user.name}</td>
            <td key={user.id}>{user.email}</td>
            <td key={user.id}>{user.role}</td>
            <td key={user.id}>{user.location}</td>
        </tr> 
        )}
     
     </tbody>
     </table>
    </div>
  )
}
export default UserDetails
