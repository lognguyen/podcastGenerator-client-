import { NextApiRequest, NextApiResponse } from "next";
import React, {useEffect, useState} from "react";
function index() {

  const [content_1, set_content_1] = useState("Content 1")

  const headers: Headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Accept', 'application/json')

  async function onSubmit(event: any) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    const data = await response.json()
  }



  const request: RequestInfo = new Request('http://localhost:8080/api/home', {
    method: 'POST',
    headers: headers, 
    body: JSON.stringify(user)
  }) 


  function handleClick() {
    useEffect(() => {
      fetch("http://localhost:8080/api/home")
      .then(
        response => response.json()
      )
      .then((data) => 
      set_content_1(data)
        
        );
    }, []);
  }
  
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then(
      response => response.json()
    )
    .then((data) => 
    set_content_1(data)
      
      );
  }, []);



  return <div>{content_1}
  <button onClick={handleClick}>Test</button>
  </div>
}

export default index;