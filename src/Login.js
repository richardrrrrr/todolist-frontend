import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 在這裡添加登入邏輯
  };

  const handleForgotPassword = () => {
    // 在這裡添加忘記密碼的邏輯，導向另一個頁面
    console.log("忘記密碼功能尚未實現");
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            電子郵件:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            密碼:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">登入</button>
        </form>
        <button onClick={handleForgotPassword} style={{ marginTop: "10px" }}>
          忘記密碼？
        </button>
      </div>
    );
  };
}

export default Login;
