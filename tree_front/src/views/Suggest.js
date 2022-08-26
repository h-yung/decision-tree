
export default function Suggest(){
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col lg:flex-row">
                    <img src="/pexels-kelly-2563742.jpg" className="object-fill h-96 rounded-lg" />
                    <div>
                        <h1>The suggestion box</h1>
                        <p className="subtitle">... will be open eventually.</p>

                        {/* <h1 className="text-5xl font-bold">Share a suggestion or feedback.</h1>
                        <form className="form-control w-full max-w-xs my-8">
                            <label className="label" htmlFor="suggestQ">
                                <span className="label-text">What question should be added here?</span>
                            </label>
                            <input type="text" id="suggestQ" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {/* <label className="label">
                                <span className="label-text-alt">Alt label</span>
                                <span className="label-text-alt">Alt label</span>
                            </label> */}
                        {/* </form> */} 

                    </div>
                </div>
            </div>
        </>
        

    )
}