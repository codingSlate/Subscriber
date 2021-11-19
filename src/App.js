import React, { useState } from 'react';
import './style.css';
import AddSubscriber from './components/subscribers/AddSubscriber';

export default function App() {
  const [subscriberList, setSubscriberList] = useState([]);

  const onAddSubscriberHandler = (aName, aPincode) => {
    setSubscriberList((prevState) => {
      return [...prevState, { name: aName, pincode: aPincode }];
    });
  };
  return (
    <div>
      <AddSubscriber onAddSubscriber={onAddSubscriberHandler}></AddSubscriber>
      Some text here
    </div>
  );
}
