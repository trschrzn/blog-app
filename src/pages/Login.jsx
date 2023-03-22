import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContex";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Login = () => {
    const [isLogIn, setlogIn] = useState(true);
    const fieldRef = useRef(null);
    const buttonRef = useRef(null);

    const isSignUp = usePrevious(isLogIn);

    const [inputs, setInputs] = useState({
        newUsername: "",
        email: "",
        newPassword: "",
        fullname: "",
        username: "",
        password: "",
      });
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();

    //   const { login } = useContext(AuthContext);
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          navigate("/login");
        } catch (err) {
          setError(err.response.data);
        }
      };

      const handleLogin = async (e) => {
        e.preventDefault();
        try {
        // await login(inputs)
        navigate("/");
        } catch (err) {
        setError(err.response.data);
        }
      };

    const viewLogIn = (
        <section className="logContainer">

            <div className="formItem" id="log-in">
                <div className="box slide-left"></div>
                <form 
                action="" 
                method="get" 
                className="slide-left">
                    <label htmlFor="username">Nick/login: </label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="nazwa użytkownika"
                    ref={fieldRef}
                    onChange={handleChange} />
        
                    <label htmlFor="password">Hasło: </label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="hasło"
                    onChange={handleChange} />

                    <button 
                    id="logIn"
                    onClick={handleLogin}>
                        Zaloguj
                    </button>
                </form>
            </div>
                
            <div className="formItem" id="sign-up">
                <div className="infoContainer">
                    <span>Nie masz jeszcze konta?</span>
                    <button
                        onClick={() => setlogIn(false)} 
                        ref={buttonRef}>
                            zarejestruj się
                    </button>
                </div>
            </div>
        </section>
    );
    
    const viewSignUp = (
        <section className="logContainer">

            <div className="formItem" id="log-in">
                <div className="box slide slide-right"></div>
                <div className="infoContainer">
                    <span>Masz już konto?</span>
                     <button 
                        onClick={() => setlogIn(true)}
                        ref={buttonRef}>
                            zaloguj się
                    </button>
                </div>
            </div>
            
            <div className="formItem" id="sign-up">

                <form 
                action="" 
                className="slide-right"
                method="get">
                    <label htmlFor="email">Podaj swój e-mail: </label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="e-mail"
                    onChange={handleChange} />
        
                    <label htmlFor="newUsername">Podaj swój nick/login: </label>
                    <input 
                    type="text" 
                    name="newUsername" 
                    id="newUsername" 
                    placeholder="nazwa użytkownika"
                    onChange={handleChange} />
        
                    <label htmlFor="fullname">Podaj imię i/lub nazwisko: </label>
                    <input 
                    type="text" 
                    name="fullname" 
                    id="fullname" 
                    placeholder="imię i/lub nazwisko"
                    onChange={handleChange} />
        
                    <label htmlFor="newPassword">Podaj hasło: </label>
                    <input 
                    type="password" 
                    name="newPassword" 
                    id="newPassword" 
                    placeholder="hasło"
                    onChange={handleChange} />
        
                    <label htmlFor="newPassword2">Powtórz hasło: </label>
                    <input 
                    type="password" 
                    name="newPassword2" 
                    id="newPassword2"  
                    placeholder="powtórz hasło" />

                    <button 
                    id="signUp"
                    onChange={handleSubmit}>
                        Zarejestruj się
                    </button>
                    {err && <p>{err}</p>}
                </form>
            </div>
        </section>
    );

    useEffect(() => {
        if (!isSignUp && isLogIn) {
          fieldRef.current.focus();
        }
        if (isSignUp && !isLogIn) {
          buttonRef.current.focus();
        }
      }, [isSignUp, isLogIn]);

  return (
    <section>
        {isLogIn ? viewLogIn : viewSignUp}
    </section>
  );
}

export default Login;