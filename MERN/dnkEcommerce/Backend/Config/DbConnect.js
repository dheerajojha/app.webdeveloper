import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        if (connect) {
            console.log(`backend running on host ${connect.connection.host}`)
        }
    } catch (error) {
        console.log(error)

    }
}
export default dbConnect