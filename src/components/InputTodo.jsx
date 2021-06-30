import React from 'react';

const style = {
        backgroundColor: '#c1ffff',
        width: '400px',
        height: '30px',
        padding: '8px',
        margin: '8px',
        borderRadius: '8px',
        textAlign: 'center'    
}

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled} = props;
    return (
        <div style={style} className="input-area">
            <input 
                disabled={disabled}
                type="text" placeholder="Enter your todo" 
                value={todoText} 
                onChange={onChange}
            />
            <button disabled={disabled}  onClick={onClick}>Add</button>
         </div>
    
    );
};