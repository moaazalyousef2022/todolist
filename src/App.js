 import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [x , setx] = useState([])

  const inputRef = useRef()

  const add = () => {
      const value = inputRef.current.value
      const newData = {completed : false , value} 
      setx([...x , newData])

      inputRef.current.value = ""
  }
  const Delete = (index) => {
    const newx = [...x]

    newx.splice(index, 1)

    setx(newx)
 }


  const itemDone = (index) =>{
     const newx = [...x]

     newx[index].completed =  !newx[index].completed

     setx(newx)
  }

  return (
    <div className="App">

         <h1>To do List</h1>
          <ul>
               {
                  x.map(({value , completed} , index ) => {
                    return <div className='div1'> 
                      <li className={completed ? "list" : ""} onClick={ () => itemDone(index)} >{value}</li>

                    <span onClick={() => Delete(index)} >x</span>
                    </div>
                  })
               }
          </ul>

          <input  ref={inputRef}  placeholder='input new tasks' />

          <button onClick={add} >Add</button>

    </div>
  );
}

export default App;
