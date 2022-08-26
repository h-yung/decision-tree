const mongoose = require('mongoose')

const QuestSchema = new mongoose.Schema({
  question: {
    type: String, //ends in ?
    required: true,
  },
  starter: {
    type: String,
    required: true,
  },
  Y: {
    type: String, 
    required: true,  //if throughout, then n/a for some later non followups
  },
  YY: {
    type: String, 
    required: true, 
  },
  YN: {
    type: String, 
    required: true, 
  },
  YYY: {
    type: String, 
    required: true, 
  },
  YYN: {
    type: String, 
    required: true, 
  },
  YNY: {
    type: String, 
    required: true, 
  },
  YNN: {
    type: String, 
    required: true, 
  },
  YYYY: {
    type: String, 
    required: true, 
  },
  YYYN: {
    type: String, 
    required: true, 
  },
  YYNY: {
    type: String, 
    required: true, 
  },
  YYNN: {
    type: String, 
    required: true, 
  },
  YNYY: {
    type: String, 
    required: true, 
  },
  YNYN: {
    type: String, 
    required: true, 
  },
  YNNY: {
    type: String, 
    required: true, 
  },
  YNNN: {
    type: String, 
    required: true, 
  },


  N: {
    type: String, 
    required: true, 
  },
  NY: {
    type: String, 
    required: true, 
  },
  NN: {
    type: String, 
    required: true, 
  },
  NYY: {
    type: String, 
    required: true, 
  },
  NYN: {
    type: String, 
    required: true, 
  },
  NNY: {
    type: String, 
    required: true, 
  },
  NNN: {
    type: String, 
    required: true, 
  },
  NYYY: {
    type: String, 
    required: true, 
  },
  NYYN: {
    type: String, 
    required: true, 
  },
  NYNY: {
    type: String, 
    required: true, 
  },
  NYNN: {
    type: String, 
    required: true, 
  },
  NNYY: {
    type: String, 
    required: true, 
  },
  NNYN: {
    type: String, 
    required: true, 
  },
  NNNY: {
    type: String, 
    required: true, 
  },
  NNNN: {
    type: String, 
    required: true, 
  },
  
  
})

module.exports = mongoose.model('Quest', QuestSchema)


// 0 as null.