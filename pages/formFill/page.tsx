import { NextApiRequest, NextApiResponse } from "next";
import React, {useEffect, useState} from "react";
function formFill() {




  // const request: RequestInfo = new Request('http://localhost:8080/api/home', {
  //   method: 'POST',
  //   headers: headers, 
  //   body: JSON.stringify(user)
  // }) 




  return <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
      Book an Appointment
  </div>
  <form className="py-4 px-6" action="" method="POST">
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
              Name
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Enter your name"></input>
      </div>
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
              Email
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="Enter your email"></input>
      </div>
      
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
              Message
          </label>
          <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message" placeholder="Enter any additional information"></textarea>
      </div>
      <div className="flex items-center justify-center mb-4">
          <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Book Appointment
          </button>
      </div>

  </form>
</div>
}

export default formFill;