import React,{Component} from "react";
import {useState} from 'react';
import './App.css';
import User from './User'
function App() {
  const[data,setData]=useState(0);
  function updateCount(){
    setData(data+1);
  }
  console.log("rendered")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateCount}>click here</button>
      <User />
    </div>
  );
}
export default App;



// import {useState} from 'react';
// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       data:0
//     }
//   }

//   updateCount(){
//     alert("clicked")
//     this.setState({data:this.state.data+1})
//   }
//   render(){
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.updateCount}>click here</button>
//       </div>
//     );
//   }
// }
// export default App;