import React, {useState, useEffect} from 'react';

const Hooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({});

    // This is fairly standard fare--we search the Star Wars API based upon our text input (we haven't included error checking to see if this is a number), we JSON-ify that data, then we store these results in our results state variable and console.log the results of this fetch. 
    const fetcher = () => {
          fetch(`https://swapi.dev/api/people/${query}`)
           .then(results => results.json())
           .then(json => {
            console.log(json)
            setResults(json);
           })
         }


    return (
        <div className="main">
            <div className="mainDiv">
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number" />
                <button onClick={() => fetcher()}>Click for Character!</button>
                {/* This ternary is kinda interesting.  As long as results is 'truthy', we display an h2 tag with the name of the character, otherwise we show empty divs. */}
                {results ? <h2>{results.name}</h2> : <div></div>}
            </div>    
        </div>
    );
};

const Hooks2 = () => {
    const [results, queryNum, setQueryNum] = useNumHook('');
    const [clicks, setClicks] = useClicks(0);

    return(
        <div className="main">
            <div className="mainDiv">
                <h3>Enter a number below to see a number fact</h3>
                <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder="enter a number"/>
                {results ? <h2>{results}</h2> : <div></div>}
                <button onClick={() => setClicks(clicks + 1)}>Click to update doucment title</button>
            </div>
        </div>
    );
};

// 'useNumHook' is actually just a function.  Unlike a functional component, it takes a specific number of a character to search for, rather than a prop object.  
// we're storing and giving a function to set the number a user queries, and we're storing and providing a function to set the results returned by the Random Number API.
const useNumHook = (num) => {
    const [queryNum, setQueryNum] = useState(num);
    const [results, setResults] = useState('');

    // Our 'effect' function (the arrow callback function inside the 'useEffect' parentheses) checks to see that the queryNum is a nonempty string.  If so, it fetches a math fact based upon the queryNum value.  After json-ifying the returned data in the first .then, our second .then calls setResults to store the json-ified data in the results state variable.
    // Additionally, this useEffect passes a second argument--the 'queryNum' inside the array, so that the callback doing the fetching is only called when there's a change to queryNum.
    
    useEffect(() => {
        if (queryNum !== ''){
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(results => results.text())
            .then(json => {
                console.log(json);
                setResults(json);
                });
        };
    }, [queryNum])
    return [results, queryNum, setQueryNum];
};

const useClicks = (initCount) => {
    const [clicks, setClicks] = useState(initCount);

    useEffect(() => {
        document.title = `You have clicked ${clicks} times`; 
    }, [clicks])
    return [clicks, setClicks]
};

export default Hooks2;