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
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";

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
  const classes = useStyles();

  const transLateObject = {
    "antebrazo": "Antebrazo",
    "brazo": "Brazo",
    "cadera": "Cadera",
    "cintura": "Cintura",
    "espalda": "Espalda",
    "estatura": "Estatura",
    "hombro": "Hombro",
    "muneca": "Muñeca",
    "muslo": "Muslo",
    "pantorrilla": "Pantorrila",
    "pecho": "Pecho",
    "tobillo": "Tobillo"
  }

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
      <TableContainer>
        <Table stickyHeader >
          <TableHead>
            <TableRow>
              <StyledTableCell>Parte del cuerpo</StyledTableCell>
              <StyledTableCell>Medida en Centímetros</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ListMedidas &&
              ListMedidas.map((item) => {
                return (
                  <TableRow key={item.name}>
                    <TableCell align='center'>{ transLateObject[item.name]  }</TableCell>
                    <TableCell align='center'>{item.measure}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      </DialogContent>
    </div>
  );
}

export default TableMaterial;
