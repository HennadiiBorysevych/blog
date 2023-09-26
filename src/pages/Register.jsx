import { gql } from "@apollo/client";
import React, { useState } from "react";
import { Form } from "semantic-ui-react";


const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const onSubmit = () => {};

  return (
    <Form onSubmit={onSubmit} noValidate>
      <h1>Register</h1>
      <Form.Input
        label="Username"
        placeholder="Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        name="username"
      />
      <Form.Input
        label="email"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="username"
      />
      <Form.Input
        label="password"
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="username"
      />
      <Form.Input
        label="confirmPassword"
        placeholder="confirmPassword..."
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
        name="username"
      />
    </Form>
  );
};


export default Register;
