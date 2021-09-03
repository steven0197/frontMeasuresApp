import React, { useState } from "react";
import { makeStyles, Grid, Divider , Grow} from "@material-ui/core";
import InstructionsCard from "./InstructionsCard";
import imageFront from "../../assets/images/InstruccionesFrente.jpeg";
import imageSide from "../../assets/images/InstruccionesLado.jpeg";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
    paddingTop: "20%",
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
  card2: {
    margin: "auto",
    marginBottom: 10,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  content: {
    textAlign: "left",
  },
  media: {
    paddingTop: "150%",
  },
}));

function Instructions() {
  const classes = useStyles();

  const labelFront = "Ejemplo de imágen de Frente";
  const labelSide = "Ejemplo de imágen de Lado";
  return (
    <div className={classes.leftSpace}>
      <Grow timeout={700} in={true}>
      <Card className={classes.card2}>
        <CardContent className={classes.content}>
        <Typography variant={"h2"} gutterBottom align="center"> Instrucciones de Uso  </Typography>
          <Typography color="black" variant={"h6"} gutterBottom align="center">
            Para probar nuestro modelo, debes cargar dos imágenes, una de frente
            y otra de lado, siguiendo las especificaciones presentadas en las
            imágenes de abajo. Es preferible que lo hagas con un fondo constante
            (una pared de un mismo color) y sin obstaculos que te tapen el
            cuerpo. Trata de usar ropa que no sea holgada, es decir que no cubra
            la forma real de tu cuerpo. Posterior a subir las imágenes debes
            escribir tu estatura en cm (ejemplo, mido 1.70 m, por lo que pongo
            170 en el campo de texto). Por ultimo pulsa el botón quea aparece y
            espera a que el sistema haga el cálculo y te devuelva tus medidas.
          </Typography>
        </CardContent>
      </Card>
      </Grow>



      <Grid container spacing={8}>
        <Grid item xs={6}>
          <InstructionsCard img={imageFront} label={labelFront} />
        </Grid>
        <Grid item xs={6}>
          <InstructionsCard img={imageSide} label={labelSide} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Instructions;
