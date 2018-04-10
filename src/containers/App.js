import React from "react";
import uuid from "uuid";
import style from "./App.css";
import style2 from "./TodoList.css";
import Title from "../components/Title.js";
import TodoList from "../components/TodoList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        }
      ]
    };
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(val) {
    const todo = {
      text: velo,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title title={"Zadania do wykonania"} />
        <div className={style2.TodoList}>
          <TodoList todos={this.state.data} remove={this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default App;
