import axios from "axios";
import Button from "components/Form.tsx/Button/Button";
import PasswordInput from "components/Form.tsx/Input/PasswordInput";
import Input from "components/Form.tsx/Input/TextInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "utils/utils";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie() != "") navigate("/");
  }, []);

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const clickHandler = () => {};

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const makeLogin = async () => {
      try {
        const request = await axios({
          method: "post",
          url: "http://localhost:8080/login",
          data: {
            email: email,
            password: password,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        document.cookie =
          "token=" + request.headers.authorization?.split("Bearer ")[1];
        setIsLoginFailed(false);

        navigate("/");
      } catch (error) {
        setIsLoginFailed(true);
      }
    };
    makeLogin();
  };

  return isLoginFailed ? (
    <>
      <h2>Email or password wrong. Please, use correct data to log in.</h2>
      <form onSubmit={submitHandler}>
        <Input
          name={"Email"}
          text={"lorem@ipsum.com"}
          changeHandler={emailHandler}
        />
        <PasswordInput
          name={"Password"}
          text={"********"}
          changeHandler={passwordHandler}
        />
        <button>Login</button>
      </form>
      <Button text={"Get data"} clickHandler={clickHandler} />
    </>
  ) : (
    <>
      <form onSubmit={submitHandler}>
        <Input
          name={"Email"}
          text={"lorem@ipsum.com"}
          changeHandler={emailHandler}
        />
        <Input
          name={"Password"}
          text={"********"}
          changeHandler={passwordHandler}
        />
        <button>Login</button>
      </form>
      <Button text={"Get data"} clickHandler={clickHandler} />
    </>
  );
};

export default Login;
