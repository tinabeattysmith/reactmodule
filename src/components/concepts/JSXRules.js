import React from 'react';

const JSXRules = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not.  It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not required</dt>
                    <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
                </dl>
                <hr />
                <NormalComponent />
                <CreateElementComponent />
            </div>
        </div>
    );
};

export default JSXRules;

const NormalComponent = () => {
    return (
        <div style={{ border: '2px solid black'}}>
            {/* The first set (outer set) of curly braces is React letting us interpolate.  Essentially, we use them whenever we want to write JavaScript that React can interpret in context. In this context, we want to pass our style attribute an object with border rules.  The inner curly braces are for the style object we define.  If we had more style rules to set than just a border, they could also be set in this object.*/}
            <h1>Normal Functional Component</h1>
            <p>This was contructed with JSX in the return.</p>
            <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" />
        </div>
    );
};


const CreateElementComponent = () => {
    return (
        React.createElement('div', {style: {border: '2px solid black'}},
        React.createElement('h1', null, 'CreateElement Componet'),
        React.createElement('p', null, 'This was constructed with CreateElement calls in the return'),
        React.createElement('img', {src: "https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png"}, null)
        )
    );
};