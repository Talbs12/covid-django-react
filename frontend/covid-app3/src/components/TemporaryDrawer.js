import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import HomeIcon from '@material-ui/icons/Home';
import TableChart from '@material-ui/icons/TableChart';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class TemporaryDrawer extends Component {
    render() {

        const { classes } = this.props;
        const style_unset = { all: "unset" };

        const sideList = (
            <div className={classes.list}>
                <List>

                    <NavLink className={"unactivePage"} activeClassName="activePage" exact to="/" style={style_unset}>
                        <ListItem button key={'Home'}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </NavLink>



                    <NavLink className={"unactivePage"} activeClassName="activePage" exact to="/form" style={style_unset}>
                        <ListItem button key={'FormPage'}>
                            <ListItemIcon><FormatAlignJustifyIcon /></ListItemIcon>
                            <ListItemText primary={'Form Page'} />
                        </ListItem>
                    </NavLink>


                    <NavLink className={"unactivePage"} activeClassName="activePage" exact to="/table" style={style_unset}>
                        <ListItem button key={'TablePage'}>
                            <ListItemIcon><TableChart /></ListItemIcon>
                            <ListItemText primary={'Table Page'} />
                        </ListItem>
                    </NavLink>
                </List>

            </div>
        );

        return (
            <div>

                <SwipeableDrawer open={this.props.isDrawerOpen} onClose={this.props.toggleDrawer(false)} onOpen={this.props.toggleDrawer(true)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.toggleDrawer(false)}
                        onKeyDown={this.props.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default withStyles(styles)(TemporaryDrawer);