
// get question data, all handled client side afterwards
export const getQuestions = async ()=>{
    try{
        const response = await fetch('http://localhost:3001/trees') //local host but server is 3001 not 3000
        const data = await response.json()
        console.log(data)
        console.log(data.map(item => item._id))
        console.log(Array.isArray(data))
    }catch(err){
        console.log(err)
    }
}