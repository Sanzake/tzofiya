import { MongoClient } from "mongodb";
import "dotenv/config"

const client = new MongoClient(process.env.URI)

export const db = client.db("tzofia")

try {
    await client.connect()
    console.log("DB connected!")
} catch (error) {
    console.error("DB connection failed!", error)
    process.exit(1)
}
