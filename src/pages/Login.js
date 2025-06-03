import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Background from "../assets/background.png";
import Logo from "../assets/gip_logo.png";
import Styles from "../styles/login.module.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempt login with:", form.email, form.password);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      console.log("Login successful");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed: " + err.message);
    }
  };


  return (
    <section className={Styles.container}>
      <img
        src={Background}
        alt="background"
        className={Styles.background}
      />

      <div className={Styles.formBox}>
        <h1 className={Styles.titleMain}>GIP Database</h1>
        <img src={Logo} alt="GIP Logo" className={Styles.logo} />


        <form onSubmit={handleSubmit} className={Styles.form}>
          <div className={Styles.inputGroup}>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={Styles.input}
              placeholder=" "  // <-- Important to keep space for :placeholder-shown CSS
            />
            <label htmlFor="email" className={Styles.floatingLabel}>Email</label>
          </div>

          <div className={Styles.inputGroup}>
            <input
              id="password"
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={Styles.input}
              placeholder=" "
            />
            <label htmlFor="password" className={Styles.floatingLabel}>Password</label>
          </div>

          <button
            type="submit"
            className={Styles.button}
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
