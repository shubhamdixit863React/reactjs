import React, { Component } from 'react'


// This is how class component is desgined 
export default class ClassCompoenent extends Component {

constructor(props)
{
    super(props);

    this.state={"name":"Logan","age":22}

    console.log("Constructor Called");
}





 changeAge=(event)=>{

    this.setState({
        age:event.target.value
    })

}


//LIFE CYCLE METHODS OF REACT

componentWillMount()

{

    console.log("Component Will Mount");
}



componentDidMount()
{
    console.log("Component Did Mount Called");
}


componentDidUpdate(prevProps, prevState, snapshot)
{
console.log("Component Did Update Called");
console.log(prevProps);
console.log(prevState);

}


shouldComponentUpdate(nextProps, nextState)
{

if(nextState.age>this.state.age)
{
    return true;
}

   
    return false;
  
}

//THIS METHOD IS CALLED WHEN YOU REMOVE A COMPOENENT FROM THE DOM

componentWillUnmount()
{

    console.log("Component is Removed From the System")
}


    render() {

        console.log("Render Called");
        return (
            <div>
                <h1>My name is {this.state.name} ,My age is {this.state.age} </h1>
                
                <input type ="text" onKeyPress={(event)=>this.changeAge(event)}/>

               
            </div>
        )
    }
}
