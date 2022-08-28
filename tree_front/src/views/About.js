import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './About.css';

export default function About(){
    return (
        <div className="About carousel-item w-full" id="about">
            <h1>Project Background</h1>
            <section>
                <h2>So what's all this for?</h2>
                <p>A simple single-page app to simplify decision making in the moment. Rather than a completely random piece of advice, this app aims to break down some larger questions into smaller ones for a marginally more nuanced recommendation.</p>
                <p className="text-sm">Made by <Link to="https://hyung.netlify.com">LCM.</Link> Go to <Link to="https://github.com/h-yung/decision-tree"><FontAwesomeIcon icon={faGithub} /></Link> for the code.</p>
            </section>
            <section>
                <h2>Miscellany</h2>
                <h3 className="font-semibold">Tech used</h3>
                <p>React, JavaScript, Node.js, MongoDB, Express, Mongoose. Styled with Tailwind, a bit of daisyui, and basically <Link to="https://edwardtufte.github.io/tufte-css/">Tufte CSS</Link>. <label htmlFor="mn-comment"
       className="margin-toggle">&#8853;</label><input type="checkbox"
       id="mn-comment" className="margin-toggle"/><span className="marginnote">I have never used more <code>divs</code> in my life than when using React, so this library has been mostly refreshing.</span></p>
                <h3 className="font-semibold">Unnecessary asides</h3>
                <p>Suggestion box will be open eventually! Thanks for clicking on your way through the interwebs.</p>
                <p>This app is intended as a small proof of concept for another larger project.</p>
            </section>
            <section className="min-h-screen bg-base-200 my-4">
                <div className="flex-col lg:flex-row">
                    <img src="/pexels-kelly-2563742.jpg" className="object-fill h-96 rounded-lg" />
                    <div>
                        <h2>The suggestion box</h2>
                        <p className="subtitle">... will be open eventually.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}