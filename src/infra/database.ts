import mongoose from "mongoose"

export async function connect(){
    try {
        await mongoose.connect('mongodb+srv://fernandam04:1qasw2-3edfr4@cluster0.sbvrspb.mongodb.net/hero-project');
        console.log('Connect database success.')
    } catch (error) {
        console.log("~ file: database.ts5 ~ connect ~ error", error)
    }
}