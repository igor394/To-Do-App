import React, { useState}  from 'react';


const FormCreate = (props) => {

    const [input, setInput]=useState('')

    const handleSubmitAdd = e => {
        e.preventDefault();
        console.log(e.target)
        props.onSubmitAdd({
            id: Math.floor(Math.random() * 100000),
            state: false,
            text: input
        });
        setInput('');
    };
    const handleSubmitEdit = e => {
        e.preventDefault();
        props.onSubmitEdit(input, props.edit.id);
        setInput('');
    };

    return (
        <>
            {props.edit ?
                <form onSubmit={handleSubmitEdit} className='todo-form'>
                    <input placeholder={props.edit.text} value={input} onChange={(e)=>{
                        setInput(e.target.value)
                    }} className='todo-input edit'/>
                    <button  className='todo-button edit'>Update</button>
                </form>
                :
                <div>
                    <form onSubmit={handleSubmitAdd} className='todo-form'>
                        <input placeholder='Update your item' value={input} onChange={(e)=>{
                            setInput(e.target.value)
                        }} className='todo-input edit'/>
                        <button  className='todo-button edit'>Add To Do</button>
                    </form>
                    <button onClick={props.showActive} className='todo-button edit'>Active To Do</button>
                    <button onClick={props.showCompleted} className='todo-button edit'>Completed To Do</button>
                </div>
                }
        </>


    );
};

export default FormCreate;