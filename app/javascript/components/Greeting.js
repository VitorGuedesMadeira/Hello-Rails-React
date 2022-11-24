import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting.message.message);
  const status = useSelector((state) => state.greeting.status);

  let anything  
  if(status == 'succeeded') {
    anything = greeting
  }
  if(status == 'loading') {
    anything = 'loading...'
  }

  return (
      <>
        <h1>Testing:</h1>
        <p>{anything}</p>
      </>
    );
}

export default Greeting;