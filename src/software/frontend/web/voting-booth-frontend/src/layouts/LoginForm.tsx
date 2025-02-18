//@ts-nocheck
import React, {useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import {LoginProgressLoader} from "../components/login/LoginProgressLaoder";
import LoginTextInput, {LoginPhoneInput} from "../components/login/LoginTextInput";
import PasswordInput from "../components/login/PasswordInput";
import {useDispatch} from "react-redux";
import {signUp} from "../redux/auth/auth.reducer";
import {useHistory, useLocation} from "react-router-dom";

const LoginForm = ({displayMode}) => {
    const [mode, setMode] = useState(displayMode);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    let location = useLocation();
    let {from} = location.state || {from: {pathname: "/"}};
    const history = useHistory();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [regNo, setRegNo] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [name, setName] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        if (mode === 'login') {
            //login code
        } else {
            dispatch(signUp(regNo, email, name, mobileNo, password1, password2, history, from, setLoading))
        }
    };

    return (
        <>
            {loading ? <LoginProgressLoader message={"Logging in..."}/> : <></>}

            <ToastContainer/>

            {
                mode === 'login' ?
                    (
                        <>
                            <form className={"login-form"}>
                                <h2>Sign in</h2>

                                <LoginTextInput
                                    label={"Username"}
                                    initialValue={""}
                                    onChange={(e) => setUser(e.target.value)}
                                    focus={true}
                                />

                                <PasswordInput
                                    label={"Password"}
                                    initialValue={""}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className={"nav-button login-btn"}
                                    onClick={onSubmit}
                                    style={{
                                        background: `linear-gradient(to bottom, #006090, #004370)`,
                                    }}
                                >
                                    Continue &rarr;
                                </button>

                                <a href={"#"} className={"forgot-password"}>
                                    Forgot password?
                                </a>

                                <a className={"forgot-password"} onClick={e => setMode('sign-up')}>
                                    Don't have an account? Create one.
                                </a>
                            </form>
                        </>
                    )
                    : (
                        <>
                            <form className={"login-form"}>
                                <h2>Sign up</h2>

                                <LoginTextInput
                                    label={"Reg number"}
                                    initialValue={""}
                                    onChange={(e) => setRegNo(e.target.value)}
                                />

                                <LoginTextInput
                                    type={'email'}
                                    label={"Email"}
                                    initialValue={""}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <LoginTextInput
                                    label={"Name"}
                                    initialValue={""}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <LoginPhoneInput
                                    label={"Phone number e.g +2547...."}
                                    initialValue={""}
                                    onChange={(e) => setMobileNo("+254" + e.target.value)}
                                />

                                <PasswordInput
                                    label={"Password"}
                                    initialValue={""}
                                    onChange={(e) => setPassword1(e.target.value)}
                                />

                                <PasswordInput
                                    label={"Repeat password"}
                                    initialValue={""}
                                    onChange={(e) => setPassword2(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className={"nav-button login-btn"}
                                    onClick={onSubmit}
                                    style={{
                                        background: `linear-gradient(to bottom, #006090, #004370)`,
                                    }}
                                >
                                    Continue &rarr;
                                </button>

                                <a href={"#"} className={"forgot-password"}>
                                    Forgot password?
                                </a>

                                <a className={"forgot-password"} onClick={e => setMode('login')}>
                                    Already have an account? Login &rarr;
                                </a>
                            </form>
                        </>
                    )
            }
        </>
    );
};

export default LoginForm;

