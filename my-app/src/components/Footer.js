import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles/";
import Logo from "./assets/LogoBlancoBrillante.png";
const FooterPage = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: "#594DF5",
    },
    title: {
      color: "white",
    },
    title1: {
      color: "white",
      marginLeft: "1rem",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "10vh", padding: "20px" }}
      >
        <div className="offset-md-3">
          <img src={Logo} width="380" height="120" />
        </div>
        <h4 className={classes.title1}>Contacto</h4>
        <ul>
          <li className={classes.title}>
            <a>Teléfono: +54 9 11 5599-6606</a>
          </li>
          <li className={classes.title}>
            <a>Email: TEAyuda@hotmail.com / TEAyuda@gmail.com</a>
          </li>
        </ul>
        <div className={classes.title}>
          <div className="footer-copyright text-center py-3">
            <p>
              {" "}
              {new Date().getFullYear()} Copyright: <a>TEAyuda</a>{" "}
            </p>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default FooterPage;
