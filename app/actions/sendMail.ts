"use server"
import { bookingEmailConfirmation, contactUsConfirmation } from "@/utils/emailHtmls";
import nodemailer from "nodemailer";

export async function sendMail (subject: string, htmlContent: string) {
   try {
      const transporter = nodemailer.createTransport({
         service: "gmail",
         secure: true,
         host: "smtp.gmail.com",
         port: 465,
         auth: {
            user: 'qualysservuk@gmail.com',
            pass: process.env.GOOGLE_APP_PASSWORD!
         },
      });
   
      await transporter.sendMail({
         from: `"Qualys Services Ltd" <qualysservuk@gmail.com>`,
         to: "qualysservuk@gmail.com,ayomiposi.opadijo@gmail.com",
         subject,
         html: htmlContent
      });

      return true;
   } catch (e) {
      return false;
   }
}

export async function sendBookingMail (bookingInfo: Booking) {
   try {
      const sent = await sendMail(`Received Booking from ${bookingInfo.name}`, bookingEmailConfirmation(bookingInfo, Date.now()));
      return sent;
   } catch (e) {
      return false;
   }
}

export async function sendContactUsMail (contactInfo: Contact) {
   try {
      const sent = await sendMail(`Received Message from ${contactInfo.name}`, contactUsConfirmation(contactInfo, Date.now()));
      return sent;
   } catch (e) {
      return false;
   }
}