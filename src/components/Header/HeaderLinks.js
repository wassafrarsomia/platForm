/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import WebIcon from '@material-ui/icons/Web';
// @material-ui/icons
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { Apps, CloudDownload } from "@material-ui/icons";
import ContactsIcon from '@material-ui/icons/Contacts';
import Ecc from "assets/img/logo_ecc.jpg";
import LogoWeb from "assets/img/logosite.PNG"
// core components
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import WorkIcon from '@material-ui/icons/Work';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
     <ListItem className={classes.listItem2}>
     <img
          src={LogoWeb}
          className={classes.imgNav}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <WebIcon className={classes.icons} /> Acceuil
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <PeopleAltIcon  className={classes.icons} /> Nos collaborations
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <WorkIcon   className={classes.icons} />Nos services
        </Button>
      
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <PhoneAndroidIcon   className={classes.icons} />Contactez-nous
        </Button>
      
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ContactsIcon   className={classes.icons} />Se connecter
        </Button>
      
      </ListItem>
      <ListItem className={classes.listItem}>
      <img
          src={Ecc}
          className={classes.imgNav}
        />
          
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip> */}
      {/* </ListItem> */}
    </List>
  );
}
