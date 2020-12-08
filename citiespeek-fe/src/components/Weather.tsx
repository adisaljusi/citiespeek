import { Button } from '@material-ui/core';
import React from 'react';
import { weatherIconMap } from '../helpers/helpers';
import { Observation } from '../models/model';
import { weatherStyles } from '../styles/styles';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  readonly observation: Observation;
}

export const Weather: React.FC<Props> = ({ observation }) => {
  const c = weatherStyles();
  const imageSrc = weatherIconMap[observation.skyDescription].replace(' ', '');

  return (
    <>
      <div className={c.container}>
        <div className={c.weather}>
          <img className={c.image} src={imageSrc} alt={observation.skyDescription} />
          <h2>{observation.temperature}°</h2>
        </div>
        <h4 className={c.skyDescription}>{observation.skyDescription}</h4>
      </div>
      <div className={c.buttons}>
        <Button
          variant="outlined"
          className={c.dismissButton}
          startIcon={<CloseIcon />}>
          Dismiss
      </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}>
          Save
      </Button>
      </div>
    </>
  )
}