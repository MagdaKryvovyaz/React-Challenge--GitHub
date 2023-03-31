import React from 'react';
import Table from 'react-bootstrap/Table';
import 'animate.css'

function Users({ user }) {
  return (
    <div className="user-info ">
      <div className="row">
        <div className="col-md-4">
        {user.avatar_url && <img src={user.avatar_url} alt={user.login} width="200" height="200" />}
        </div>
        <div className="col-md-8">
          <h2>{user.name}</h2>
          {user.bio && <p>{user.bio}</p>}
          <Table striped bordered hover>
            <tbody>
              {user.login && <tr><td><strong>Username:</strong></td><td>{user.login}</td></tr>}
              {user.location && <tr><td><strong>Location:</strong></td><td>{user.location}</td></tr>}
              {user.email && <tr><td><strong>Email:</strong></td><td>{user.email}</td></tr>}
              {user.public_repos && <tr><td><strong>Public Repositories:</strong></td><td>{user.public_repos}</td></tr>}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Users;
