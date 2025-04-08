import React from 'react'
import Button from './Button';
import Card from './Card';

const Contact = () => {
  return (
    <div>
      <h1>This is Contact page</h1>
      <Button name="register" />
      <Button name="login" />
      <Button name="Logout" />
      <Card title="Dipak" body="This is card Body" />
      <Button name={1} />
    </div>
  );
}

export default Contact
