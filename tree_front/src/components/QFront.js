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
        <div className="App">
            <div className="hero min-h-screen bg-base-200">
                <div className="text-center">
                        <h3 className="text-2xl font-bold">{current}</h3>
                        {/* need to show the following conditionally/disable */}
                
                    {/* <div className="max-w-md"> */}

                    { ! skip ? (
                        <>
                            <fieldset className="my-20">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg m-2"
                                    id="Y"
                                    onClick={e=>updateCurrent(e)}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg m-2"
                                    id="N"
                                    onClick={e=>updateCurrent(e)}
                                >
                                    No
                                </button>
                            </fieldset>
                            <button
                                type="button"
                                class="btn btn-accent btn-outline"
                                onClick={e=>resetReturn(e)}
                            >
                                Go to another question
                            </button>
                        </>
                    
                ) : (
                    <>
                    <p className="text-2xl m-8">You have your answer!</p>
                    <button
                        type="button"
                        class="btn btn-accent btn-outline"
                        onClick={e=>resetReturn(e)}
                    >
                        Go to another question
                    </button>
                    </>
                    
                )}
                    {/* </div> */}
                    
                </div>
            </div>
            <div className="flex items-center">
                
            </div>
        </div>
    )
}