import React from 'react';
import './SubscriberList.css';
const SubscriberList = (props) => {
  return (
    <div className="subscribers">
      <ul>
        {props.list.map((item, index) => {
          return (
            <li key={index}>
              <div># {index + 1}</div>
              <div>{item.name}</div>
              <div>{item.pincode}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SubscriberList;
