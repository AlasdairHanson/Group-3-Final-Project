import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import Header from "./Header";
import LoginCard from "./LoginCard";
const LandingPage = () => {
  return (
    <>
      <Header />
      <LoginCard/>
    </>
  );
};
export default LandingPage;
