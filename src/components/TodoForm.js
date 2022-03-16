import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  //when click on update it will have input value as notes value already
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //useRef does not cause rerenders
  const inputRef = useRef(null)

  useEffect(() => {
    //allows you to focus on input field while reloading
    inputRef.current.focus()
  })

  const handleChange = e => {
      setInput(e.target.value)
  }

  const handleSubmit = e => {
      //prevents reloading
      e.preventDefault();

      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
      })

      setInput("")
  }

  // if anyone clicks on edit it will replace button with update using ternary operators
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? ( 
      <>
      <input
        type="text"
        placeholder="Update your item"
        value={input}
        name="text"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" className="todo-button edit" onClick={handleSubmit}>Update</button> </> ) : 
      (<> 
      <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit" className="todo-button" onClick={handleSubmit}>Add todo</button> </>)
    }
    </form>
  );
}

export default TodoForm;
