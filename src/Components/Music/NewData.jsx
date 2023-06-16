import React from 'react'
import axios from 'axios';

function NewData() {
  
      async function fun()  {
        try {
            const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=57045ba4215141b985c7bb31e2557adc");
            console.log(response.data.articles);
        } catch (error) {
            console.log(error);
        }
    }

    fun();
  return (
    <div>
      <h1>New data</h1>
    </div>
  )
}

export default NewData
