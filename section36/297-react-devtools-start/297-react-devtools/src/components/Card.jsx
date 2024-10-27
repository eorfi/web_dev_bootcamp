import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p> */}
        < Detail 
          detailInfo={props.tel}
        />
        < Detail 
          detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
