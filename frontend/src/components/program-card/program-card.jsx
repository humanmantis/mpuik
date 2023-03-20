import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '../shared/link/link';
import './program-card.scss';

function ProgramCard({
  slug,
  name,
  level,
  form = '',
  specialization,
  term,
  program,
  cards,
}) {
  return (
    <Paper className="program-card">
      <Link className="program-card-header" to={`/entrant/programs/${slug}`}>
        <Typography variant="h5" fontWeight="bold">
          {level} &mdash; {name} {form && `(${form})`}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          Освітня програма: <span fontWeight="normal">{specialization}</span>
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          Термін навчання: <span fontWeight="normal">{term}</span>
        </Typography>
      </Link>
      <div className="program-card-body">
        <Typography variant="body1" fontWeight="700">
          <Link href={program} target="_blank">
            # Освітньо-професійна програма
          </Link>
        </Typography>

        {!!cards?.length &&
          cards.map((card) => (
            <Typography variant="body1" fontWeight="700" key={card.title}>
              <Link
                key={card.title}
                to={`/entrant/programs/${slug}#${card.title
                  .split(' ')
                  .join('')}`}
              >
                # {card.title}
              </Link>
            </Typography>
          ))}
      </div>
    </Paper>
  );
}

export default ProgramCard;
