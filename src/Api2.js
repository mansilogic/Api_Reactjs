import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUserData(response.data);
    });
  }, []);

  const handleUserSelect = (userId) => {
    const user = userData.find((u) => u.id === userId);
    setSelectedUser(user);
  };
  return (
    <div>
      <h2>Select a User</h2>
      <select onChange={(e) => handleUserSelect(parseInt(e.target.value))}>
        <option value="">Select a user</option>
        {userData.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {selectedUser && (
        <div>
          <h3>User Information</h3>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" value={selectedUser.name} readOnly />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={selectedUser.email} readOnly />
            </div>
            <div>
              <label>Phone:</label>
              <input type="text" value={selectedUser.phone} readOnly />
            </div>
            <div>
              <label>Company:</label>
              <input type="text" value={selectedUser.company.name} readOnly />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserForm;
