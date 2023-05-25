import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { optimizeContent } from "../chat";

export async function GET() {
  return NextResponse.json({ test: "123" });
}

export async function POST(req: Request) {
  console.log("request",await req.json());
  // return await optimizeContent(req.body)
  return NextResponse.json({ test: "321" });
}
