import useForm from "../hook/useForm";
import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginInput({ login }) {
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });

    const onSubmitHandler = (even) => {
        even.preventDefault()

        login({
            email: form.email,
            password: form.password,
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="input-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={setForm}
                    placeholder="masukkan email"
                />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={setForm}
                    placeholder="masukkan password"
                />
            </div>
            <button type="submit">MASUK</button>

            <p className="login-link">
                Belum punya akun? <Link to={"/register"}>Daftar disini</Link>
            </p>
        </form>

    )
}

export default LoginInput;