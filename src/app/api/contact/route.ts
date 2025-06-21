import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    const request = await req.json();

    // Save to MongoDB
    await connectDB();

    const newContact = new Contact({ ...request });
    await newContact.save();

    // // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Uni Dost" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: "New Waiting Form Submission",
      html: `
        <h3>New Waiting Form Submission</h3>
        <p><strong>Email:</strong> ${request?.email}</p>
        <p><strong>Phone:</strong> ${request?.phone}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Saved successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;

    const contacts = await Contact.find()
      .sort({ createdAt: -1 }) // most recent first
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments();

    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing ID" },
        { status: 400 }
      );
    }

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json(
        { success: false, error: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
