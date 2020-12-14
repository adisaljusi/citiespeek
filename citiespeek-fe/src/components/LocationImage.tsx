import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Image } from '../models/model';
import { locationStyles } from '../styles/styles';

interface Props {
  readonly image: Image | null;
  readonly hideSidebar: () => void;
}

export const LocationImage: React.FC<Props> = ({ image, hideSidebar }) => {
  const c = locationStyles();

  return (
    <div className={c.imageContainer}>
      <IconButton className={c.imageButton} onClick={hideSidebar}>
        <CloseIcon />
      </IconButton>
      {
        image != null
          ? <img className={c.image} src={image.src} alt={image.alt} />
          : <div className={c.noImage}><span className={c.noImageText}>No image found</span></div>
      }
    </div>
  );
}