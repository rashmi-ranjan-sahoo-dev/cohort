import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
    try {
          const body = await req.json();
          const { username, password} = body;

          const db = await connectDB();
          await db.collection("users").insertOne({username,password});

          return NextResponse.json({ message: "User added successfully"}, {status: 200});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    }  catch (err) {
    return NextResponse.json({ message: "Error adding user" }, { status: 500 });
  }
}
