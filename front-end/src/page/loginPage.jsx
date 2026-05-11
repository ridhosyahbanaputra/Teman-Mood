import LoginInput from "../component/loginInput";

function LoginPage({ onLoginHandle }) {
    const login = (inputData) => {
        console.log("tes", inputData)
        alert(`login berhasil ${inputData.email}`)

        onLoginHandle(inputData.email, inputData.password);
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>
                <LoginInput login={login} />
            </div>
        </div>
    );
}

export default LoginPage;