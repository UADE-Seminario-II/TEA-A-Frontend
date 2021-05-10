import React from 'react'
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
        <TextField style={{ width: 615 }}
          required
          id="outlined-required"
          label="Titulo"
          variant="outlined"
        />
        </Grid>
        <Grid item xs = {12}>
        <TextField style={{ width: 615 }}
          id="outlined-multiline-static"
          label="Experiencia"
          multiline
          rows={10}
          variant="outlined"
        />
        </Grid>
        
            <Button variant="contained" size="medium" className={classes.margin}>
                Cancelar
            </Button>
            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
            Guardar
            </Button>
        
        </form>
    </Grid>
      
    </div>
      
     
  );
}

export default Experiencias
