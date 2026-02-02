import React, { useRef, useState, useEffect } from "react";
// import Increment from "./Components/Increment";
// import Decrement from "./Components/Decrement";
import Task from "./Components/Task";
import './App.css'
import useHttp from "./Utilities/use-http";

function App() {
  let inputRef = useRef();
  let [allTasks, setAllTasks] = useState([]);
  let [errorMessage, setErrorMessage] = useState(null);

  let [error, sendGetRequest ] = useHttp('https://react-custom-hook-775df-default-rtdb.firebaseio.com/tasks.json', 'GET', null, getAllTasks);
  let [errorPost, sendPostRequest] = useHttp('https://react-custom-hook-775df-default-rtdb.firebaseio.com/tasks.json', 'POST', inputRef.current.value, getAllTasks, createTask)


  function getAllTasks(data){
    data.then((tasks) => {
      let taskList = [];

      for (let key in tasks) {
        taskList.push({id: key, name: tasks[key]})
      }

      setAllTasks(taskList);
    })
    
    setErrorMessage(error);
  }

  useEffect(() => {
    sendGetRequest();
  }, []);

  function createTask(data){
    // fetch('https://react-custom-hook-775df-default-rtdb.firebaseio.com/tasks.json', {
    //   method: 'POST',
    //   body: JSON.stringify(inputRef.current.value)
    // })
    // .then((res) => {
    //   if (!res.ok) {
    //     throw new Error("Something went wrong. Please try again later");
    //   }

    //   // fetchTask();
    //   sendGetRequest();
    // })
    // .catch((error) => {
    //   setErrorMessage(error.message);
    // })
    sendPostRequest();
    sendGetRequest();
  }
  // function fetchTask(){
  //   fetch('https://react-custom-hook-775df-default-rtdb.firebaseio.com/tasks.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data);
  //     let tasks = [];
  //     for (let key in data) {
  //       tasks.push({ id: key, name: data[key] });
  //     }

  //     setAllTasks(tasks);
  //   })
  //   .catch((error) => {
  //     setErrorMessage(error.message);
  //   })
  // }

  function onDeleteTask(task){
    // console.log('Deleting task:', task);
    fetch(`https://react-custom-hook-775df-default-rtdb.firebaseio.com/tasks/${task.id}.json`, {
      method: 'DELETE'
    })
    .then((res) => {
      if (!res.ok){
        throw new Error("Something went wrong. Please Try Again Later");
      }

      // fetchTask();
      sendGetRequest();
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  return (
    <div>
      <div className="main">
        {/* <Increment></Increment>
        <Decrement></Decrement> */}
        <input type="text" ref={ inputRef }></input>
        <button onClick={ createTask }>Create</button>
      </div>
      { !errorMessage && <Task tasks={ allTasks } onDeleteTask={ onDeleteTask }></Task> }
    </div>
  );
}

export default App;
