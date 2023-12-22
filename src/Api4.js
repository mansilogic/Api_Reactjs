import React from 'react';
import userData from './users_data.json'; // Import your JSON file

function UserForm() {
  return (
    <div>
      <h2>All Users</h2>
      {userData.map((user) => (
        <div key={user.id}>
          <h3>User Information</h3>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" value={user.name} readOnly />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={user.email} readOnly />
            </div>
            <div>
              <label>Phone:</label>
              <input type="text" value={user.phone} readOnly />
            </div>
            <div>
              <label>Company:</label>
              <input type="text" value={user.company.name} readOnly />
            </div>
          </form>
          <hr /> 
        </div>
      ))}
    </div>
  );
}

export default UserForm;
