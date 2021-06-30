import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import Email from "@material-ui/icons/Email";
// core components*
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Select } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from "classnames";
import FormControl from '@material-ui/core/FormControl';
import PropTypes from "prop-types";
const useStyles = makeStyles(styles);

export default function DialogForm({data,setData,open,setOpen}) {
      {/* prettier-ignore */}
  const classes = useStyles();
  const[prix,setPrix]=useState(null)
  const[quantite,setQuantite]=useState(null)
  const[produit,setProduit]=useState(null)
  console.log('priix',prix)
    const inputClasses = classNames({
    [classes.input]: true,
  });
  const handleSubmit=()=>{
    setData([...data, {produit,prix,quantite}])
    setOpen(false)
  }
  console.log('dataaa',produit)
  useEffect(()=>{
 setPrix(null)
 setQuantite(null)
 setProduit(null)
  },[open])
  return (
            <Dialog aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Ajout d un produit</DialogTitle>
                <DialogContent>
                    <FormControl style={{width:"100%"}}>
                    <InputLabel      
                      style={{ 
                        fontWeight: "400",
                        fontSize: "14px",}}
                    >Produit
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={produit}
                       classes={{
                       input: inputClasses,
          
                     }}
                      onChange={(event)=>{setProduit(event.target.value)}}
                    >
                      <MenuItem value={"Pomme"}>Pomme</MenuItem>
                      <MenuItem value={"Tomate"}>Tomate</MenuItem>
                      <MenuItem value={"Orange"}>Orange</MenuItem>
                    </Select>
                  </FormControl>
                       <CustomInput
                      labelText="Quantité en Kg"
                      onChange={(event)=>setQuantite(event.target.value)}
                      value={quantite}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                       <CustomInput
                      labelText="Prix par Kg"
                      onChange={(event)=>setPrix(event.target.value)}
                      value={prix}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                     </DialogContent>
                    <DialogActions>
                <Button autoFocus onClick={()=>setOpen(false)} color="primary">
                  Annuler
                </Button>
                <Button onClick={handleSubmit} color="primary">
                  Ajouter
                </Button>
              </DialogActions>
              </Dialog>
  );
}
DialogForm.prototype={
      data:PropTypes.any,
        setData:PropTypes.any,
          open:PropTypes.any,
            setOpen:PropTypes.any,
}