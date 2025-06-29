import { MongoClient } from "mongodb";

const uri = "mongodb+srv://rinkuasahoo04:rinku1234@cluster0.9as9pzb.mongodb.net/project"
const client = new MongoClient(uri);

export async function connectDB() {
    try {
         if (!client.topology?.isConnected()){
            await client.connect();
         }

         const db = client.db();
          return db;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any){
        console.error("MongoDB connection error:", error)
        throw error;
    }
}