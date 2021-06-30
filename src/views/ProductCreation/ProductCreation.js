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
//import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Select } from "@material-ui/core";
// import CustomInput from "components/CustomInput/CustomInput";
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import classNames from "classnames";
// import FormControl from '@material-ui/core/FormControl';
import EditIcon from '@material-ui/icons/Edit';
import {IconButton} from  "@material-ui/core"
import DialogForm from "./dialog"
import DeleteIcon from '@material-ui/icons/Delete';
const columns = [{
    dataField: 'produit',
    text: 'Produit'
  }, {
    dataField: 'quantite',
    text: 'Quantité'
  }, {
    dataField: 'prix',
    text: 'Prix'
  },
  {
    dataField: 'Actions',
    text: 'Actions',
    formatter: function OrderItems (){
            return (
              <>
              <EditIcon color="primary"/>
              <DeleteIcon color='error'/>
              </>
            )
      }
  }
];
const useStyles = makeStyles(styles);

export default function LoginPage() {
    {/* prettier-ignore */}
  const classes = useStyles();
  const[open , setOpen]=useState(false)
  // const[prix,setPrix]=useState(null)
  // const[quantite,setQuantite]=useState(null)
  // const[produit,setProduit]=useState(null)
  // console.log('priix',prix)
  const [data,setData]=useState([])
  // const handleSubmit=()=>{
  //   setData([...data, {produit,prix,quantite}])
  //   setOpen(false)
  // }
  console.log('dataaa',data)
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
                <IconButton size="medium" onClick={()=>setOpen(true)}> <AddBoxIcon fontSize="large" color="secondary" /> </IconButton >
                </GridItem>
                <BootstrapTable keyField='id' data={data } columns={ columns } />
       
              </Card>

            </GridItem>
           <DialogForm open ={open} setOpen={setOpen} data={data} setData={setData}/>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
