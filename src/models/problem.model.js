import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
     title : {
        type: String,
        required: [true, 'Title cannot be empty']
     },
     description: {
        type: String,
        required: [true, 'Description cannot be empty']
     },
     difficulty: {
        type: String,
        required: [true, 'Difficulty cannot be empty'],
        enum : [`easy`, `medium`, `difficulty`],
        default: 'easy'
     },
     testcases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
     ],
     editorial: {
        type: String
     }
});

export const Problem = mongoose.model('Problem', problemSchema);