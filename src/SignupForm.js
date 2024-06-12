import React, { useState } from "react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("密碼和確認密碼不匹配！");
      return;
    }
    // 提交表單，例如發送到 API
    console.log("註冊資料", { username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        用戶名:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        密碼:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        確認密碼:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">註冊</button>
    </form>
  );
}

export default SignupForm;
