import React from "react";

export default function Table({ listUsers }) {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Hobbies</th>
        </tr>
      </thead>
      <tbody>
        {listUsers.map((user) => (
          <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phone}</td>
            <td>{user.radio}</td>
            <td>
              {user.checkbox1 ? user.checkbox1 : ""}
              {user.checkbox2 ? ", " + user.checkbox2 : ""}
              {user.checkbox3 ? ", " + user.checkbox3 : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
