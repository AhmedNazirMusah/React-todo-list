import { Component } from "react";
import TodoList from "./components/todoList";
import Header from "./components/header";
import InputTodo from "./components/inputTodo";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList 
        todos={this.state.todos} 
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo} />
      </div>
    );
  }
}

export default App;