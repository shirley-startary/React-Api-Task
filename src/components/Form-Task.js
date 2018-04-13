import React, { Component} from 'react';

class FormTask extends Component {
  constructor(){
    super()
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(event) {
    // console.log(event.target.value)
    this.props.onInputChange(event.target.value);
  }
  render() {
    return (<form onSubmit={this.props.onSubmit} className="input-group">
            <input type="text"className="form-control" value={this.props.nameTask}
              onChange={this.changeInput} id="nombre-tarea" placeholder="Ingrese su tarea " />
            <button type="submit" className="btn btn-outline-primary btn-md" >
              ++Agregar Tarea
            </button>
        </form>)
  }
}

export default FormTask;
