import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ClassCompoenent from './components/ClassCompoenent';





function App() {
//state -> is the current snapshot of component at particular time
//props -> Are used to pass the data from parent to child

// useState is used to change the state of the component at any time




  // React offers two type of components
  // classs components // function based components

  // state of the component 


  // change the state // React hooks 
      const [state, setstate] = useState(0) ;


      const [visible, setVisibility] = useState({visibility:true}) ;



  let increment_me=()=>setstate(state+1);
  let changeVisibility=()=>{
    setVisibility({
      visibility:false
    })
  }

  if(visible.visibility)
  {

    return(
      <div>
 <ClassCompoenent/>
 <button onClick={changeVisibility}>Remove component</button>
      </div>
     

    )
  }

  else{
    return(
      <div>
        <h1>No ClassCompoenent</h1>
      </div>
    )
  }
}

export default App;
