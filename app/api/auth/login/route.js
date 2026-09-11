// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const { email, password } = body;

//     console.log("Email:", email);
//     console.log("Password:", password);

//     return NextResponse.json({
//       success: true,
//       message: "Login API is working",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Something went wrong",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";


export async function POST(request) {
  try {
    console.log("LOGIN API CALLED");

    const body = await request.json();

    console.log("REQUEST BODY:", body);

    await connectDB();

    console.log("MONGODB CONNECTED");

    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully",
    });
  } catch (error) {
    console.error("LOGIN API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}