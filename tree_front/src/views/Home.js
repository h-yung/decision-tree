import { useEffect, useState } from 'react';
import { QFront } from "../components/QFront";
// import { getQuestions } from '../api/data';


export default function Home({qList}){
    const [data, setData] = useState([]);
	const [active, setActive] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(null);


    const [msg, setMsg ] = useState('');

    const actualURL = 'http://localhost:3001/trees'

    //  const getData= async ()=>{
    //         const response = await fetch(url) //local host but server is 3001 not 3000
    //         const results = await response.json()
    //         console.log(results.map(thing => thing.question))
    //         setData(results);
    //     }

    useEffect(()=>{
        async function getData(url) {
            const response = await fetch(url) //local host but server is 3001 not 3000
            const results = await response.json()
            // console.log(results.map(thing => thing.question))
            setMsg(results.map(thing => thing.question))
            console.log(`this is msg: ${msg}`)
            setData(results);
        }
       getData(actualURL);
    }, [actualURL])

    const activateQuestion = (e) => {
        const qID = e.target.id;
        const newQuest = qList.find(q => q.id === qID)
        setActiveQuestion(newQuest);
        setActive(!active);
    }

    return (
        <div>
            {!active ? (
                <>
                    <header className="hero min-h-screen bg-base-200">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                {/* <button type="button" onClick={getData}>Temp fetch</button> */}
                                <h1 className="text-5xl font-bold">Welcome to the tree.</h1>
                                <p className="py-6">Find your question and get a suggested action to take within three to four steps.</p>
                                <p className="text-xl my-8">Filter to come!</p>
                                <ul className="btn-group btn-group-vertical">
                                    { qList.map(q => (
                                        <li
                                            key={q.id}
                                            className="clickable"
                                        >
                                            <button
                                                id={q.id}
                                                className="btn my-2"
                                                onClick={e => activateQuestion(e)}
                                            >
                                                {q.question}
                                            </button>
                                        </li>
                                    )) }
                                    {/* { data ? (<li key={data[0]._id}>{data[0].question}</li>): <p>Nothing to see here</p>} */}
                                    
                                    { msg ? (<li key={msg[0]}>{msg[0]}</li>): <p>Nothing to see here</p>}
                                </ul>
                            </div>
                        </div>
                    </header>
                    
                </>
            ) : (
                <>
                    <QFront  
                        activeState={[active,setActive]} 
                        question={[activeQuestion, setActiveQuestion]}
                    />
                </>
            )
        }
            
        </div>
    )
}