import React from "react";
import ReactDOM from "react-dom/client";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";

import "./global.css";
import Logo from "./assets/logo.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={Logo} alt="Logo" />
        <nav className="main-navigation">
          <a className="active" href="#">
            <House weight="fill" />
            Home
          </a>
          <a href="#">
            <Hash weight="fill" />
            Explore
          </a>
          <a href="#">
            <Bell />
            Notifications
          </a>
          <a href="#">
            <Envelope />
            Messages
          </a>
          <a href="#">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="#">
            <FileText />
            Lists
          </a>
          <a href="#">
            <User />
            Profile
          </a>
          <a href="#">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content"></div>
    </div>
  </React.StrictMode>
);
