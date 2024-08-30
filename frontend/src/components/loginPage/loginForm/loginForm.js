import "./loginForm.css";

export default function LoginForm() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-card-inner">
          <div className="login-card-front">
            <div className="login-title">Login</div>
            <form className="login-form" action="">
              <label className="login-label">Police ID:</label>
              <input
                className="login-input"
                name="policeId"
                placeholder="XXXXXXXXXXX"
                type="string"
              />
              <label className="login-label">Password:</label>
              <input
                className="login-input"
                name="password"
                placeholder="XXXXXXXXXXX"
                type="password"
              />
              <button className="login-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
