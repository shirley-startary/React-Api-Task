import React, {Component} from 'react';

class Task extends Component {
  constructor(){
    super()
    this.getId = this.getId.bind(this);
  }

  getId(event){
    // console.log(event.target.id);
    this.props.deleteTask(event.target.id)
  }
  render() {
    return(<tr key={this.props.id}>
        <td>{this.props.titulo}</td>
        <td>{this.props.fechaCreacion}</td>
        <td>
          <button id={this.props.id} onClick={this.getId} className="btn btn-primary btn-s">
            x
          </button>
        </td>
      </tr>)
  }
}

export default Task;
