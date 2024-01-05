import React, { useEffect, useState } from 'react'

const SecondHook = () => {
    // const [resourceType , setResourceType ] = useState('posts');
    // const [items,setItems] = useState([]);

    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    //it will render every time when app renders
    // Here we provided resuource type so it will call this every time when we change the value of resourceType
    // useEffect(() => { 
    //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))
    // },[resourceType])

    function handleResize(){
      setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize',handleResize);

      // This will clean up the previous use effect changes
      return ( () => {
        window.removeEventListener('resize',handleResize)
      })
    },[])
  return (
    <div className='p-3'>
        {/* <button className='btn btn-light' onClick={() =>  setResourceType('posts')}>Posts</button>
        <button className='btn btn-light mx-3' onClick={() =>  setResourceType('users')}>Users</button>
        <button className='btn btn-light' onClick={() =>  setResourceType('comments')}>Comments</button>
        <p>{resourceType}</p>
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })} */}
        <p>{windowWidth}</p>
    </div>
  )
}

export default SecondHook
