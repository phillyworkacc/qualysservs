import { formatMilliseconds } from "./date";

export function bookingEmailConfirmation (bookingInfo: Booking, date: number) {
   return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
   <body>
      <h1>Received Booking from ${bookingInfo.name}</h1>
      <br>
      <h2>Booking Details</h2>
      <p><b>Name:</b> ${bookingInfo.name}</p>
      <p><b>Email:</b> ${bookingInfo.email}</p>
      <p><b>Service Required:</b> ${bookingInfo.service}</p>
      <br>
      <p><b>Sent on:</b> ${formatMilliseconds(date)}</p>
   </body>
   </html>`;
}

export function contactUsConfirmation (contactInfo: Contact, date: number) {
   return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
   <body>
      <h1>Received Message from ${contactInfo.name}</h1>
      <br>
      <p><b>${contactInfo.name}</b> (${contactInfo.email})</p>
      <p>${contactInfo.message}</p>
      <br>
      <p><b>Sent on:</b> ${formatMilliseconds(date)}</p>
   </body>
   </html>`;
}