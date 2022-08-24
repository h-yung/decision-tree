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
                    <p>Find your question here.</p>
                    <ul>
                        { qList.map(q => (
                            <li
                                key={q.id}
                                id={q.id}
                                className="clickable"
                                onClick={e => activateQuestion(e)}
                            >
                                {q.question}
                            </li>
                        )) }
                    </ul>
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