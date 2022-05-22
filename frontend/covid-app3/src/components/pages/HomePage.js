import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { connect } from "react-redux";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '90vh' }}
                >
                    <Typography variant="h4" gutterBottom style={{ padding: "10px" }}>
                        {"Welcome to my project! "}
                    </Typography>
                    <Typography variant="h4" gutterBottom style={{ padding: "10px" }}>
                        {"Please use the side bar to navigate to your desired destination"}
                    </Typography>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return { ...state, ...props };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);