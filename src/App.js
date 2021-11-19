import React from 'react';
import './style.css';
import Container from './components/templates/Container';
import AddSubscriber from './components/subscribers/AddSubscriber';

export default function App() {
  return (
    // <Container>
    //   {/* <AddSubscriber></AddSubscriber> */}

    // </Container>
    <div>
      <Container />
      <AddSubscriber />
      Some text here
    </div>
  );
}
