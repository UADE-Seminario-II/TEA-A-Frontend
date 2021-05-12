import React , { useState } from 'react'
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { BoxUpload, ImagePreview } from "../style";
import FolderIcon from './assets/folder_icon_transparent.png';
import CloseIcon from "./assets/CloseIcon.svg";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIconDialog from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
  },
}));

const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIconDialog />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

function Experiencias() {
    const classes = useStyles();

    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


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
    // event.preventDefault();
    console.log("presione publicar");
    const exp = {
        id: 6,
        titulo: "Jugando en el club pruebaM",
        comentario: "Muy buen trato pruebaM!!!",
        puntaje: 4,
        usuario: {
            idUsuario: 1,
            nombre: "qwq",
            apellido: "aas",
            usuario: "sgonzalez",
            password: "qwqw",
            mail: "qqw",
            telefono: "qwqw",
            enable: true,
            nroDocumento: "qw",
            direccion: "qqw",
            localidad: "qqwq",
            provincia: "qwq"
        },
        institucion: null,
        profesional: null,
        actividad: {
            id: 3,
            descripcion: "aaaa",
            latitud: "2",
            longitud: "4",
            localidad: {
                id: 1,
                localidad: "caba"
            }
        }
    };    

    axios.post(`https://sip2-backend.herokuapp.com/Experiencias`, { exp })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  function handleGetProfesionales() {
    console.log("presione obtener profesionales");
    axios.get(`https://sip2-backend.herokuapp.com/Profesionales`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  function handleGetInstituciones() {
    console.log("presione obtener instituciones");
    axios.get(`https://sip2-backend.herokuapp.com/Instituciones`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  function handleGetActividades() {
    console.log("presione obtener actividades");
    axios.get(`https://sip2-backend.herokuapp.com/Profesionales`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        handleClickOpen();
      })
  }

  return (
      
    <div>
      <NavBar></NavBar>
      <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '80vh' }}>
        <form className={classes.root} noValidate autoComplete="off">
        <div>
            <h1>Contanos tu experiencia 😁</h1>
        </div>
        <Grid item xs = {12}>
        <TextField style={{ width: 300 }}
          id="filled-read-only-input"
          label="Institución"
          defaultValue="Instituto AAAA"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField style={{ width: 300 }}
          id="filled-read-only-input"
          label="Lugar"
          defaultValue="Ciudad de Buenos Aires"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField style={{ width: 300 }}
          id="filled-read-only-input"
          label="Otro"
          defaultValue="Pediatría"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        </Grid>
        <Grid item xs = {12}>
        <TextField style={{ width: 930 }}
          required
          id="outlined-required"
          label="Titulo"
          variant="outlined"
        />
        </Grid>
        <Grid item xs = {12}>
        <TextField style={{ width: 930 }}
          id="outlined-multiline-static"
          label="Experiencia"
          multiline
          rows={10}
          variant="outlined"
        />
        </Grid>
        <Grid container
          alignItems="center"
          justify="center"
          style={{ minHeight: '20vh' }}>
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
        <Grid container
          alignItems="center"
          justify="center"
          style={{ minHeight: '20vh' }}>
              <Grid item xs = {2}>
                <Button variant="contained" size="medium" className={classes.margin}>
                    Cancelar
                </Button>
              </Grid>
              <Grid item xs = {2}>
                <Button variant="contained" size="medium" color="primary" className={classes.margin} onClick={() => handleGetActividades()}>
                    Publicar
                </Button>
              </Grid>
        </Grid>
        </form>
    </Grid>
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Experiencia publicada
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Se ha realizado la publicación exitosamente.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      
     
  );
}

export default Experiencias
