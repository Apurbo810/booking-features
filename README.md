# Hotel Booking Website

A full-stack **Hotel Booking Platform** built with **Next.js, MongoDB, Stripe, and Cloudinary** where users can browse rooms, book them online, and pay securely.

---

# Features

### 👤 User Features

* User registration and login (JWT authentication)
* Browse available rooms
* Select booking dates using a calendar
* Secure payment with **Stripe Checkout**
* Booking confirmation via **email**
* Responsive Bootstrap UI

### 🛠 Admin Features

* Admin dashboard
* View all booking requests
* Monitor payment status

---

# Admin Login

Use the following credentials to access the admin dashboard:

**Email**

[admin@gmail.com](mailto:admin@gmail.com)

**Password**

admin123

After login, open:

/admin

to access the admin booking dashboard.

---

# Tech Stack

**Frontend**

* Next.js (App Router)
* React
* Bootstrap

**Backend**

* Next.js API Routes
* JWT Authentication

**Database**

* MongoDB Atlas

**Payments**

* Stripe Checkout

**Email**

* Resend API

**Media Storage**

* Cloudinary

---

# Project Structure

booking-ai-test
├── app
│   ├── api
│   │   ├── auth
│   │   ├── bookings
│   │   ├── checkout
│   │   ├── rooms
│   │   └── admin
│   ├── rooms
│   ├── login
│   ├── register
│   └── admin
├── components
├── lib
├── models
└── public

---

# Environment Variables

Create a `.env.local` file and add:

MONGODB_URI=your_mongodb_connection
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
JWT_SECRET=your_jwt_secret

---

# Installation

Clone the repository

git clone https://github.com/yourusername/booking-ai-test.git

Install dependencies

npm install

Run the development server

npm run dev

Open

http://localhost:3000

---

# Deployment

The project is deployed using **Vercel**.

Make sure the environment variables are added in the Vercel dashboard.

---

# Bonus Implementations

* Admin dashboard
* JWT authentication
* Email confirmation
* Stripe payment gateway
* Cloudinary image storage

---

# Author

Shariar Rahman Apurbo

LinkedIn
https://www.linkedin.com/in/apurbo-shariar-aab9b3251/
