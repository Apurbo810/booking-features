import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail(
  email: string,
  roomName: string,
  checkInDate: string,
  checkOutDate: string,
  totalPrice: number
) {
  await resend.emails.send({
    from: "Booking <onboarding@resend.dev>",
    to: email,
    subject: "Booking Confirmation",
    html: `
<div style="font-family: Arial, sans-serif; background:#f8f9fa; padding:40px 0;">
  
  <div style="max-width:600px;margin:auto;background:white;border-radius:8px;overflow:hidden;border:1px solid #dee2e6;">

    <!-- Header -->
    <div style="background:#0d6efd;color:white;padding:20px;text-align:center;">
      <h2 style="margin:0;">Hotel Booking</h2>
      <p style="margin:5px 0 0;">Booking Confirmation</p>
    </div>

    <div style="padding:30px;">

      <p>Hello,</p>

      <p>Your booking has been successfully confirmed.</p>

      <div style="border:1px solid #dee2e6;border-radius:6px;padding:20px;background:#f8f9fa;margin-top:20px;">

        <h3 style="margin-top:0;color:#0d6efd;">Booking Details</h3>

        <p><strong>Room:</strong> ${roomName}</p>
        <p><strong>Check-in:</strong> ${checkInDate}</p>
        <p><strong>Check-out:</strong> ${checkOutDate}</p>

        <div style="margin-top:15px;padding:12px;background:#e9f7ef;border-radius:6px;">
          <strong>Total Paid:</strong>
          <span style="font-size:20px;color:#198754;">$${totalPrice}</span>
        </div>

      </div>

      <div style="text-align:center;margin-top:30px;">
        <a href="${process.env.NEXT_PUBLIC_BASE_URL}"
        style="background:#0d6efd;color:white;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:bold;">
        View Website
        </a>
      </div>

      <p style="margin-top:25px;">
        If you have any questions, feel free to reply to this email.
      </p>

      <p>
        Best regards,<br/>
        <strong>Hotel Booking Team</strong>
      </p>

    </div>

    <div style="background:#f8f9fa;text-align:center;padding:10px;font-size:12px;color:#6c757d;">
      © ${new Date().getFullYear()} Hotel Booking
    </div>

  </div>

</div>
`,
  });
}