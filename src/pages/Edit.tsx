import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { convertCompilerOptionsFromJson } from "typescript";
import Header from "../comonents/Header";

interface ITodo {
  id: number;
  message: string;
}

const Edit = (props: any) => {
  const [myTodo, setMyTodo] = useState({} as ITodo);
  console.log(props);
  const id = props.match.params.id;

  const getTodo = async () => {
    let response = await axios.get(`http://localhost:4000/todos/${id}`);

    setMyTodo(response.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleInputChange = () => {};

  const handleSubmit = () => {};
  return (
    <Header>
      <h3> Welcome to todo edit page</h3>

      <Form.Group controlId="formMessageTodo">
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
        Add Message
      </Button>
    </Header>
  );
};

export default Edit;
