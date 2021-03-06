import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaRegTimesCircle } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map(todo => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-right ricon" onClick={() => markComplete(todo.id)}>
            <FaRegTimesCircle />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
