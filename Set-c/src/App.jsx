import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  // Login function
  const login = (role) => {
    if (username.trim() !== "") {
      setUser({
        username: username,
        role: role
      });
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setUsername("");
  };

  // Main container style
  const containerStyle = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
    margin: 0
  };

  // Card style
  const cardStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)"
  };

  // Input style
  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "15px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box"
  };

  // Button style
  const buttonStyle = {
    padding: "12px 18px",
    margin: "5px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px"
  };

  // If user is logged in
  if (user) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1>Welcome!</h1>

          <h2>
            {user.username} ({user.role})
          </h2>

          {user.role === "Admin" ? (
            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#e74c3c",
                color: "white"
              }}
            >
              Delete Post
            </button>
          ) : (
            <p style={{ fontSize: "16px", color: "#555" }}>
              Read-only access
            </p>
          )}

          <br />

          <button
            onClick={logout}
            style={{
              ...buttonStyle,
              backgroundColor: "#333",
              color: "white"
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Login form
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Login Form</h1>

        <p style={{ color: "#666" }}>
          Enter your username to continue
        </p>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <button
          onClick={() => login("Admin")}
          style={{
            ...buttonStyle,
            backgroundColor: "#3498db",
            color: "white"
          }}
        >
          Login as Admin
        </button>

        <button
          onClick={() => login("Viewer")}
          style={{
            ...buttonStyle,
            backgroundColor: "#2ecc71",
            color: "white"
          }}
        >
          Login as Viewer
        </button>
      </div>
    </div>
  );
}

export default App;