import React from "react";
import "./AppointmentList.css";

const AppointmentList = ({ appointments, currPhysFullName, currPhysEmail }) => {
  let count = 0;
  return appointments.length ? (
    <React.Fragment>
      <header className="drHeader">Dr. {currPhysFullName}</header>
      <div className="email">{currPhysEmail}</div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appt => {
            count++;
            return (
              <tr key={appt.name}>
                <td>{count}</td>
                <td>{appt.name}</td>
                <td>{appt.time}</td>
                <td>{appt.kind}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  ) : null;
};

export default AppointmentList;
