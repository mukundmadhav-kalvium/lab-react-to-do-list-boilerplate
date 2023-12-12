import React from 'react';
import './App.css'
import TodoItem from './components/TodoItem';

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      input : "",
      todoList : []
    }
  }

  inputChange = (e) => {
    //Changing the value of input in state
    this.setState({
      input: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    if(this.state.input.length > 0)   //Checking if input is not empty
    this.setState({
      input: "",
      todoList: [...this.state.todoList,this.state.input]
    })
  }

  updateItem = (newItem, index)=>{
    //Created a copy of my todoList
    let arr = this.state.todoList

    //Update
    arr.splice(index,1,newItem)

    //Change the set
    this.setState({
      todoList: arr
    })
  }

  deleteItem = (index)=>{
    let arr = this.state.todoList
    arr.splice(index,1)
    this.setState({
      todoList: arr
    })
  }
  
  componentDidUpdate(){
    console.log(this.state);
  }
  
  render(){
    let buttonStyles = {
                backgroundColor: "red",
                borderRadius: "10px",
                fontWeight: "bolder",
                border: "none"
              }


    return <>
      <h1>TODO LIST</h1>
      <form onSubmit={this.formSubmit}>
        <input type="text" onChange={this.inputChange} value={this.state.input}/>
        <button>A D D</button>
      </form>

      <p>My Input : {this.state.input} </p>

      <div className="todoList">
        <h2>📝 L I S T 📝</h2>
        {this.state.todoList.length == 0 ? (
          <h3>List is Empty</h3>
        ) : 
          this.state.todoList.map((element,index)=>{
            return (<TodoItem 
            element={element} 
            index={index} 
            deleteItem={this.deleteItem} 
            updateItem={this.updateItem}
            buttonStyles = {buttonStyles}/>
          )})
      }
      </div>
    </>
  }
}