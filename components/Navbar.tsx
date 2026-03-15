"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  async function handleLogout() {

    await fetch("/logout", {
      method: "POST",
      credentials: "include",
    });

    localStorage.removeItem("user");

    window.location.href = "/login";
  }

  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row">

            {/* Logo */}
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col logo_section">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
              <nav className="navigation navbar navbar-expand-md navbar-dark">

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">

                  {/* LEFT MENU */}
                  <ul className="navbar-nav mr-auto">

                    <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                      <Link className="nav-link" href="/">Home</Link>
                    </li>

                    <li className={`nav-item ${pathname === "/about" ? "active" : ""}`}>
                      <Link className="nav-link" href="/about">About</Link>
                    </li>

                    <li className={`nav-item ${pathname === "/rooms" ? "active" : ""}`}>
                      <Link className="nav-link" href="/rooms">Our Room</Link>
                    </li>

                    <li className={`nav-item ${pathname === "/gallery" ? "active" : ""}`}>
                      <Link className="nav-link" href="/gallery">Gallery</Link>
                    </li>

                    <li className={`nav-item ${pathname === "/blog" ? "active" : ""}`}>
                      <Link className="nav-link" href="/blog">Blog</Link>
                    </li>

                    <li className={`nav-item ${pathname === "/contact" ? "active" : ""}`}>
                      <Link className="nav-link" href="/contact">Contact Us</Link>
                    </li>

                  </ul>

                  {/* RIGHT MENU */}
                  <ul className="navbar-nav">

                    {!user ? (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link" href="/login">
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" href="/register">
                            Register
                          </Link>
                        </li>
                      </>
                    ) : (

                      <li className="nav-item dropdown">

                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="userDropdown"
                          role="button"
                          data-toggle="dropdown"
                        >
                          {user.name}
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                      {user.role === "admin" && (
                            <Link className="dropdown-item" href="/admin/dashboard">
                              Admin Dashboard
                            </Link>
                          )}
                          <button
                            className="dropdown-item text-danger"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>

                        </div>

                      </li>

                    )}

                  </ul>

                </div>

              </nav>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}