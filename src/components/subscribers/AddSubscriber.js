import React, { useState } from 'react';
import Button from '../templates/Button';
import Container from '../templates/Container';
import ErrorModal from '../templates/ErrorModal';
import './AddSubscriber.css';
const AddSubscriber = (props) => {
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length == 0) {
      setError({ title: 'Error Name', content: 'Name should not be empty.' });
      // console.log('Name should not be empty.');
      return;
    }

    if (pincode.trim().length == 0) {
      setError({
        title: 'Error Pincode',
        content: 'PinCode should not be empty.',
      });
      // console.log('Pincode should not be empty.');
      return;
    }
    props.onAddSubscriber(name, pincode);
    setName('');
    setPincode('');
  };
  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onPincodeChangeHandler = (e) => {
    setPincode(e.target.value);
  };
  const onCloseHandler = () => {
    setError(null);
  };

  return (
    <div>
      <h2 className="text-center">Subscription Form </h2>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onClose={onCloseHandler}
        ></ErrorModal>
      )}
      <form onSubmit={submitHandler}>
        <Container className="input">
          <label>Enter Name</label>
          <input type="text" onChange={onNameChangeHandler} value={name} />
          <label>Enter Pincode</label>
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
