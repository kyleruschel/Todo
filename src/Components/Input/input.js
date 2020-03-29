import React from 'react';
import './input.scss';

const Input = ({ val, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                className='mainInput'
                onChange={e => onChange(e.target.value)}
                value={val}
            />
        </form>
    )
}

export default Input;
