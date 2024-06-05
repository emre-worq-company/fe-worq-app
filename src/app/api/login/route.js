// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import data from "@/dummy/users.json";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRW1yZSIsInN1cm5hbWUiOiJLYWJhY2EiLCJlbWFpbCI6ImVtcmUua2FiYWNhQHdvcnFjb21wYW55LmNvbSIsInBob25lIjoiNTM0Nzc4MzY0NiIsImlzQWN0aXZlIjoidHJ1ZSIsInJvbGUiOiJhZG1pbiJ9.afBn7e1c3hKeXGIiNSu3l-HH9Dz3qIDmqu6oYHHXCpc";

export async function POST(req) {
  const body = await req.json();

  if (body.email === "admin@example.com" && body.password === "@Password123") {
    cookies().set("accessToken", token);
    return NextResponse.json(data[0]);
  }
  if (body.email === "user@example.com" && body.password === "@Password123") {
    cookies().set("accessToken", token);
    return NextResponse.json(data[1]);
  }
  return NextResponse.json(
    { message: "Kullanıcı bulunamadı!!!" },
    { status: 401 }
  );
}

// export default async function POST(
//   req: AuthModel.Login.LoginRequest,
//   res: NextApiResponse<AuthModel.Login.LoginResponse>
// ) {
//   const body = await req;

//   if (body.email === "admin@example.com" && body.password === "@Password123") {
//     return res.status(200).json(data[0]);
//   }

//   return res.status(200).json(data[1]);
// }
