import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_1VC4eDcfhuNa@ep-dawn-bush-aewiimgt-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

pgClient.connect();

app.post("/signup", async function (req, res) {
  const { username, password, email } = req.body;

  const {city, country, street, pincode} = req.body;


  try {
    await pgClient.query('BEGIN');
    const response = await pgClient.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)RETURNING id',
      [username, email, password]
    );

    const userId = response.rows[0].id;

    const address = ` INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`

    const addressInsertResponse = await pgClient.query(address, [city, country, street,pincode,userId]);

    await pgClient.query('COMMIT');

    console.log("User stored successfully in DB");
    res.status(201).json({ message: "Signup successful" });

  } catch (error: any) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Signup failed" });
  }
});

// app.get("/metadata",async (req,res) =>{

//     const id = req.query.id;

//     const query1 = `SELECT * FROM users WHERE id=$1`;
//     const response1 = await pgClient.query(query1, [id]);

//     const query2 = `SELECT * FROM addresses WHERE user_id= $1`;
//     const response2 = await pgClient.query(query2,[id]);

//     res.json({
//         user: response1.rows[0],
//         address: response2.rows[0]
//     })
// })

app.get("/metadata",async (req,res) =>{

    const id = req.query.id;

    const query = `SELECT * FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1`
   
    const response = await pgClient.query(query,[id]);

    res.json({

        response: response.rows
       
    })
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
