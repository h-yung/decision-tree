// where Questions data comes
const Quest = require('../models/Quest')

const path =  __dirname +'/views/';

// 'Quest', QuestSchema
module.exports = {
    // getForm: async (req,res) => {
    //     try{
    //         res.render('index.ejs')

    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    getIndex: async (req,res)=> {
        res.sendFile(path + "index.html")
    },
    getTree: async (req,res) => {
        try{
            const questions = await Quest.find() //Quest is our model, Mongoose returns a usable array, unspecific
            // maybe specify via FE to avoid calling entire set
            res.json(questions)

        }catch(err){
            console.log(err)
        }
    },
    createTree: async (req,res)=> {
        if (req.body.passcode === process.env.CODE){
            try{
                await Quest.create(
                    {
                        question: req.body.question,
                        starter: req.body.starter,
                        Y: req.body.Y,
                        YY: req.body.YY,
                        YN: req.body.YN,
                        YYY: req.body.YYY,
                        YYN: req.body.YYN,
                        YNY: req.body.YNY,
                        YNN: req.body.YNN,
                        YYYY: req.body.YYYY,
                        YYYN: req.body.YYYN,
                        YYNY: req.body.YYNY,
                        YYNN: req.body.YYNN,
                        YNYY: req.body.YNYY,
                        YNYN: req.body.YNYN,
                        YNNY: req.body.YNNY,
                        YNNN: req.body.YNNN,
                        N: req.body.N,
                        NY: req.body.NY,
                        NN: req.body.NN,
                        NYY: req.body.NYY,
                        NYN: req.body.NYN,
                        NNY: req.body.NNY,
                        NNN: req.body.NNN,
                        NYYY: req.body.NYYY,
                        NYYN: req.body.NYYN,
                        NYNY: req.body.NYNY,
                        NYNN: req.body.NYNN,
                        NNYY: req.body.NNYY,
                        NNYN: req.body.NNYN,
                        NNNY: req.body.NNNY,
                        NNNN: req.body.NNNN,
                    })
                console.log('A new tree was added!')
                // res.json({message:'A new tree has been added!'})
                res.redirect('/') //both triggers header errors notices
            }catch(err){
                console.log(err)
            }
        } else {
            res.json({message:'Need passcode'})
        }
    }
}