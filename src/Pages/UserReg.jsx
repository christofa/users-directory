import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function UserReg() {
    const [post, setPost] = useState(null)

    const baseUrl = "https://jsonplaceholder.typicode.com/posts"

    const createPost = async () => {
        const postData  = {
            title: "my first post",
            body: "This is the body of my first post",
            userId: 1
        }
        try {
            const response = await axios.post(baseUrl, postData)
            setPost(response.data)
        } catch (error) {
            console.error("Error creating post:", error)
        }
    }

    console.log(post)
    
  return (
    <div>
        <h1 className='text-3xl text-center font-bold'>Residents Registrations</h1>
    <form action="" className='flex flex-col gap-4 p-4 m-4 w-1/2 mx-auto border rounded-3xl bg-blue-300'>
        <input type="text" placeholder='Enter your name' className='p-3 bg-white'/>
        <input type="email" placeholder='Enter your email' className='p-3 bg-white' />
        <input type="tel" placeholder='Enter your phone number' className='p-3 bg-white' />
        <button type='submit' className='p-3'>Submit</button>
    </form>

    <div className='p-4 m-4 '>
        <div className='flex gap-3'>
            <strong>Name:</strong> <p>Okoro Christopher</p>
        </div>
         <div className='flex gap-3'>
            <strong>Email:</strong> <p>Chris@gmail.com</p>
        </div>
        <div className='flex gap-3'>
            <strong>Tel:</strong> <p>09067482948</p>
        </div>
    </div>

    <button onClick={createPost } className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 m-4'>
        Create Post
    </button>

    {post && (
        <pre>
          Post Created: {JSON.stringify(post, null, 2)}
        </pre>
    )}

    </div>
  )
}

export default UserReg

