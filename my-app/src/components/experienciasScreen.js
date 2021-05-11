import React , { useState } from 'react'
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, Container, BoxUpload, ImagePreview } from "../style";
import FolderIcon from './assets/folder_icon_transparent.png';
import CloseIcon from "./assets/CloseIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Experiencias() {
    const classes = useStyles();

    const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

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
                <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                    Publicar
                </Button>
              </Grid>
        </Grid>
        </form>
    </Grid>
      
    </div>
      
     
  );
}

export default Experiencias
