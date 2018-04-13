import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/Task-List';
import FormTask from './components/Form-Task';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      nameTask: "",
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this)

  }

  componentWillMount(){
    console.log(this.state.tasks);
  }

  componentDidMount(){
    fetch('https://lab-api-test.herokuapp.com/tasks')
    .then((response) => {
      return response.json()
    })
    .then((tareas) => {
      this.setState({
        tasks: tareas
      })
    })
  }

  onInputChange(valorTarea){
    this.setState({
      nameTask: valorTarea
    })
  }

  onSubmit(e) {
    e.preventDefault();
    fetch('https://lab-api-test.herokuapp.com/tasks',{
      method:'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        name: this.state.nameTask
      })
    })
    .then(response => response.json())
    .then(confirm => {
      const array = [confirm];
      this.setState({
        tasks: this.state.tasks.concat(array)
      })
    })

  }

  deleteTask(tasksId) {
    fetch(`https://lab-api-test.herokuapp.com/tasks/${tasksId}`,{
      method:'DELETE'
    })
    .then(response => response.json())
    .then(taskDelete => {
      const array = this.state.tasks;
      const newArray = array.filter((item)=>{
        return item._id !== tasksId
      })
      this.setState({
        tasks: newArray
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tasks List</h1>
        </header>
        <FormTask  nameTask={this.state.nameTask}
                   onInputChange={this.onInputChange}
                   onSubmit={this.onSubmit}/>
                 <TaskList  listado={this.state.tasks} deleteTask={this.deleteTask}/>

      </div>
    );
  }
}

export default App;
