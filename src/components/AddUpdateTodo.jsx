import React, {useState, useCallback} from 'react';

const AddUpdateTodo = (props) => {
    const [input, setInput] = useState('');
    const handleSubmitAdd =useCallback((e) => {
        e.preventDefault();
        props.onSubmitAdd({
            id: Math.floor(Math.random() * 100000),
            state: false,
            text: input,
            date: new Date().toLocaleString()
        });
        setInput('');
    },[input, props]);
    const handleSubmitEdit = useCallback((e)=> {
        e.preventDefault();
        props.onSubmitEdit(input, props.edit.id);
        setInput('');
    },[input, props]);

    return (
        <div className='all-form'>
            {props.edit ?
                <form onSubmit={handleSubmitEdit} className='todo-form'>
                    <div className='update'>
                        <input placeholder={props.edit.text} style={{width: '65%'}} value={input} onChange={(e) => {
                            setInput(e.target.value)
                        }} className='todo-input edit'/>
                        <button className='todo-button add'>Update</button>

                    </div>
                    <div><h1>Enter you change!</h1></div>
                </form>
                :
                <div>
                    <form onSubmit={handleSubmitAdd} className='todo-form'>
                        <input placeholder='Enter your item' style={{width: '65%'}} value={input} onChange={(e) => {
                            setInput(e.target.value)
                        }} className='todo-input edit'/>
                        <button className='todo-button add cursor'>Add To Do</button>
                    </form>
                    <button onClick={props.showAll} className='todo-button all cursor'>All To Do</button>
                    <button onClick={props.showActive} className='todo-button act cursor'>Active To Do</button>
                    <button onClick={props.showCompleted} className='todo-button compl cursor'>Completed To Do</button>
                </div>
            }
        </div>
    );
};

export default AddUpdateTodo;