import React from "react";

export default function Header() {
  return (
    <ul className="topnav">
      <li>
        <a className="site-logo" href="/">
          <img src="/plane.png" alt="plane" className="plane"></img>
        </a>
      </li>
      <li className="right">
        <a href="#about">About</a>
      </li>
    </ul>
  );
}