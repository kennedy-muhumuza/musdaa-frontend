import React, { Fragment, useRef, useContext } from "react";
import axios from "axios";
import { url } from "../../../constants/url";
import { Auth } from "../../../context/auth";

const AddTodo = () => {
  const todoRef = useRef("");
  const [authUser, setAuthUser] = useContext(Auth);

  const token = authUser.token;
  const userId = authUser.user.user_id;

  const addTodoHandler = async (event) => {
    event.preventDefault();
    const todo = todoRef.current.value;

    if (!todo) return;
    try {
      const response = await axios.post(
        `${url}/add-todo/${userId}`,
        {
          todo: todo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div>
        <p>
          Welcome dear {authUser.user.first_name} {authUser.user.last_name}
        </p>
        <form onSubmit={(event) => addTodoHandler(event)}>
          <input ref={todoRef} type="text" placeholder="Add Todo" required />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddTodo;
