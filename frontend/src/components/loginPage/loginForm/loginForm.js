import "./loginForm.css";

export default function LoginForm() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-card-inner">
          <div className="login-card-front">
            <div className="login-title">Login</div>
            <form className="login-form" action="">
              <input
                className="login-input"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <input
                className="login-input"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              <button className="login-button">Let's go!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
