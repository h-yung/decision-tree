import { useEffect, useState } from 'react';
import { QFront } from "../components/QFront";

export default function Home({qList}){
    const [data, setData] = useState([]);
	const [active, setActive] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(null);

    const actualURL = 'http://localhost:3001/trees' //server is on 3001

    useEffect(()=>{
        async function getData(url) {
            const response = await fetch(url) //local host but server is 3001 not 3000
            const results = await response.json()
            setData(results) 
        }
       getData(actualURL);
    }, [actualURL])

    const activateQuestion = (e) => {
        const qID = e.target.id;
        const newQuest = data.find(q => q._id === qID)
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
                                <h1 className="text-5xl font-bold">Questions, answered.</h1>
                                <p className="py-6">Find your question and get a suggested action to take within three to four steps.</p>
                                <p className="my-2 uppercase text-sm">Pick a tree:</p>
                                <ul className="btn-group btn-group-vertical">
                                    { data.map(q => (
                                        <li
                                            key={q._id}
                                            className="clickable"
                                        >
                                            <button
                                                id={q._id}
                                                className="btn my-2"
                                                onClick={e => activateQuestion(e)}
                                            >
                                                {q.question}
                                            </button>
                                        </li>
                                    )) }
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