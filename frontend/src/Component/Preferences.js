import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function Preferences(props) {
  const classes = useStyles();
  
  const handlePriceLevelChange = (event, newValue) => {
    props.priceLevelOnChange(newValue);
  }

  const handleOutDoorChange = (event, newValue) => {
    props.outDoorOnChange(newValue);
  }

  const handleCompactnessChange = (event, newValue) => {
    props.compactnessOnChange(newValue);
  }

  const handleStartTimeChange = (event, newValue) => {
    props.startTimeOnChange(newValue);
  }

  const handleBackTimeChange = (event, newValue) => {
    props.backTimeOnChange(newValue);
  }

  
  return (
    <div className={classes.root}>
      <Typography id="budget-typo" gutterBottom>
        Budget
      </Typography>
      <Slider
        defaultValue={2}
        getAriaValueText={valuetext}
        aria-labelledby="budget-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={4}
        value={props.priceLevel}
        onChange={handlePriceLevelChange}
      />
      <Typography id="outdoor-typo" gutterBottom>
        Prefer Indoor Outdoor
      </Typography>
      <Slider 
        value={props.outDoor} 
        onChange={handleOutDoorChange} 
        aria-labelledby="continuous-slider" 
        step= {0.01}
        min = {0}
        max = {1}
      />
      <Typography id="compact-typo" gutterBottom>
        Compactness
      </Typography>
      <Slider 
        value={props.compactness} 
        onChange={handleCompactnessChange} 
        aria-labelledby="continuous-slider" 
        step= {0.01}
        min = {0}
        max = {1}
      />
      <form className={classes.container} noValidate>
        <TextField
          id="departHrMin"
          label="Depart Time"
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          value={props.startTime}
          onChange={handleStartTimeChange}
        />
        <br></br>
        <TextField
          id="backHrMin"
          label="Back Time"
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          value={props.backTime}
          onChange={handleBackTimeChange}
        />
      </form>
    </div>
  );
}
