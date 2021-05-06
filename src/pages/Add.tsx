import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../comonents/Header";

interface ITodo {
  message: string;
}

const Add = () => {
  const history = useHistory();
  const initialValue: ITodo = {
    message: "",
  };

  const [todo, setTodo] = useState(initialValue as ITodo);

  const handleInputChange = (event: any) => {
    console.log(event.target.value);
    setTodo({
      message: event.target.value,
    });
  };

  const handleSubmit = async () => {
    let response = await axios.post("http://localhost:4000/todos", todo);
    history.push("/");
  };

  return (
    <Header>
      <p>Welcome to todo add page!</p>

      <Form.Group controlId="formMessageTodo">
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          id="message"
          type="text"
          placeholder="Enter your todo message"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary">
        Add Message
      </Button>
    </Header>
  );
};

export default Add;
