import React from 'react';

const validation = (props) => {
    let validationMessage = "text too short"

    if (props.inputLength > 5) validationMessage = "text too long"

    return (
        <div>
            {validationMessage}
        </div>
    )
}

export default validation;