import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  render() {
    return (<table className="table table-striped table-responsive-sm">
        <thead className="thead-light">
          <tr>
            <td>Titulo tarea</td>
            <td>Fecha De Creación</td>
            <td>Accion</td>
          </tr>
        </thead>
        <tbody>
          {
            this.props.listado.map((item) => {
              // console.log(item.created_at);
              return <Task id={item._id}
                           titulo={item.name}
                            fechaCreacion={item.created_at}
                            deleteTask={this.props.deleteTask}   />

            })
          }
        </tbody>
      </table>

    )

  }
}

export default TaskList;
