import React, {useState, useEffect} from 'react';

const TimerApp = () => {
    const [secondsElasped, setSecondsElapsed] = useState(0);
    
    // Create a method to add 1 to secondsElapsed
    const tick = () => setSecondsElapsed(secondsElasped + 1);

    // Create something that will call the above method every 1 second or 1000 ms
    useEffect(() => {
        let interval = setInterval(() => tick(), 1000);
        //console.log(interval);
        // stops interval when component is no longer viewed
        return()=> clearInterval(interval);
    });
    return(
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">React Timer</h1>
                <div>Seconds Elapsed: {secondsElasped}</div>
            </div>
        </div>
    );   
};

export default TimerApp;