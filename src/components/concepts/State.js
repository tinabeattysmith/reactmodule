import React, {useState} from 'react';

const State = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is Unique to Functional Components</dt>
                    <dd>Class components have a seperate means of using and changing state</dd>
                    <dt>useState Uses Array Destructuring</dt>
                    <dd>useState provides a state variable and a setState function</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked into React</dd>
                    <dt>useState Triggers Re-renders</dt>
                    <dd>Like with props, changing the state of a component re-renders the whole component.</dd>
                </ul>
                {/* calling the function */}
                {StateExample()}
            </div>
        </div>
    );
};

function StateExample() {
    const [text, setText] = useState('');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return(
        <div>
            {/* '2-way binding'.  Our state variable value is determined by the input field, and the input field value is determined by the state variable value. 
            callback function being the e => setText(...)*/}
            <input value={text} onChange={e => setText(e.target.value)}/>
            <br />
            <img
            // below sets the style of the like button inline, meaning that we have passed a style object to be read by the style attribute.
            style={{ width: '100px', height: '100px'}}
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" onClick={e => setLikeNum(likeNum + 1)}
            />
            <span>{likeNum}</span>
            <br />
            <br />
            <p
                style={{ color: textColor}}
                onMouseEnter={e=> setTextColor('red')}
                onMouseLeave={e=> setTextColor('blue')}>
                This text should be able to change colors
            </p>
        </div>
    );
};

export default State;