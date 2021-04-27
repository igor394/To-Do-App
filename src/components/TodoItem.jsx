import React from 'react';

const TodoItem = (props) => {
    return props.todos.map((item, index) => (
            <div key={index} className='wraper todo-item'>
                {item.state ?
                    <div key={item.id} onClick={() => props.completeTodo(item.id)} className='complite todo-text cursor'>
                        <span style={{wordBreak: 'break-word'}}>{item.text}</span>
                    </div> : <div key={item.id} onClick={() => props.completeTodo(item.id)} className='todo-text cursor'>
                        <span style={{wordBreak: 'break-word'}}>{item.text}</span></div>}

                <div className='button-group'>
                    <img onClick={() => props.completeTodo(item.id)} className='item-icon' src="mark.png" alt="pop"/>
                    <img onClick={() => props.dateTodo(item.id)} className='item-icon' src="sand-clock.png" alt="pop"/>
                    <img onClick={() => props.updateTodo(item.id)} className='item-icon' src="gear.png" alt="pop"/>
                    <img onClick={() => props.removeTodo(item.id)} className='item-icon' src="toxic-cross.png" alt="pop"/>
                </div>
            </div>
        )
    );
};

export default TodoItem;