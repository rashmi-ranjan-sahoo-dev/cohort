import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_1VC4eDcfhuNa@ep-dawn-bush-aewiimgt-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

async function db() {
    await pgClient.connect();
    const result = await pgClient.query('SELECT * FROM USERS;')
console.log(result)
}

db()