import React from "react";
import { makeStyles } from "@material-ui/styles/";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
const CartasExperiencia = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: "#594DF5",
    },
    root: {
      minWidth: 275,
      display: "inline-block",
      backgroundColor: "#594DF5",
      color: "white",
      margin: "20px",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
      color: "white",
    },
    title: {
      fontSize: 14,
      color: "white",
    },
    pos: {
      marginBottom: 12,
      color: "white",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      {props.cartas.map((item, index) => (
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              {item.descripcion}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CartasExperiencia;
