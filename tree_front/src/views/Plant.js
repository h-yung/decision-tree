import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { inputMap, defaultInputs } from "../utils/inputMap"
import { actualURL } from '../utils/resource';
import './Plant.css'

export default function Plant(){
    const [passcode, setPassCode] = useState('')
    const [inputs, setInputs] = useState(defaultInputs)

    const handleChange = (e)=> setPassCode(e.target.value)
    const handleInput = (e) => {
        const newInput = e.target.value;
        const keyLabel = e.target.name;
        const inputUpdated = {...inputs, [keyLabel]:newInput};
        console.log(`input updated is ${inputUpdated}`)
        setInputs(inputUpdated);
    }

    const postNewTree = async (e) => {
        e.preventDefault();
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({passcode, ...inputs}) 
        };
        try {
            const response = await fetch(`${actualURL}/create-tree`, options)
            const results = await response.json()
            console.log(results.message)

        }catch(err){ console.log(err)}
    }

    useEffect(()=> {

    })

    return (
        <>
            <h1>Plant a tree!</h1>
            <p className="subtitle">Add to the orchard</p>
            <p>If you don't have 30 minutes or you're wondering whether this is the best time to start a tree, please <Link to='/'>browse the existing trees</Link> instead for some decision-making help.</p>

            <h2>How it works</h2>
            <p>You start with the overarching question, and go through a few levels of sub-questions. These may be different depending on your answer to the previous question: If your answer to the initial question is "Yes", your follow-up question goes in "Y"; else, if your answer to the initial question is "No" (N), then your follow-up goes in "N".</p>
            <p>Some day this will be made more user-friendly. Until then...</p>

            <form
                onSubmit={e => postNewTree(e)}
                className="Plant__form"
            >
                <input 
                    type="text"
                    value={passcode}
                    id="passcode"
                    name="passcode"
                    onChange={e=>handleChange(e)}
                    placeholder="Enter passcode here"
                />

                <input 
                        type="text"
                        key="{inputs.question}" //suboptimal
                        name={inputs.question}
                        value={inputs.question}
                        onChange={e=>handleInput(e)}
                        placeholder="Main question"
                />
                <input 
                        type="text"
                        key={inputs.starter} //suboptimal
                        name={inputs.starter}
                        value={inputs.starter}
                        onChange={e=>handleInput(e)}
                        placeholder="Initial question"
                />
                <div className="container__sets_questions">
                    <fieldset>
                        {inputMap
                            .filter(line => line[0]==="Y")
                            .map(line => (
                                <input 
                                    type="text"
                                    key={line} //suboptimal
                                    name={line}
                                    value={inputs[line]}
                                    onChange={e=>handleInput(e)}
                                    placeholder={line}
                                />
                            ))
                        }
                    </fieldset>
                    <fieldset>
                        {inputMap
                            .filter(line => line[0]==="N")
                            .map(line => (
                                <input 
                                    type="text"
                                    key={line} //suboptimal
                                    name={line}
                                    value={inputs[line]}
                                    onChange={e=>handleInput(e)}
                                    placeholder={line}
                                />
                            ))
                        }
                    </fieldset>
                </div>
                    <button
                        className="btn__primary">
                        Submit
                    </button>
            </form>
        </>
    )
}
