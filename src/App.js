import React, { Component } from "react";
import { TextField, Grid } from "@material-ui/core";
import Buton from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '0',
      previous: [],
    };
  }
  reset = () => {
    this.setState({ result: '0' });
  };
  addToCurrent = (symbol) => {
    this.setState({ current: this.state.current + symbol });
  };
  render() {
    const buttons = [{ symbol: "C", cols: 3 , action: this.reset },
                     { symbol: "/", cols: 1 , action: this.addToCurrent },
                     { symbol: "7", cols: 1 , action: this.addToCurrent },
                     { symbol: "8", cols: 1 , action: this.addToCurrent },
                     { symbol: "9", cols: 1 , action: this.addToCurrent },
                     { symbol: "X", cols: 1 , action: this.addToCurrent },
                     { symbol: "4", cols: 1 , action: this.addToCurrent },
                     { symbol: "5", cols: 1 , action: this.addToCurrent },
                     { symbol: "6", cols: 1 , action: this.addToCurrent },
                     { symbol: "-", cols: 1 , action: this.addToCurrent },
                     { symbol: "1", cols: 1 , action: this.addToCurrent },
                     { symbol: "2", cols: 1 , action: this.addToCurrent },
                     { symbol: "3", cols: 1 , action: this.addToCurrent },
                     { symbol: "+", cols: 1 , action: this.addToCurrent },
                     { symbol: "0", cols: 1 , action: this.addToCurrent },
                     { symbol: ".", cols: 1 , action: this.addToCurrent },
                     { symbol: "=", cols: 1 , action: this.addToCurrent },
                    ];
                     
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {" "}
            <TextField
              className="result"
              type="text"
              value={this.state.current}
              variant="outlined"
              label="resultat"
            />
          </Grid>

          
          {buttons.map((btn,i) => {
            return <Grid item xs={3} >
                   <Buton key={i}  symbol={btn.symbol} cols={btn.cols} action= {(symbol)=> btn.action(symbol)} />
                   </Grid>
          })}
        </Grid>
      </div>
    );
  }
}

export default App;
