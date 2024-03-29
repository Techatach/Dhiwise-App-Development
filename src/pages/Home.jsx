import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation my-9 px-20">
      <div>
        <h1>Homepage</h1>
        <p className="headline">
          This project was generated By{" "}
          <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
          to navigate through all pages.
        </p>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/subscribe">Subscribe</Link>
          </li>
          <li>
            <Link to="/sigleblog">SigleBlog</Link>
          </li>
          <li>
            <Link to="/allblog">AllBlog</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/forgotpassword">ForgotPassword</Link>
          </li>
          <li>
            <Link to="/updatepassword">UpdatePassword</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
