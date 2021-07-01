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
//import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Select } from "@material-ui/core";
// import CustomInput from "components/CustomInput/CustomInput";
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import classNames from "classnames";
// import FormControl from '@material-ui/core/FormControl';
import SectionPills from "views/Components/Sections/SectionPills";
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
             <GridItem xs={12} sm={12} md={9}>
              <Card >
                <form className={classes.form}>
                  <CardHeader color="success" className={classes.cardHeader}>
                    <h4>Produits</h4>
                </CardHeader>
                <SectionPills/>
                </form>
              
       
              </Card>

            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
