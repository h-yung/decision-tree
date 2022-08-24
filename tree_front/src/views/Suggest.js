
export default function Suggest(){
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://cdn2.thecatapi.com/images/23UtKZntN.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Share a suggestion or feedback.</h1>
                        <form className="form-control w-full max-w-xs my-8">
                            <label className="label" htmlFor="suggestQ">
                                <span className="label-text">What question should be added here?</span>
                            </label>
                            <input type="text" id="suggestQ" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {/* <label className="label">
                                <span className="label-text-alt">Alt label</span>
                                <span className="label-text-alt">Alt label</span>
                            </label> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
        

    )
}