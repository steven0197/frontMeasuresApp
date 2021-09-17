import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Box,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import ejemploMedidas from "../../../data/ejemploMedidas.json";

const StyledTableCell = withStyles(() => ({
  head: {
    color: "white",
    background: "rgb(148, 180, 58)",
    textAlign: "center",
  },
  body: {
    fontSize: 14,
  },
  blue: {
    color: "blue",
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
}));

function TableMaterial({ data, handleClose }) {
  const [ListMedidas, setListMedidas] = useState(null);
  const [showInput, setshowInput] = useState(false);
  const [realMeasures, setrealMeasures] = useState({
    antebrazo: NaN,
    brazo: NaN,
    cadera: NaN,
    cintura: NaN,
    espalda: NaN,
    estatura: NaN,
    hombro: NaN,
    muneca: NaN,
    muslo: NaN,
    pantorrilla: NaN,
    pecho: NaN,
    tobillo: NaN,
  });

  const changeRealMeasure = (key, value) => {
    setrealMeasures((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  const classes = useStyles();

  const transLateObject = {
    antebrazo: "Antebrazo",
    brazo: "Brazo",
    cadera: "Cadera",
    cintura: "Cintura",
    espalda: "Espalda",
    estatura: "Estatura",
    hombro: "Hombro",
    muneca: "Muñeca",
    muslo: "Muslo",
    pantorrilla: "Pantorrila",
    pecho: "Pecho",
    tobillo: "Tobillo",
  };

  useEffect(() => {
    let list = [];

    for (const key in data) {
      const temp = {
        name: key,
        measure: ejemploMedidas[key].toFixed(2),
      };

      list.push(temp);
    }

    setListMedidas(list);
  }, [data]);

  const sendMeasures = () => {
    for (const key in realMeasures) {
      if (isNaN(realMeasures[key])) {
        return alert("Debe completar todos los valores");
      }
    }
    return alert("Si se envía");
  };

  return (
    <div className={classes.root}>
      <DialogTitle id="titulo">
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <h3>Tabla de Resultados</h3>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Box display="flex" justifyContent="center">
          <Typography>
            ¿Quieres ayudarnos a mejorar? Envíanos tus medidas reales
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button color="secondary" onClick={() => setshowInput(!showInput)}>
            Pulsa Aqui para ayudarnos
          </Button>
        </Box>

        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>Parte del cuerpo</StyledTableCell>
                <StyledTableCell>Medida en Centímetros</StyledTableCell>
                {showInput && <StyledTableCell>Tu medida real</StyledTableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {ListMedidas &&
                ListMedidas.map((item) => {
                  return (
                    <TableRow key={item.name}>
                      <TableCell align="center">
                        {transLateObject[item.name]}
                      </TableCell>
                      <TableCell align="center">{item.measure}</TableCell>
                      {showInput && (
                        <TableCell align="center">
                          <TextField
                            type="number"
                            value={realMeasures[item.name]}
                            onChange={(event) =>
                              changeRealMeasure(
                                item.name,
                                parseFloat(event.target.value)
                              )
                            }
                          />
                          Cm
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        {showInput && (
          <Box display="flex" justifyContent="center">
            <Button color="secondary" onClick={() => sendMeasures()}>
              Enviar Medidas
            </Button>
          </Box>
        )}
      </DialogContent>
    </div>
  );
}

export default TableMaterial;
