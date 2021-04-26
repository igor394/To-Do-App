import React from 'react';
// import FormCreate from "./FormCreate";

const Todos = (props) => {



    return props.todos.map((item, index) => (
            <div  key={index} className='wraper'>
                {item.state ? <div key={item.id} onClick={() => props.removeTodo(item.id)} className='complite'>
                    {item.text}
                </div> : <div key={item.id} onClick={() => props.removeTodo(item.id)} >
                    {item.text}
                </div>}

                <div className='button-group'>
                    <button  className='delete-icon' onClick={()=>props.removeTodo(item.id)}>Remove</button>
                    <button  className='edit-icon' onClick={()=>props.updateTodo(item.id)}>Edit</button>
                    <button  className='edit-icon' onClick={()=>props.completeTodo(item.id)}>Done</button>
                </div>
            </div>
        )
    );
};

export default Todos;