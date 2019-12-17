import React from 'react';
import Char from './Char';

const charList = (props) => {
    let text = props.inputValue.split('')
    text.map((ch, index) => {
        return <Char character={ch} key={index} click={props.click}/>
    })
}

export default charList;