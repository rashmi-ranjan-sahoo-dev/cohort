"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_1VC4eDcfhuNa@ep-dawn-bush-aewiimgt-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
pgClient.connect();
app.post("/signup", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password, email } = req.body;
        const { city, country, street, pincode } = req.body;
        try {
            yield pgClient.query('BEGIN');
            const response = yield pgClient.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)RETURNING id', [username, email, password]);
            const userId = response.rows[0].id;
            const address = ` INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`;
            const addressInsertResponse = yield pgClient.query(address, [city, country, street, pincode, userId]);
            yield pgClient.query('COMMIT');
            console.log("User stored successfully in DB");
            res.status(201).json({ message: "Signup successful" });
        }
        catch (error) {
            console.error("DB Error:", error);
            res.status(500).json({ error: "Signup failed" });
        }
    });
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
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = `SELECT * FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1`;
    const response = yield pgClient.query(query, [id]);
    res.json({
        response: response.rows
    });
}));
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
