import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [id, setId] = useState(0)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setData(data))
  })
  return (
    <div className="App">
        <h1>app</h1>
        {
          data && data.map(({id, name})=>(
            <li className='d-flex' key={id}>
              <h3>{name}</h3>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" 
              onClick={()=> setId(id)}>open{id}</button>
            </li>
          ))
        }


        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h3>{id}</h3>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
