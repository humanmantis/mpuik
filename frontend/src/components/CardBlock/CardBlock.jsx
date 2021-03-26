import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Card from "../Card/Card";

const useStyles = makeStyles((theme) => ({
  section: {
    margin: "5rem 0",
  },
  sectionHeader: {
    margin: "0 auto",
    maxWidth: "800px",
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: "2rem",
  },
}));

function CardBlock({ slug, title, subtitle, cards }) {
  const classes = useStyles();
  return (
    <section id={slug} className={classes.section}>
      <div className={classes.sectionHeader}>
        <Typography
          variant="h4"
          className={classes.title}
          align="center"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle}
          paragraph
        >
          {subtitle}
        </Typography>
      </div>

      <Grid container spacing={3} justify="center">
        {cards.map((card, i) => (
          <Grid
            key={card.id}
            item
            xs={12}
            sm={card.variant === "big" ? 12 : 6}
            md={card.variant === "big" ? 6 : 4}
          >
            <Card
              variant={card.variant}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

CardBlock.defaultProps = {
  subtitle: "",
};

CardBlock.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(["small", "middle", "big"]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
};

export default CardBlock;
