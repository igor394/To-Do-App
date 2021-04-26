import React, {useState} from 'react';
import FormCreate from "./FormCreate";
import Todos from "./Todos";
const key = 'keyToDo';

const ListTodo = () => {

    const setItemJson = (keys, arr) => localStorage.setItem(keys, JSON.stringify(arr));
    const getItemJson = keys => JSON.parse(localStorage.getItem(keys));
    const [todos, setTodos] = useState(getItemJson(key)||[]);
    const [edit, setEdit] = useState(null)
    // localStorage.removeItem(key)

    const addTodo=(todo)=>{
        if (!todo.text ) return alert('not correct to do');
        if (!localStorage.getItem(key)) {
            setItemJson(key, [todo]);
            setTodos(getItemJson(key));
        } else {
            let accum = getItemJson(key);
            setItemJson(key, [todo, ...accum]);
            setTodos(getItemJson(key));
        }
    }
    const completeTodo=(id)=>{
        let arr = getItemJson(key);
        arr.map(i=>{
            if (i.id===id){
                i.state = true;
                return i
            } else return i
        })
        setItemJson(key, arr);
        setTodos(getItemJson(key));
    }
    const removeTodo=(id)=>{
        let arr = getItemJson(key);
        let newArr = arr.filter(i=> i.id !== id);
        setItemJson(key, newArr);
        setTodos(getItemJson(key));
    }
    const updateTodo=(id)=>{
        let arr = getItemJson(key);
        let obj = arr.find(i=> i.id === id);
        setEdit(obj)
    }
    const updateTodoForm=(input, id)=>{
        let arr = getItemJson(key);
        arr.map(i=>{
            if (i.id===id){
                i.text = input;
                return i
            } else return i
        })
        setItemJson(key, arr);
        setTodos(getItemJson(key));
        setEdit(null)
    }
    const showActive=()=>{
        let arr = getItemJson(key);
        let newArr = arr.filter(i=> i.state === false)
        setTodos(newArr);
    }
    const showCompleted=()=>{
        let arr = getItemJson(key);
        let newArr = arr.filter(i=> i.state === true)
        setTodos(newArr);
    }

    return (
        <div className='main'>
            <div className='form'>
                <h1>What's the Plan for Today?</h1>
                <FormCreate edit={edit} onSubmitAdd={addTodo} onSubmitEdit={updateTodoForm} showActive={showActive} showCompleted={showCompleted}/>
            </div>
            <div className='list-item'>
                {!edit &&<Todos todos={todos}  completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>}
            </div>
        </div>

    )
};

export default ListTodo;