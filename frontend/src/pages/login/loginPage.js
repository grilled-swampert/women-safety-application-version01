import LoginForm from "../../components/loginPage/loginForm/loginForm";
import Navbar from "../../components/loginPage/navbar/navbar";

import MainLogo from "../../components/loginPage/photos/mainLogo.svg";

import Footer from "../../components/footer/footer";

import "./loginPage.css";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="login-page-container">
        <LoginForm />
        <img src={MainLogo} alt="Main Logo" />
      </div>
      <Footer />
    </div>
  );
}
