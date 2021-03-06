import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import DropDown from "components/CustomInput/DropDownList";

import PhoneIcon from '@material-ui/icons/Phone';
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import image from "assets/img/loginPic.jpg";
import { useHistory } from "react-router";
import LogoWeb from "assets/img/logosite.PNG"

import LocationOnIcon from '@material-ui/icons/LocationOn';
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [login, setLogin]=React.useState(false)
  const history = useHistory()
  setTimeout(function () {
    setCardAnimation("");
  }, 200);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        {...rest}
      />
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
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="success" className={classes.cardHeader}>
                    <h4>Login</h4>
                    {/* <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div> */}
                  </CardHeader>
                  <p className={classes.divider}>
                  <img
                    src={LogoWeb}
                     />
                  </p>
                  <CardBody>
                 { login &&  <CustomInput
                      labelText="Nom et pr??nom..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />}
                    <CustomInput
                      labelText="CIN..."
                      id="cin"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <RecentActorsIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                   { login &&  
                    <>
                   <CustomInput
                      labelText="T??l??phone..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "phone",
                        endAdornment: (
                          <InputAdornment position="end">
                            <PhoneIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Adresse..."
                      id="adresse"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "adresse",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                      <DropDown
                      labelText="Region"
                      id="region"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                      </>
                    }
                    <CustomInput
                      labelText="mot de passe"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    { login &&     <CustomInput
                      labelText="Confirmer mot de passe "
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="success" size="lg" onClick={()=>history.push("/product-page") } >
                      {login ? "M'inscrire": "Connexion"}
                    </Button>
                  {!login &&  <Button simple color="success" size="lg" onClick={()=>setLogin(true)}>
                      {"Cr??er un compte"}
                    </Button>} 
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
