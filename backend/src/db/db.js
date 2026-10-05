import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017"

const client = new MongoClient(URI)

export const db = client.db("tzofia")

try {
    await client.connect()
    console.log("DB connected!")
} catch (error) {
    console.error("DB connection failed!", error)
    process.exit(1)
}
