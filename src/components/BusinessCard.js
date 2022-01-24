import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import classes from "./BusinessCard.module.css";

function BusinessCard() {
  return (
    <div className={classes.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default BusinessCard;
