import React, {useState, useEffect, useRef} from 'react';
// Create a stopwatch with the following capabilities"
// The ability to keep track of time starting at a specified moment,
// Different lap times need to be able to be recorded,
// We need to know whether or not the stopwatch is currently running.

// TODO:  Challenge-3: Add Location text to your existing clock, for example, New York, or Indianapolis
// TODO:  Challenge-3: Add another clock and location in a different time zone. This can be anywhere you want. 
const StopWatchApp = () => {

    const startTimeRef = useRef(0);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(update, 10);

            return () => { clearInterval(interval) }
        }

    })

    const update = () => {
        const delta = Date.now() - startTimeRef.current;
        setTime(time + delta);
        startTimeRef.current = Date.now();
    }

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now()
    }

    const stop = () => {
        setIsRunning(false);
    }

    const lap = () => {
        setLaps([...laps, time]);
    }

    const reset = () => {
        setTime(0);
        setLaps([]);
    }

    return (
        <div>
            <h1 className="section-title">React Stop Watch</h1>
            <p>
                {Math.floor((time / 1000) / 60).toString()} :
                {Math.floor((time / 1000) % 60).toString()}
            </p>
            {isRunning ? <button onClick={stop}>Stop</button> : <button onClick={start}>Start</button>}
            {isRunning ? <button onClick={lap}>Lap</button> : <button onClick={reset}>Reset</button>}
            {laps.map(time => {
                return (
                    <p>
                       {Math.floor((time / 1000 ) / 60).toString()} :
                       {Math.floor((time / 1000) % 60).toString()}
                    </p>
                )
            })
            }
        </div>
    )
}

export default StopWatchApp;