import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <ExtarnalUsers></ExtarnalUsers>
    </div>
  );
}

function Counter (){
  
    const [count , setCount] = useState(0)
    const increaceCount = () => setCount(count+1)
      
     
     
    const DecreaceCount = () =>setCount(count-1)
     
    // const increaceCount = () =>{
    //   const newCount = count+1;
    //   setCount(newCount)
    //  }
    // const DecreaceCount = () =>{
    //   const newCount = count-1;
    //   setCount(newCount)
    //  }

  
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaceCount}>Increace</button>
      <button onClick={DecreaceCount}>Decreace</button>
    </div>
) 
}

function ExtarnalUsers(){
  const [users , setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    
  } , [])
  return(
    <div>
      
      <h1>Users Name:{}</h1>
      {
        users.map(user =><User name ={user.name} email ={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='user'>
      <h1>Name:  {props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;
