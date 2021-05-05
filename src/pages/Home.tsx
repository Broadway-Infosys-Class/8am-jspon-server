import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Nav, Navbar } from "react-bootstrap";
import Header from "../comonents/Header";

interface ITodo {
  id: number;
  message: string;
}

const Home = () => {
  const initialValue: ITodo[] = [
    {
      id: 0,
      message: "",
    },
  ];

  const [todos, setTodos] = useState(initialValue as ITodo[]);

  const getTodos = async () => {
    let response = await axios.get("http://localhost:4000/todos");
    setTodos(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const goToInputFormPage = () => {
    //go to form page route
  };

  return (
    <>
      <Header>
        <div className="card-wrapper">
          {todos.map((todo) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>{todo.message}</Card.Text>
              </Card.Body>
            </Card>
          ))}

          <Card onClick={goToInputFormPage} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>ADD NEW TODO</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Header>
    </>
  );
};

export default Home;
