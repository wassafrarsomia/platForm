import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import Email from "@material-ui/icons/Email";
// core components*
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/loginPic.jpg";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput";
const columns = [{
    dataField: 'Produit',
    text: 'Produit'
  }, {
    dataField: 'quantite',
    text: 'Quantité'
  }, {
    dataField: 'Prix',
    text: 'Prix'
  },
  {
    dataField: 'Prix',
    text: 'Actions'
  }];
const useStyles = makeStyles(styles);

export default function LoginPage() {
  const classes = useStyles();
  const[open , setOpen]=useState(false)
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
                    <h4>Mes offres</h4>
                </CardHeader>
                </form>
                <GridItem xs={12} sm={12} md={3}>
                <IconButton onClick={()=>setOpen(true)}> <AddBoxIcon color="secondary" /> </IconButton >
                </GridItem>
                <BootstrapTable keyField='id' data={ [] } columns={ columns } />
       
              </Card>

            </GridItem>
            <Dialog aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Ajout d un produit</DialogTitle>
                <DialogContent>
                <CustomInput
                      labelText="Produit"
                      id="cin"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                       <CustomInput
                      labelText="Quantité"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                       <CustomInput
                      labelText="Prix"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                     </DialogContent>
                    <DialogActions>
                <Button autoFocus onClick={()=>setOpen(false)} color="primary">
                  Annuler
                </Button>
                <Button onClick={()=>setOpen(false)} color="primary">
                  Ajouter
                </Button>
              </DialogActions>
              </Dialog>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
