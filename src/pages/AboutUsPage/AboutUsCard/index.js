import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider, Grow } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    alignContent: "flex-end",
    margin: 50,
    // border: "1px solid black",
    width: "90%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 28,
    margin: 10,
  },
  pos: {
    marginBottom: 12,
  },
  description: {
    margin: 10,
  },
  email: {
    margin: 10,
  },
  buttonDiv: {
    margin: 10
  }
});

export default function AboutUsCard({ user }) {
  const classes = useStyles();


  return (
    <Grow in={true} timeout={700}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          variant="h1"
          component="h2"
          className={classes.title}
          gutterBottom
        >
          {user.name}
        </Typography>
        <Divider />
        <Typography className={classes.description} variant="h5" component="h2">
          {user.description}
        </Typography>

        <Typography className={classes.email} variant="h5" component="h2">
          Correo: {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.buttonDiv}>
          <a href={user.linkdin} target="_blank" rel="noreferrer">
            <Button variant="outlined" size="small">
              Enlace a Linkdin
            </Button>
          </a>
        </div>
      </CardActions>
    </Card>
    </Grow>
  );
}
