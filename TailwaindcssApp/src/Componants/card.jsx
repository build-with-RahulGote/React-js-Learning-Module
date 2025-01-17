import { ContainerWithChildren } from 'postcss/lib/container'
import React from 'react'

function Card({username,object}) {

    
    return (
        <>

<div className="max-w-xs p-6 rounded-md shadow-md bg-black  mb-9" >
        <img
          src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="no image found"
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          <h5>Name:{object.username}</h5>
          <h5>contact:{object.contact}</h5>
          <h5>city:{object.city}</h5>
        </p>
      </div>
        </>
    )
}

export default Card
