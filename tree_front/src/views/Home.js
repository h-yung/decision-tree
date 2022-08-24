import { useState } from 'react';
import { QFront } from "../components/QFront";


export default function Home({qList}){
	const [active, setActive] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(null);

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
                            <div class="max-w-md">
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