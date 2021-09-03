import React, { useRef } from "react";
import { makeStyles, Button, Box, Grow } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { CardActions } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  buttonDiv: {
    alignItems: "center",
  },
  leftSpace: {
    alignContent: "flex-end",
    margin: 50,
  },
  card: {
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "125%",
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
  uploadFile: {
    marginTop: 10,
    marginRight: 20,
  },
}));

function InstructionsCard({ img, label }) {
  const classes = useStyles();

  return (
    <Grow timeout={700} in={true}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <div>
            <Typography variant={"h6"} gutterBottom align="center">
              {label}
            </Typography>
            <CardMedia className={classes.media} image={img} />
            <Divider className={classes.divider} light />

            <Divider className={classes.divider} light />
          </div>
        </CardContent>
      </Card>
    </Grow>
  );
}

export default InstructionsCard;
