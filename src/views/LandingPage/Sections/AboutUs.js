import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//  import InfoArea from "components/InfoArea/InfoArea.js";
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import InfoAreaWithImg from "components/InfoArea/InfoAreaWithImg";
import Visibilite from "assets/img/visibilite.jpg"
import Decision from "assets/img/decision.png"
import Encourager from "assets/img/encourager.jpg"
import Button from "components/CustomButtons/Button.js";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import InfoArea from "components/InfoArea/InfoArea";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SectionDownload from "../../Components/Sections/SectionDownload";
import { useHistory } from "react-router";
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.section} id="acceuil" >
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>A propos de nous!</h2>
          <h4 className={classes.description}>Qui sommes nous?</h4>
          <h5 className={classes.description}>
           Nous sommes un groupe d{"'"}élèves ingénieurs de l{"'"}école Centrale Casablanca
           qui vous accompagne dans la commercialisation de vos produits et à mettre 
           à votre disposition un outil d{"'"}aide à la prise de décision
          </h5>
          <h4 className={classes.description}>Que fait notre site?</h4>

        </GridItem>
      </GridContainer>
      <div id="div_id">
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoAreaWithImg
              title="Augmenter votre visibilité"
              description="Trouvez de nouveaux débouchés pour vis produits à un meilleur prix "
              img={Visibilite}
            //   iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoAreaWithImg
              title="Prendre la meilleure décision"
              description="Découvrir de nouvelles cultures rentables à dévzlopper en fonction des ressources dont vous dispodez"
              img={Decision}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoAreaWithImg
              title="Encourager les produit lacaux"
              description="Achetez des produits locaux au meilleur prix directement à partir du producteur"
              img={Encourager}
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} >Nos services</h2>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              size="lg"
              target="_blank"
            >
             Investissez dans {"'"}agriculture
            </Button>
            <Button
              color="rose"
              size="lg"
              target="_blank"
              onClick={()=>{history.push("/login-page")}}
            >
              
              Vendez vos produits
            </Button>
            <Button
              color="warning"
              size="lg"
              target="_blank"
              onClick={()=>{history.push("/consultProduct-page")}}

            >
             Parcourez nos produits
            </Button>
          </GridItem>

        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contactez-nous</h2>

        </GridItem>
      </GridContainer>
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Email ici"
              description="admin@agriweb.com "
              icon={EmailIcon}
              iconColor="success"

              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Appelez ici"
              description="06 13 40 22 20"
              icon={PhoneIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Visitez ici"
              description="Ville verte Bouscoura"
              icon={LocationOnIcon}
              vertical
             iconColor="danger"

            />
          </GridItem>
        </GridContainer>
        <SectionDownload/>

        
      </div>
     
    </div>
  );
}
