import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../comonents/Header";

interface ITodo {
  id: number;
  message: string;
}

const Edit = (props: any) => {
  const history = useHistory();
  const [myTodo, setMyTodo] = useState({} as ITodo);
  const id = props.match.params.id;

  const getTodo = async () => {
    let response = await axios.get(`http://localhost:4000/todos/${id}`);

    setMyTodo(response.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleInputChange = (event: any) => {
    setMyTodo({
      ...myTodo,
      message: event.target.value,
    });
  };

  const handleSubmit = async () => {
    let response = await axios.patch(
      `http://localhost:4000/todos/${id}`,
      myTodo
    );
    history.push("/");
  };
  return (
    <Header>
      <h3> Welcome to todo edit page</h3>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          id="message"
          type="text"
          placeholder="Enter your todo message"
          value={myTodo.message}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary">
        Edit Message
      </Button>
    </Header>
  );
};

export default Edit;
