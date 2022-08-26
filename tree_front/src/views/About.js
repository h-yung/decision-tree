import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function About(){
    return (
        <div className="App">
            <h1>Project Background</h1>
            <section>
                <h2>So what's all this for?</h2>
                <p>A simple single-page app to simplify decision making in the moment. Rather than a completely random piece of advice, this app aims to break down some larger questions into smaller ones for a marginally more nuanced recommendation.</p>
            </section>
            <section>
                <h2>Miscellany</h2>
                <h3 className="font-semibold">Tech used</h3>
                <p>React, JavaScript, Node.js, MongoDB, Express, Mongoose. Styled with Tailwind, a bit of daisyui, and a healthy dose of <a href="https://edwardtufte.github.io/tufte-css/">Tufte CSS</a>.</p>
                <h3 className="font-semibold">Unnecessary asides</h3>
                <p>Suggestion box will be open eventually! Thanks for clicking on your way through the interwebs.</p>
                <p>This app is intended as a small proof of concept for another larger project.</p>
                <p>I have never used more <code>divs</code> in my life than when using React. Happy to reach for a <code>section</code> now and then instead!</p>
                <p className="text-sm">Made by <a href="https://hyung.netlify.com">LCM.</a> Go to <a href=""><FontAwesomeIcon icon={faGithub} /></a> for the code.</p>
            </section>
        </div>
    )
}