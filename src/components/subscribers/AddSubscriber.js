import React, { useState } from 'react';
import Button from '../templates/Button';
import Container from '../templates/Container';
import './AddSubscriber.css';
const AddSubscriber = (props) => {
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length == 0) {
      console.log('Name should not be empty.');
      return;
    }

    if (pincode.trim().length == 0) {
      console.log('Pincode should not be empty.');
      return;
    }

    setName('');
    setPincode('');
  };
  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onPincodeChangeHandler = (e) => {
    setPincode(e.target.value);
  };

  return (
    <div>
      <h2>Subscription Form </h2>
      <form onSubmit={submitHandler}>
        <Container className="input">
          <label>Name</label>
          <input type="text" onChange={onNameChangeHandler} value={name} />
          <label>PIN code</label>
          <input
            type="text"
            onChange={onPincodeChangeHandler}
            value={pincode}
          />
          <Button type="button">Add</Button>
        </Container>
      </form>
    </div>
  );
};
export default AddSubscriber;
