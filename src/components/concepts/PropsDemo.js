import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    // state values are storing style properties that will show up within our parent class component. 

    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');
    
    // an object in our component to pass the styles off as a styling prop to the new div
    // the right hand side of our assignment is a value for whichever CSS property we need to set.
    // This method(function) is responsible for setting the state of our class component.
    let styles = {
        color : color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign,
    };

    // ES6 arrow function to build out our method, and we're using a ternary operator to check what the current value is, and setting it accordingly.
    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('blue') : setBackgroundColor('purple');
    }

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('50px') : setBorderRadius('5px');
    }

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }

    return (
        <div className = "main">
            <div className = "mainDiv">
                {/* the following FunctionalComponent calls will display our style options */}
                <div style={styles}>
                    {/* string and function are props.  These pass down to FunctionalComponent */}
                    <FunctionalComponent 
                    string="Color Toggle" function={toggleColor} selectedStyle={color}
                    />
                    <FunctionalComponent 
                    string="Background Color Toggle" function={toggleBackgroundColor} selectedStyle={backgroundColor}
                    />
                    <FunctionalComponent 
                    string="Border Radius Toggle" function={toggleBorderRadius} selectedStyle={borderRadius}
                    />
                    <FunctionalComponent 
                    string="Border Style Toggle" function={toggleBorderStyle} selectedStyle={borderStyle}
                    />
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            {/* the onClick event handler fires the toggleColor method when it is clicked.  Chikd component is indirectly affecting the state of our parent component */}
            <button onClick={props.function}>Click me</button>
            <TinyComponent selectedStyle={props.selectedStyle}/>  
        </div>
    );
};
// In the PropsDemo component, called a functional component with the prop 'string'. The PropsDemo class is not responsible for displaying to the DOM. It calls a child component (the functional component) which handles all of the DOM display. The functional component itself doesn't actually display a specific value. The information contained inside the <p> tags is determined by the props object passed to the functional component. {props.string} shows whatever the value of string is from the prop.

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    );
};

FunctionalComponent.defaultProps = {
    // when prop is not defined default values will be assigned.
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??' 
};

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
};