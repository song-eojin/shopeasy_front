import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/userApi';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => {
      setUsers(response.data);
    }).catch(error => {
      console.error('There was an error fetching the users!', error);
    });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
