"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));

    window.location.href = "/";
  }

  return (
    <div className="main-layout">
      <Navbar />

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <div className="card shadow p-4">

              <h3 className="text-center mb-4">Login</h3>

              <form onSubmit={handleSubmit}>

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
                  Login
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