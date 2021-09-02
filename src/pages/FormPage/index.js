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
import CardForm from "./CardForm";
import TableMaterial from "./TableMaterial.js";
//import ejemploMedidas from "../../data/ejemploMedidas.json";
import animacionCargaApp from "../../assets/images/animacionCargaApp.gif";
import axios from "axios";

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

function FormPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openGif, setopenGif] = useState(false);
  const [dataMeasures, setdataMeasures] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const labelFront = "Imagen de Frente";
  const labelSide = "Imagen de Lado";

  const [imageFront, setImageFront] = useState(null);
  const [imageFrontFile, setimageFrontFile] = useState(null);
  const [imageSide, setImageSide] = useState(null);
  const [imageSideFile, setimageSideFile] = useState(null);
  const [height, setheight] = useState("");

  const onImageChangeFront = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageFront(URL.createObjectURL(event.target.files[0]));
      setimageFrontFile(event.target.files[0]);
    }
  };

  const onImageChangeSide = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageSide(URL.createObjectURL(event.target.files[0]));
      setimageSideFile(event.target.files[0]);
    }
  };

  const getInfoMeasures = () => {
    setopenGif(true);

    let formData = new FormData();
    formData.append(`file`, imageFrontFile);
    formData.append(`file2`, imageSideFile);
    formData.append(`estatura`, height.toString());

    axios({
      method: "post",
      //url: `https://measurebody.azurewebsites.net/predict`,
      url: `http://localhost:5000/predict`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
     
      },
    })
      .then((response) => {
        console.log(response);

        setdataMeasures(response.data)
        setOpen(true)
        setopenGif(false);
      })
      .catch((err) => {
        console.log(err);
        alert("No se pudo realizar la petición de predicción al servidor");
        setopenGif(false);
      });
  };

  return (
    <FormControl
      className={classes.leftSpace}
      component="fieldset"
      justifyContent="space-around"
    >
      {imageFront && imageSide && (
        <Box display="flex" margin={5} justifyContent="center">
          <Box marginRight={5} justifyContent="center">
            <TextField
              color={height === "" ? "secondary" : "primary"}
              type="number"
              //helperText="Digite la estatura en Centímetros por favor "
              variant="outlined"
              label="Estatura en Centímetros"
              InputLabelProps={{
                style: { color: height !== "" ? "#29b6f6" : "#e33014" },
              }}
              value={height}
              onChange={(event) => setheight(event.target.value)}
            />
          </Box>
          {height !== "" && (
            <Box marginTop={1} justifyContent="center">
              <Button variant="outlined" size="large" onClick={getInfoMeasures}>
                Enviar Info
              </Button>
            </Box>
          )}
        </Box>
      )}
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <CardForm
            img={imageFront}
            handleImg={onImageChangeFront}
            label={labelFront}
          />
        </Grid>
        <Grid item xs={6}>
          <CardForm
            img={imageSide}
            handleImg={onImageChangeSide}
            label={labelSide}
          />
        </Grid>
      </Grid>

      <Dialog open={open} aria-labelledby="Dialogo de tabla" fullWidth={true}>
        <TableMaterial handleClose={handleClose} data={dataMeasures} />
      </Dialog>

      <Dialog
        open={openGif}
        aria-labelledby="Dialogo de tabla"
        fullWidth={true}
      >
        <img src={animacionCargaApp} alt="loading..." />
      </Dialog>
    </FormControl>
  );
}

export default FormPage;
