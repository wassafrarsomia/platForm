import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import friseImage from "assets/img/frises.jpg"


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  const [produit, setProduit]=useState(null)
  const [region, setRegion]=useState(null)

  const [ville, setVille]=useState(null)

  return (
    // <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
        <Grid container justify='center' spacing={1} style={{marginBottom:'3%'}}> 
        <Grid item xs={3}> 
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
                      onChange={(event)=>{setProduit(event.target.value)}}
                    >
                      <MenuItem value={"Fraise"}>Fraise</MenuItem>
                      <MenuItem value={"Tomate"}>Tomate</MenuItem>
                      <MenuItem value={"Orange"}>Orange</MenuItem>
                    </Select>
                  </FormControl>
        </Grid>
        <Grid item xs={3}> 
        <FormControl style={{width:"100%"}}>
                    <InputLabel      
                      style={{ 
                        fontWeight: "400",
                        fontSize: "14px",}}
                    >Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={region}
                      onChange={(event)=>{setRegion(event.target.value)}}
                    >
                      <MenuItem value={"Casablanca-Settat"}>Casablanca-Settat</MenuItem>
                    </Select>
                  </FormControl>
        </Grid>
        <Grid item xs={3}> 
        <FormControl style={{width:"100%"}}>
                    <InputLabel      
                      style={{ 
                        fontWeight: "400",
                        fontSize: "14px",}}
                    >Ville
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={ville}
                      onChange={(event)=>{setVille(event.target.value)}}
                    >
                      <MenuItem value={"Casebanca"}>Casebanca</MenuItem>
                    </Select>
                  </FormControl>
        </Grid>
        </Grid>
      {produit =="Fraise" ?  <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={5}>
            <img
            style={{width:"100%", marginBottom:"5%"}}
                    src={friseImage}
                     />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={7}>
            <p> <strong color="secondary">Nom de produit: </strong> Fraise <br/><br/>
            <strong color="secondary">Quantité: </strong> 200kg <br/><br/>
            <strong color="secondary">Prix par kg: </strong> 10 dh <br/><br/>
            <strong color="secondary">Nom de l agriculteur: </strong> Khadija Bayrouk <br/><br/>
            <strong color="secondary">Numero de téléphone: </strong> 0633449878 <br/><br/>
            <strong color="secondary">Région: </strong> Casablanca-Settat <br/></p> 

            </GridItem>
          </GridContainer>: null } 
        </div>
      {/* </div> */}
    </div>
  );
}
