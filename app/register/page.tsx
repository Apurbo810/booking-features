"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Registration successful!");
    window.location.href = "/login";
  }

  return (
    <div className="main-layout">
      <Navbar />

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow p-4">

              <h3 className="text-center mb-4">Register</h3>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="form-control mb-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button className="btn btn-primary w-100">
                  Register
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}