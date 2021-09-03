import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Button,
  Box,
  TextField,
  Dialog,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

//import ejemploMedidas from "../../data/ejemploMedidas.json";
import animacionCargaApp from "../../assets/images/animacionCargaApp.gif";
import axios from "axios";
import AboutUsCard from "./AboutUsCard";

const useStyles = makeStyles((theme) => ({
  leftSpace: {
    alignContent: "flex-end",
    margin: 50,
    // border: "1px solid black",
    width: "90%",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
  },

  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
}));

const AboutUsPage = () => {
  const Julian = {
    name: "Julián Pérez Hincapié",
    linkdin:
      "https://www.linkedin.com/in/juli%C3%A1n-david-p%C3%A9rez-hincapi%C3%A9-04b121167/",
    description: "Especialista en Inteligencia Artificial, automatización de procesos, entusiasta por facilitar la manera en que las personas interactuan con el mundo.",
    email: "jdph852@gmail.com",
  };

  const Steven = {
    name: "Steven Salgado González",
    description:
      "Ingeniero en Analítica, conocimiento avanzado en desarrollo web y analítica de datos, entusiasta por la Inteligencia Artificial y la creación de modelos de Machine Learning que faciliten el trabajo humano",
    linkdin: "https://www.linkedin.com/in/stevensalgadogonzalez/",
    email: "stevensalgado0197@gmail.com",
  };

  return (
    <div>
      <AboutUsCard user={Julian} /> 
      <AboutUsCard user={Steven} />
    </div>
  );
};

export default AboutUsPage;
