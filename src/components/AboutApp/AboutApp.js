import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ContactsIcon from "@material-ui/icons/Contacts";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LinkIcon from "@material-ui/icons/Link";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    position: "fixed",
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

function AboutApp() {
  const classes = useStyles();

  const theme = useTheme();

  const aboutMe = () => {
    handleClickOpen();
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div onClick={aboutMe}>
        <Zoom
          key="primary"
          in
          timeout={transitionDuration}
          style={{
            transitionDelay: `${transitionDuration.exit}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label="Add" className={classes.fab} color="secondary">
            <AccountCircleIcon />
          </Fab>
        </Zoom>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"About App"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ExpansionPanel
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>About Me</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemIcon>
                        <ContactsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Hari Krishna Anem" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <PhoneAndroidIcon />
                      </ListItemIcon>
                      <ListItemText primary="+91 9885699666" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <AlternateEmailIcon />
                      </ListItemIcon>
                      <ListItemText primary="anemharikrishna@gmail.com" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <LinkIcon />
                      </ListItemIcon>
                      <a
                        href="https://harikrishna.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItemText primary="Portfolio" />
                      </a>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <LinkIcon />
                      </ListItemIcon>
                      <a
                        href="https://harikrishna.hashnode.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItemText primary="Blog" />
                      </a>
                    </ListItem>
                  </List>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>Packages Used in React</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemIcon>
                        <CardGiftcardIcon />
                      </ListItemIcon>
                      <ListItemText primary="BootStrap" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CardGiftcardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Material UI" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CardGiftcardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Formik" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CardGiftcardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Moment" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CardGiftcardIcon />
                      </ListItemIcon>
                      <ListItemText primary="React Redux, Redux Thunk" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CardGiftcardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Axios" />
                    </ListItem>
                  </List>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default AboutApp;
