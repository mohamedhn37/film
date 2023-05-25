import React, { useEffect, useState } from "react";
import { addDoc , collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from './firebase'
import toast, { Toaster } from 'react-hot-toast';

function Task() {
  const [title, setTitle] = useState('')
  const [data, setData] = useState([])
    
  useEffect(() => {
    onSnapshot(collection(db, "tasks"), (res) => {
      setData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })
  }, [])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const finishTask = async (id) => {
    const taskRef = doc(db, "tasks", id)
    await updateDoc(taskRef, { finished: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') { 
      addDoc(collection(db, "tasks"), { title, finished: false })
        .then(() => {
          toast.success('Votre message est bien envoyé!', { duration: 2000 });
          setTitle('')
        })
        .catch(() => {
          toast.error("Le message n'a pas pu être envoyé pour le moment, veuillez réessayer plus tard.")
        })
    } else {
      toast.error("L'input est vide, veuillez remplir pour l'envoyer.");
    }
  }
  const deletTask= (e)=>{
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card mt-5 shadow-sm">
            <div className="card-header">
              <h6>Ajouter une nouvelle tache</h6>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="task">Nom de tâche</label>
                  <input type="text" id="task" value={title} className="form-control" placeholder="Enter votre task " onChange={handleTitleChange}/>
                </div>
                <div className="form-group mt-3">
                  <button className="btn btn-primay w-100">Click</button>
                  <Toaster position="top-right" reverseOrder={false}/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mt-5 shadow-sm">
            <div className="card-header">
              <h6>Liste des tâches</h6>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {data.map((task) => (
                  <li key={task.id} className="list-group-item d-flex justify-content-between">
                    <div className="w-50">
                      <span style={{ textDecoration: task.finished ? "line-through": "" }}>{task.title}</span>
                    </div>
                    <div>
                      <button className="btn btn-success btn-sm me-2" onClick={() => finishTask(task.id)}>Terminer</button>
                      <button className="btn btn-danger btn-sm" onClick={() => deletTask(task.id)}>Supprimer</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
