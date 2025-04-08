import React from 'react'

const Card = (props) => {
  const { title, body } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
    </div>
  );
}

export default Card
