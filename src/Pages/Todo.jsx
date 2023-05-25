import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(data =>{
        //     setData(data)
        //     console.log(data); 
        // })
        axios.get('https://jsonplaceholder.typicode.com/todos').then((todo) =>{
            setData(todo.data)
        })
    },[])
  return (
    <>
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5 shadow-sm">
            <div className="card-header">
            <h1 className='text-danger text-center'>todo liste</h1>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {data.map((todo) => (
                  <li key={todo.id} className="list-group-item d-flex justify-content-between">
                    <div className="w-50">
                      <span>{todo.title}</span>
                    </div>
                    <div>
                      <button className="btn btn-success btn-sm me-2">Terminer</button>
                      <button className="btn btn-danger btn-sm">Supprimer</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Todo