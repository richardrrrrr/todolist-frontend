import React, { useState } from "react";
import "./Login.css";
import ForgotPassword from "./ForgotPassword";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 添加登入邏輯
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="login-container">
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            電子郵件地址
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            密碼
          </label>
        </div>

        {/* Checkbox and forgot password */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="form2Example31"
          />
          <label className="form-check-label" htmlFor="form2Example31">
            記住我
          </label>
          <a
            href="#!"
            onClick={() => alert("忘記密碼功能尚未實現")}
            className="float-end"
          >
            忘記密碼？
          </a>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary mb-4">
          登入
        </button>

        {/* Register link */}
        <div className="text-center">
          <p>
            還不是會員？ <a href="#!">註冊</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
