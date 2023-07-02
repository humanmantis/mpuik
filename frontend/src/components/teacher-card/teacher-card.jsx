import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '../shared/link/link';
import Image from '../image/image';
import './teacher-card.scss';

function TeacherCard({ route, photo, fullname, position, academiclevel }) {
  return (
    <Paper className="teacher-card">
      <Link className="teacher-card-link" to={route}>
        {photo ? (
          <Image
            src={photo.url}
            localFile={photo.localFile}
            alt={fullname}
            className="teacher-card-image"
            quality={100}
          />
        ) : (
          <StaticImage
            src="../../../static/images/default-profile.jpg"
            alt={fullname}
            className="teacher-card-image"
          />
        )}
        <Typography variant="h5" className="teacher-card-title">
          {fullname}
        </Typography>
        <Typography variant="subtitle2" className="teacher-card-text">
          {position}
          {position && academiclevel && ','} {academiclevel}
        </Typography>
      </Link>
    </Paper>
  );
}

export default TeacherCard;
