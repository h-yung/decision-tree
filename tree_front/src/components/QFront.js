import { useEffect, useState, useCallback } from 'react';

export function QFront({ activeState, question }){
    const [active, setActive] = activeState;
    const [activeQuestion, setActiveQuestion] = question;

    const [current, setCurrent] = useState(activeQuestion.question);
    const [keyTracker, setKeyTracker] = useState('');
    const [skip, setSkip] = useState(false);

    const resetReturn = (e) => {
        e.preventDefault();
        setKeyTracker('');
        setSkip(false);
        setActiveQuestion(null);
        setActive(!active);
    }

    const getNextQ = useCallback((key) => {
        if (activeQuestion[key]){ //so if not falsy
            setCurrent(activeQuestion[key]);
        } 
        else if (key.length !== 0 && !activeQuestion[key]) { 
            //not working properly rn with max key.length, but prevents skip from kicking in too soon
            setSkip(true);
        }
    }, [activeQuestion]);

    const updateCurrent = (e) => {
        e.preventDefault();
        const add = e.target.id;
        const newKey = keyTracker.concat(add);
        setKeyTracker(newKey);
    }

    useEffect(()=> {
        getNextQ(keyTracker)
    },[keyTracker])

    return (
        <div
            className="App"
        >
            <h3>{current}</h3>

            {/* need to show the following conditionally/disable */}
            { ! skip ? (
                <fieldset>
                <legend
                    className="choice"
                    htmlFor="choices"
                >
                    Choose one
                </legend>
                    <button
                        type="button"
                        className="primary"
                        id="Y"
                        onClick={e=>updateCurrent(e)}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        className="primary"
                        id="N"
                        onClick={e=>updateCurrent(e)}
                    >
                        No
                    </button>
                </fieldset>
            ) : (
                <p>You have your answer!</p>
            )}
            
            
            <button
                type="button"
                onClick={e=>resetReturn(e)}
            >
                Go to another question
            </button>
        </div>
    )
}