import React,{Component} from "react";
import {useState} from 'react';
import './App.css';
// import Student from "./Student";
// import User from './User'


// 1.State and Props with Class Components

/* For using class components need to call React and use Super inside constructor in order to use 'this' keyword  */

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name :"Parag"   // Setting initial value in state
//     }
//   }
//   render(){
//     return (
//       <div className="App">
//         <h1>{this.state.name}</h1>
//         <button onClick={()=>this.setState({name:"Petkar"})}>click here</button>

        {/* <User />  Way to access component  */}

        {/* <Student name={"parag"} text={["This is ", <strong> not </strong>,  "working."]}/>  way to access components and pass Props */}
      {/* </div>
    );
  }
}
export default App; */}



// 2.State and Props with Functional Components

/* For using state in functional components need call useState from 'react' */

/*   export default function App(){
    const[data,setData]=useState(0);  // setting initial state
  
    function updateCount(){
      setData(data+1);
    }
      return (
        <div className="App">
          <h1>{data}</h1>
          <button onClick={updateCount}>click here</button>
        </div>
      );
  } */



/*     export default function App(){
    const[data,setData]=useState(null);  // setting initial state
    const[print,setPrint]=useState(false);
    function getData(val){
      console.log(val.target.value)
      setData(val.target.value);
      setPrint(false);
    }
      return (
        <div className="App">
          {
            print?
            <h1>{data}</h1>
            :null
          }
          <input type="text" onChange={getData}/>
          <button onClick={()=>setPrint(true)}>Print</button>          
        </div>
      );
  } */

  
  export default function App(){
    const[status,setStatus]=useState(false);    // Setting status as false initially to hide on page load
    return (
        <div className="App">
          {
            status?
            <h1>Text Content</h1>
            :null
          }
          <button onClick={()=>setStatus(true)}>Show</button>          
          <button onClick={()=>setStatus(false)}>Hide</button>          
          <button onClick={()=>setStatus(!status)}>Toggle</button>          
        </div>
      );
  }