import React from "react";
import "./profile.css";
//***************1st Operation******************** */
// function Profile(props) {
//   return (
//     <div className='parent'>
//         <h2>Profile page</h2>
//         <h2>Name : {props.name}</h2>
//         <p>Branch : {props.branch}</p>
//         <p>Section:{props.section}</p>
//         <p>College:{props.college}</p>
//     </div>
//   )
// }   FOR PROPS PROPERTY

function Profile({ data }) {
  return (
    <div className="profile-card">
      <h2>Profile page</h2>
      <img src={data.pic}></img>
      <h2>Name : {data.myname}</h2>
      <p>Branch : {data.branch}</p>
      <p>Section:{data.section}</p>
      <p>College:{data.college}</p>
    </div>
  );
}
export default Profile;
