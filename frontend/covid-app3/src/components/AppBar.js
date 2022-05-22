import AppBarMUI from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import Badge from '@material-ui/core/Badge';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";




const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {

        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },


});

class AppBar extends Component {

    state = {
        isDrawerOpen: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            isDrawerOpen: open,
        });
    };

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBarMUI position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <Link to={"/"} style={{ all: "unset" }}>{"Covid App"}</Link>
                        </Typography>

                    </Toolbar>
                </AppBarMUI>
                <TemporaryDrawer
                    isDrawerOpen={this.state.isDrawerOpen}
                    toggleDrawer={this.toggleDrawer}
                />
            </div>
        );
    }
}

export default withStyles(styles)(AppBar);