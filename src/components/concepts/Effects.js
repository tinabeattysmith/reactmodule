import React, { useState, useEffect} from 'react';

const Effects = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h2>Below are some important points regarding effects:</h2>
                <ul>
                    <li>They are triggered with state and prop updatesm as well as after initial render to the DOM.</li>
                    <li>Effects are used to trigger certain actions based upon changes to the component.</li>
                    <li>Effects can return cleanup functions, which can clean up timers using memory, listeners to outside APIs, and other functions which may use system resources.</li>
                </ul>
                {/* Each SampleEffect component gets its own state values. Why are these running onload???*/}
                {/* Why are these running onload??? Remember that effects run on state change.   When this component loads to the screen, it initializes our 'timerRunning' state variable.  Because this state variable is initialized, React runs the effect.  However, our effect doesn't do anything because 'timerRunning' is false.*/}
                <SampleEffect/>
                <br />
                <SampleEffect/>
            </div>
        </div>
    );
};

export default Effects;

const SampleEffect = () => {
    const [timerRunning, setTimerRunning] = useState(false);
    useEffect(() =>{
        // we are now setting a new timer if our timerRunning state variable is true.  The callback function in this timer logs a message to the console and resets timerRunning to false after 2 seconds expire.  Because our timer resets our state variable, we can now use this effect multiple times.  
        let timer;
        if (timerRunning){
            timer=window.setTimeout(() => {
                console.log('the timer expired', Date.now()/1000);
                setTimerRunning(false);  
            }, 2000)
        }
        // useEffect allows us to gracefully deal with exactly this situation.  useEffect lets us return a callback function to remove potential memory leaks like this from the DOM
        return() => {window.clearTimeout(timer); console.log('the timer was cleaned up', Date.now()/1000)};
    });

    useEffect(() => {
        console.log('This painting needs some happy trees');
    }, [])

    let buttonHandler = () => {
        if(!timerRunning){
            setTimerRunning(true); 
        };
    };
    return(
        <div style ={{border: '1px dashed black'}}>
            <h2>This component demos an effect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console</button>
        </div>
    );
};

 // Here's a summary of why you see the messages in the console:
    // 1) When we toggle the button, that causes a state change.  When there's a state change, our cleanup function runs, then the effect processes (makes a new timer).
    // 2) When 2 seconds expire, we process the timeout function, which console.logs to the screen.  This timeout function also initiates a state change, which leads us to the final phase:
    // 3) The cleanup function runs again before our effect re-fires.  This cleanup function shows us the 3rd message in the console, and it's the second cleanup our component fires