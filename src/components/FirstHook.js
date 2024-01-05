import React, { useState, Fragment } from 'react'

const FirstHook = () => {
    const [state,setState] = useState({count : 0 , theme: 'blue' });
    function decrementValue(){
        setState((prevState) => {
          return {...prevState, count: prevState.count -1 }
        })
    }

    function incrementValue(){
      setState((prevState) => {
        return {...prevState, count: prevState.count + 1 }
      })
    }

    function changeTheme(){
      setState((prevState) => {
        return {...prevState, theme: prevState.theme === 'blue' ? 'red' : 'blue' }
      })
    }
  return (
    <Fragment>
      <div className='p-3'>
        <button onClick={decrementValue} className='btn btn-danger'>-</button>
        <span className='px-3'>{state.count}</span>
        <span className='px-1'>{state.theme}</span>
        <button onClick={incrementValue} className='btn btn-success'>+</button>
      </div>
      <button onClick={changeTheme} className='btn btn-primary'>Change Theme</button>
    </Fragment>
  )
}

export default FirstHook
