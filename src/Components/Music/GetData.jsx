import React from 'react'

const GetData = async() => {

    const response = await fetch("http://example.com/movies.json");
  const jsonData = await response.json();
  console.log(jsonData);
  return (
    <div>
      <h1>Data file api</h1>
    </div>
  )
}

export default GetData
