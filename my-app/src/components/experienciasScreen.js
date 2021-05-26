import React, { useState } from "react";
import NavBar from "./NavBar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BoxUpload, ImagePreview } from "../style";
import FolderIcon from "./assets/folder_icon_transparent.png";
import CloseIcon from "./assets/CloseIcon.svg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  },
}));

function Experiencias() {
  const classes = useStyles();

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [valueNew, setValueNew] = useState();
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setIsUploaded(false);
    setValueNew("");
    setOpen(false);
  };

  function handleTitleChange(data) {
    setTitle(data);
  }

  function handleDescriptionChange(data) {
    setDescription(data);
  }

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function handleSubmit(event) {
    console.log("presione publicar");
    let exp = {
      titulo: title,
      comentario: description,
      puntaje: rating,
      usuario: {
        idUsuario: 1,
      },
      institucion: null,
      profesional: null,
      actividad: {
        id: 5,
      },
    };
    axios
      .post(`https://sip2-backend.herokuapp.com/Experiencias`, exp)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        handleClickOpen();
      });
  }

  return (
    <div>
      <NavBar></NavBar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <h1>Contanos tu experiencia 😁</h1>
          </div>
          <Grid item xs={12}>
            <TextField
              style={{ width: 300 }}
              id="filled-read-only-input"
              label="Nombre y Apellido"
              defaultValue="Roberto Gomez"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              style={{ width: 300 }}
              id="filled-read-only-input"
              label="Especialidad"
              defaultValue="Psicólogo"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              style={{ width: 300 }}
              id="filled-read-only-input"
              label="Direccion"
              defaultValue="Avenida Las Heras 225"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: 930 }}
              required
              id="outlined-required"
              label="Titulo"
              value={valueNew}
              variant="outlined"
              onChange={(event) => handleTitleChange(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: 930 }}
              id="outlined-multiline-static"
              label="Experiencia"
              value={valueNew}
              multiline
              rows={10}
              variant="outlined"
              onChange={(event) => handleDescriptionChange(event.target.value)}
            />
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Typography component="legend">
              De 1 a 5 estrellas, ¿cómo valorarías la experiencia?
            </Typography>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Rating
              name="experiencia-rating"
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              size="large"
            ></Rating>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: "20vh" }}
          >
            <BoxUpload>
              <div className="image-upload">
                {!isUploaded ? (
                  <>
                    <label htmlFor="upload-input">
                      <img
                        src={FolderIcon}
                        draggable={"false"}
                        alt="placeholder"
                        style={{ width: 100, height: 100 }}
                      />
                      <p style={{ color: "#444" }}>Click to upload image</p>
                    </label>

                    <input
                      id="upload-input"
                      type="file"
                      accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                      onChange={handleImageChange}
                    />
                  </>
                ) : (
                  <ImagePreview>
                    <img
                      className="close-icon"
                      src={CloseIcon}
                      alt="CloseIcon"
                      onClick={() => {
                        setIsUploaded(false);
                        setImage(null);
                      }}
                    />
                    {typeFile.includes("video") ? (
                      <video
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        controls
                        autoPlay
                        alt="uploaded-img"
                      />
                    ) : (
                      <img
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        alt="uploaded-img"
                      />
                    )}
                  </ImagePreview>
                )}
              </div>
            </BoxUpload>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: "20vh" }}
          >
            <Grid item xs={2}>
              <Button
                variant="contained"
                size="medium"
                className={classes.margin}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={classes.margin}
                onClick={() => handleSubmit()}
              >
                Publicar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Experiencia Publicada 👍 "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu publicación se realizó con éxito!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Experiencias;
