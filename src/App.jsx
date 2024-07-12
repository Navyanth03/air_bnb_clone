import { useState } from 'react'
import NavBar from './components/NavBar';
import Head from './components/Head';
import Card from './components/Card';
import data from './data';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Head/>
      <div id='cards-container'>
        {data.map((item,index)=>{
          return <Card key={index} item={item} />
        })}
      </div>
    </>
  )
}

export default App
