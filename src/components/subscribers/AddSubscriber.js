import React from 'react';
import Button from '../templates/Button';
import Container from '../templates/Container';
import './AddSubscriber.css';
const AddSubscriber = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit clicked');
  };
  return (
    <div>
      <h2>Subscription Form </h2>
      <form onSubmit={submitHandler}>
        <Container className="input">
          <label>Name</label>
          <input type="text" />
          <label>PIN code</label>
          <input type="text" />
          <Button type="button">Add</Button>
        </Container>
      </form>
    </div>
  );
};
export default AddSubscriber;
