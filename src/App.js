import React, { useState } from 'react';
import './style.css';
import AddSubscriber from './components/subscribers/AddSubscriber';
import SubscriberList from './components/subscribers/SubscriberList';

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
      {subscriberList == ''  && <div>No Data Found</div>}
      <SubscriberList list={subscriberList}></SubscriberList>
    </div>
  );
}
