import { ChangeEvent, FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

import { useLoginMutation } from "../../services/authApi";
import { setCredentials } from "../../store/auth/authSlice";

const Login: React.FunctionComponent<any> = (): JSX.Element => {
  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ] = useState<string>("");

  const [password, setPassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ] = useState<string>("");

  const dispatch: Dispatch<UnknownAction> = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const [login] = useLoginMutation();

  const handleSubmit: (evt: FormEvent<HTMLFormElement>) => void = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    await login({ email, password })
      .unwrap()
      .then((userData: any) => {
        dispatch(setCredentials({ email, ...userData }));
        setEmail("");
        setPassword("");
        navigate("/profile");
      })
      .catch(() => alert("Invalid email or password"));
  };

  const handleEmailChange: (evt: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setEmail(e.currentTarget.value);
  };
  const handlePwdChange: (evt: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <h2 className="align-self-center fs-2 text-capitalize login-text">
        Login
      </h2>
      <Form className="align-self-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="fw-normal">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Use email as 'john@mail.com'"
            name="name"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="fw-normal">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Use email as 'changeme'"
            name="password"
            required
            value={password}
            onChange={handlePwdChange}
          />
        </Form.Group>
        <Button variant="primary" className="align-self-center" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
