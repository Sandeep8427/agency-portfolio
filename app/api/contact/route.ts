import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      last_name,
      email,
     
      company_name,
      help,
      company_size,
      info,
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "sandeepchambal199@gmail.com",
          pass: "jyfp uwcz kcwc brpc",
        },
      });

      const mailOptions = {
        from: email,
        to: "sandeepchambal1999@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>First Name: ${first_name}</p>
                    <p>Last Name: ${last_name}</p>
                    <p>Work Email: ${email}</p>
                
                    <p>Company Name: ${company_name}</p>
                    <p>Company Size: ${company_size}</p>
                    <p>Help: ${help}</p>
                
                    <p>Info: ${info}</p>
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
        console.error("Error sending email:", error); 
      
        return NextResponse.json(
          {
            success: false,
            message: "Failed to send email. Please try again later.",
          },
          { status: 500 } 
        );
      }
  } else {
    return NextResponse.json('method not allowed');
  }

}