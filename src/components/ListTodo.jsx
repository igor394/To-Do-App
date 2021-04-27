import React, {useState} from 'react';
import AddUpdateTodo from "./AddUpdateTodo";
import TodoItem from "./TodoItem";
const key = 'keyToDo';

const ListTodo = () => {
    const setItemJson = (keys, arr) => localStorage.setItem(keys, JSON.stringify(arr));
    const getItemJson = keys => JSON.parse(localStorage.getItem(keys));
    const [todos, setTodos] = useState(getItemJson(key) || []);
    const [edit, setEdit] = useState(null)

    const addTodo = (todo) => {
        if (!todo.text) return alert('not correct to do');
        if (!localStorage.getItem(key)) {
            setItemJson(key, [todo]);
            setTodos(getItemJson(key));
        } else {
            let accum = getItemJson(key);
            setItemJson(key, [todo, ...accum]);
            setTodos(getItemJson(key));
        }
    }
    const completeTodo = (id) => {
        let arr = getItemJson(key);
        arr.map(i => {
            if (i.id === id) {
                if (i.state === true) {
                    i.state = false
                } else {
                    i.state = true
                }
                return i
            } else return i
        })
        setItemJson(key, arr);
        setTodos(getItemJson(key));
    }
    const removeTodo = (id) => {
        let arr = getItemJson(key);
        let newArr = arr.filter(i => i.id !== id);
        setItemJson(key, newArr);
        setTodos(getItemJson(key));
    }
    const updateTodo = (id) => {
        let arr = getItemJson(key);
        let obj = arr.find(i => i.id === id);
        setEdit(obj)
    }
    const updateTodoForm = (input, id) => {
        if (!input) return alert('not correct to do');
        let arr = getItemJson(key);
        arr.map(i => {
            if (i.id === id) {
                i.text = input;
                return i
            } else return i
        })
        setItemJson(key, arr);
        setTodos(getItemJson(key));
        setEdit(null)
    }
    const dateTodo = (id) => {
        let arr = getItemJson(key);
        let obj = arr.find(i => i.id === id);
        alert(`ToDo create: ${obj.date}`)
    }
    const showActive = () => {
        let arr = getItemJson(key);
        let newArr = arr.filter(i => i.state === false)
        setTodos(newArr);
    }
    const showCompleted = () => {
        let arr = getItemJson(key);
        let newArr = arr.filter(i => i.state === true)
        setTodos(newArr);
    }
    const showAll = () => {
        setTodos(getItemJson(key));
    }

    return (
        <div className='main'>
            <div className='form'>
                <div><h1>What's the Plan for Today?</h1></div>
                <AddUpdateTodo edit={edit} onSubmitAdd={addTodo} onSubmitEdit={updateTodoForm} showActive={showActive}
                               showCompleted={showCompleted} showAll={showAll}/>
            </div>
            <div className='list-item'>
                {!edit &&
                <TodoItem todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}
                          dateTodo={dateTodo}/>}
            </div>
        </div>
    )
};

export default ListTodo;