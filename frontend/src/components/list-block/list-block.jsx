import React from 'react';
import Typography from '@mui/material/Typography';
import BlockTitle from '../shared/block-title/block-title';
import Link from '../shared/link/link';

function ListBlock({ title, subtitle, list }) {
  return (
    <section id={title} style={{ margin: '5rem 0' }}>
      <BlockTitle title={title} subtitle={subtitle} />
      <ol style={{ paddingLeft: '0', listStylePosition: 'inside' }}>
        {list?.map((l) => (
          <Typography
            key={l.id}
            style={{ fontWeight: 600 }}
            variant="h6"
            align="justify"
            component="li"
          >
            <Link to={l.link}>{l.title}</Link>
          </Typography>
        ))}
      </ol>
    </section>
  );
}

export default ListBlock;
