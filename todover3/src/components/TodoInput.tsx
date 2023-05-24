import React, { ChangeEvent } from "react";
import { Form, Button } from "react-bootstrap";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const TodoInput: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setTodo(e.currentTarget.value);
//   };

  const handleSubmit = (e:React.FormEvent) =>{
      if(todo.length > 3){
        e.preventDefault();
        handleAdd(e);
        setTodo("");
      }else{
        e.preventDefault();
        alert("To-do item must be more than 3 characters. Please try again.");
      }
  }

  return (
    <div className="TodoInput">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Jot down something you want to accomplish!"
            onChange={(e) => {
                setTodo(e.target.value);
            }}
            value={todo}
          />
        </Form.Group>
        <Button type="submit" onClick={() => {handleSubmit}}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default TodoInput;
