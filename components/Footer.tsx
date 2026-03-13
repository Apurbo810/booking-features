"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <h3>Contact US</h3>
              <ul className="conta">
                <li>
                  <i className="fa fa-map-marker"></i> Address
                </li>
                <li>
                  <i className="fa fa-mobile"></i> +01 1234569540
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="#"> demo@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h3>Menu Link</h3>
              <ul className="link_menu">

                <li className={pathname === "/" ? "active" : ""}>
                  <Link href="/">Home</Link>
                </li>

                <li className={pathname === "/about" ? "active" : ""}>
                  <Link href="/about">about</Link>
                </li>

                <li className={pathname === "/rooms" ? "active" : ""}>
                  <Link href="/rooms">Our Room</Link>
                </li>

                <li className={pathname === "/gallery" ? "active" : ""}>
                  <Link href="/gallery">Gallery</Link>
                </li>

                <li className={pathname === "/blog" ? "active" : ""}>
                  <Link href="/blog">Blog</Link>
                </li>

                <li className={pathname === "/contact" ? "active" : ""}>
                  <Link href="/contact">Contact Us</Link>
                </li>

              </ul>
            </div>

            <div className="col-md-4">
              <h3>News letter</h3>
              <form className="bottom_form">
                <input
                  className="enter"
                  placeholder="Enter your email"
                  type="text"
                />
                <button className="sub_btn">subscribe</button>
              </form>

              <ul className="social_icon">
                <li>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-youtube-play"></i></a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>
                  © 2019 All Rights Reserved. Design by{" "}
                  <a href="https://html.design/">Free Html Templates</a>
                  <br /><br />
                  Distributed by{" "}
                  <a href="https://themewagon.com/" target="_blank">
                    ThemeWagon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}