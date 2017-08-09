var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const questionSchema = new Schema({
    value: Number,
    question: String,
    answer: String
})

const categorySchema = new Schema({
    name: String,
    questions: [questionSchema]
});

const gameSchema = new Schema({
    user: String,
    points: Number,
    board: [Boolean],
    categories: [categorySchema]
});

gameSchema.pre('save', function(next){
    const emptyBoard = [
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
    ];
    this.board = emptyBoard;
    next();
});

const Question = mongoose.model('Question', questionSchema);
const Game = mongoose.model('Game', gameSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = {
  Category: Category,
  Game: Game,
  Question: Question
};