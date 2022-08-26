import { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScaleLeft, faBalanceScale, faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'

export function QFront({ activeState, question }){
    const [active, setActive] = activeState;
    const [activeQuestion, setActiveQuestion] = question;

    const [mainQ, setMainQ] = useState(activeQuestion.question);
    const [current, setCurrent] = useState(activeQuestion.starter);
    const [keyTracker, setKeyTracker] = useState('');
    const [scale, setScale] = useState(faBalanceScale)
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
            if (activeQuestion[key][0] === "Y") {
                setScale(faBalanceScaleLeft);
                setSkip(true);
            }
            if (activeQuestion[key][0] === "N") {
                setScale(faBalanceScaleRight);
                setSkip(true);
            }
        } 
        // else if (activeQuestion[key]) { 
        //     //not working properly rn with max key.length, but prevents skip from kicking in too soon
        //     // update skip trigger to a hidden key or condition on the string value returned (if it begins with Y(es) or N(o)) so that it closes out upon receiving a conclusive decision.
        //     // if (activeQuestion[key][0] === "Y" || activeQuestion[key][0] === "N") 
            
        //     setSkip(true);
        // }
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
                        <h2 className="text-2xl font-bold my-4">{mainQ}</h2>
                        <h3 className="text-5xl font-bold">{current}</h3>
                        <FontAwesomeIcon 
                            icon={scale} 
                            className="w-8 m-8 text-5xl" 
                        />

                    { ! skip ? (
                        <>
                            <fieldset className="my-5">
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
                                className="btn btn-accent btn-outline"
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
                        className="btn btn-accent btn-outline"
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