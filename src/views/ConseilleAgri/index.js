import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import Email from "@material-ui/icons/Email";
// core components*
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/loginPic.jpg";
import { Grid } from "@material-ui/core";
import fallahImage from  "assets/img/fallah.jpg"
//import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Select } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput";
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import classNames from "classnames";
// import FormControl from '@material-ui/core/FormControl';
// import SectionPills from "views/Components/Sections/SectionPills";
// import DropDown from "components/CustomInput/DropDownList";  
import Button from "components/CustomButtons/Button.js";
const useStyles = makeStyles(styles);

export default function LoginPage() {

    {/* prettier-ignore */}
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
             <GridItem xs={12} sm={12} md={12}>
              <Card >
                <form className={classes.form}>
                  <CardHeader color="success" className={classes.cardHeader}>
                    <h4>Bienvenue sur votre conseille agricole</h4>
                    </CardHeader>
                    <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={5}>
            <img
            style={{width:"60%", marginBottom:"5%" ,marginLeft:"10%"}}
                    src={fallahImage}
                     />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={7}>
            <p></p> 

            </GridItem>
          </GridContainer>
                    <h4 style={{ color: "#999" ,marginLeft:"4%"}}>Que dois-je planter dans mon champ?</h4>
                    <Grid container justify='center' spacing={2} > 
                    
                <Grid item xs={3} > 
                      <CustomInput
                                labelText="Saisir votre région..."
                                id="re"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                />
                </Grid>
        
                    <Grid item xs={2}> 
                    <CustomInput
                                labelText="Saisir le PH..."
                                id="ph"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                />
                    </Grid>
                        <Grid item xs={3}> 
                    <CustomInput
                                labelText="Saisir la température..."
                                id="tem"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                />
                    </Grid>
                        <Grid item xs={3}> 
                    <CustomInput
                                labelText="Saisir la conductivité électrique..."
                                id="ph"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                />
                    </Grid>
                        <Grid item xs={2} style={{marginBottom:"2%"}}> 
                      <Button
                        color="success"
                        size="lg"
                        target="_blank"
                        >
                        Commencer
                        </Button>
                    </Grid>
           
                  </Grid>
                </form>
              
       
              </Card>

            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
