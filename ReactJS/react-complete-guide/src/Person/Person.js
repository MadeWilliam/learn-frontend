import React from 'react'
// import './Person.scss'
import './Person.css'
import styled from 'styled-components'
import Radium from 'radium'

const StyledDiv = styled.div`
@media (min-width: 500px) : {
    width: '450px';
}
background-color: salmon;
`

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        < div className="Person" >
            <StyledDiv>
                {/* <div style={style} className="Person__container"> */}
                < p className="Person__firstParagraph" onClick={props.switchName} > I'm {props.name}</p>
                < p className="Person__secondParagraph" onClick={props.switchName} > I'm {props.age}</p>
                < input type="text" onChange={props.nameChanged} value={props.name} />
                <input type="number" onChange={props.ageChanged} value={props.age} />
                <button onClick={props.deletePerson}>Delete</button>
                {/* </div> */}
            </StyledDiv>
        </div >
    )
}

export default Radium(person);