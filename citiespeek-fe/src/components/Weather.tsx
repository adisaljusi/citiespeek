import React from 'react';
import { Observation } from '../models/model';
import { weatherStyles } from '../styles/styles';

interface Props {
  readonly observation: Observation;
}

export const Weather: React.FC<Props> = ({ observation }) => {
  const c = weatherStyles();

  return (
    <div className={c.container}>
      <h2>{observation.temperature}°</h2>
      <h5>{observation.skyDescription}</h5>
    </div>
  )
}