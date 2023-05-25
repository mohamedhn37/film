import React from 'react'

export const Search = (props) => {
  return (
    <div className='my-3 d-flex justify-content-center'>
        <input type="search" placeholder='Entrer votre film' className='rounded-2 px-3 py-2 w-50 border border-info' value={props.value} onChange={props.onChange}/>
    </div>
  )
}
