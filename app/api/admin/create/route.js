
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// import connectDB from "../../../lib/mongodb";
// import Admin from "../../../models/Admin";

// export async function POST(request) {
//   try {
//     // Get data from request body
//     const { email, password } = await request.json();

//     // Validate input
//     if (!email || !password) {
//       return NextResponse.json(
//         { message: "Email and password are required" },
//         { status: 400 }
//       );
//     }

//     // Basic password validation
//     if (password.length < 6) {
//       return NextResponse.json(
//         { message: "Password must be at least 6 characters" },
//         { status: 400 }
//       );
//     }

//     // Connect to MongoDB
//     await connectDB();

//     // Check if admin already exists
//     const existingAdmin = await Admin.findOne({
//       email: email.toLowerCase(),
//     });

//     if (existingAdmin) {
//       return NextResponse.json(
//         { message: "Admin already exists" },
//         { status: 409 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create admin
//     const admin = await Admin.create({
//       email: email.toLowerCase(),
//       password: hashedPassword,
//     });

//     // Success response
//     return NextResponse.json(
//       {
//         message: "Admin created successfully",
//         admin: {
//           id: admin._id,
//           email: admin.email,
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     // Print the complete error in the Next.js terminal
//     console.error("CREATE ADMIN ERROR:", error);

//     // Temporarily return the error to curl/browser
//     return NextResponse.json(
//       {
//         message: error?.message || "Unknown error",
//         error: String(error),
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log("API BODY:", body);

    return NextResponse.json({
      success: true,
      message: "API route is working",
      received: body,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

