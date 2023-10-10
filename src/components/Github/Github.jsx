import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

const data = useLoaderData()
    // const [data, setData]=useState([])
    // useEffect(()=>{

    //     fetch('https://api.github.com/users/Abdull121')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })


    // },[])
  return (
    <div className='text-center text-gray m-4 text-white p-4 bg-gray-500 text-3xl' >
      Github Name : {data.name}
      <img className='mx-auto  my-4 py-4' src={data.avatar_url} alt="picture" width={300} />
  
    </div>
  )
}
export default Github

export const githubInfoLoader= async()=>{
    const response =  await fetch('https://api.github.com/users/Abdull121')
    return response.json()

}
