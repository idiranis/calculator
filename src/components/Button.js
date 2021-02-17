import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
     flexGrow: 1,
     height: 100,
   },
});


class Buton extends Component {
  
  render() {
    const { classes } = this.props;
    return <div> <Button  className={classes.root} fullWidth={true} onClick={() => this.props.action(this.props.symbol)}> {this.props.symbol}</Button> </div>;
  }
}
export default withStyles(useStyles) (Buton);