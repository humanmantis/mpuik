import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, makeStyles, Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Logo from '../common/Logo';
import AddressComponent from '../common/AddressComponent';

const useStyles = makeStyles((theme) => ({
  footerTop: {
    background: theme.palette.primary.light,
    padding: '100px 20px',
  },
  description: {
    margin: '2rem 0',
    maxWidth: '300px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem auto',
      textAlign: 'center',
    },
  },
  socialNetworks: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  socialNetwork: {
    borderRadius: '1rem',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    transition: '.3s all ease',
    '&:hover': {
      background: theme.palette.info.light,
    },
  },
  socialNetworkImg: {
    color: theme.palette.info.main,
  },
  categoryTitle: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '27px',
    textTransform: 'uppercase',
    color: '#730438',
  },
  link: {
    fontSize: 16,
    lineHeight: '22px',
    color: '#730438',
    margin: '26px 0',
    display: 'block',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '13px 0',
    },
  },
  textStyle: {
    fontSize: 16,
    lineHeight: '22px',
    color: '#730438',
  },
  iconContainer: {
    height: '2rem',
    marginRight: '1rem',
  },
  icon: {
    height: '2rem',
    color: theme.palette.info.main,
  },
  bottomItemLeft: {
    padding: '25px 0',
    flex: '0 1 50%',
    [theme.breakpoints.down('sm')]: {
      flex: '0 1 100%',
      textAlign: 'center',
      padding: '15px 0',
    },
  },
  bottomItemRight: {
    textAlign: 'right',
    padding: '25px 0',
    flex: '0 1 50%',
    [theme.breakpoints.down('sm')]: {
      flex: '0 1 100%',
      textAlign: 'center',
      padding: '15px 0',
    },
  },
  bottomEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },

  subitem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '.5rem',
    },
  },
  flex: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

function Footer({ footer }) {
  const styles = useStyles();
  const sections = footer.sections;
  const location = footer.location;

  return (
    <>
      <div className={styles.footerTop}>
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={5} lg={4}>
              <Logo mobileStyle={styles.flex} />
              {footer.additionalText && (
                <Typography
                  variant="body1"
                  paragraph
                  className={styles.description}
                >
                  {footer.additionalText}
                </Typography>
              )}
              {location?.social && (
                <Grid container spacing={1} className={styles.socialNetworks}>
                  {location.social?.facebook && (
                    <Grid item>
                      <a
                        href={location.social?.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialNetwork}
                      >
                        <FacebookIcon className={styles.socialNetworkImg} />
                      </a>
                    </Grid>
                  )}
                  {location.social?.instagram && (
                    <Grid item>
                      <a
                        href={location.social?.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialNetwork}
                      >
                        <InstagramIcon className={styles.socialNetworkImg} />
                      </a>
                    </Grid>
                  )}
                  {location.social?.telegram && (
                    <Grid item>
                      <a
                        href={location.social?.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialNetwork}
                      >
                        <TelegramIcon className={styles.socialNetworkImg} />
                      </a>
                    </Grid>
                  )}
                  {location.social?.twitter && (
                    <Grid item>
                      <a
                        href={location.social?.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialNetwork}
                      >
                        <TwitterIcon className={styles.socialNetworkImg} />
                      </a>
                    </Grid>
                  )}
                  {location.social?.youtube && (
                    <Grid item>
                      <a
                        href={location.social?.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialNetwork}
                      >
                        <YoutubeIcon className={styles.socialNetworkImg} />
                      </a>
                    </Grid>
                  )}
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Grid container spacing={3}>
                {sections && (
                  <Grid item xs={12} sm={8}>
                    {sections && (
                      <Grid container justify="space-around" spacing={3}>
                        {sections.map((section) => (
                          <Grid
                            key={section.id}
                            item
                            xs={12}
                            sm={Math.floor(12 / sections.length)}
                            className={styles.gridItem}
                          >
                            <Typography className={styles.categoryTitle}>
                              {section.title}
                            </Typography>
                            {section.links.map((link) =>
                              link.path.includes('http') ? (
                                <a
                                  key={link.id}
                                  href={link.path}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={styles.link}
                                >
                                  {link.title}
                                </a>
                              ) : (
                                <Link
                                  to={link.path}
                                  key={link.id}
                                  className={styles.link}
                                >
                                  {link.title}
                                </Link>
                              )
                            )}
                          </Grid>
                        ))}
                      </Grid>
                    )}
                  </Grid>
                )}
                {location && (
                  <Grid item xs={12} sm={4}>
                    <Typography className={styles.categoryTitle}>
                      {location.title}
                    </Typography>
                    <AddressComponent
                      direction="column"
                      address={location.address}
                      phone={location.phone}
                      email={location.email}
                      iconContainerStyle={styles.iconContainer}
                      iconStyle={styles.icon}
                      textStyle={styles.textStyle}
                      subItem={styles.subitem}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <Grid container justify="space-between">
          <Grid item xs={12} className={styles.bottomItemLeft}>
            <Typography variant="body1">
              ?????????????? ?????????? &ndash; &copy; {new Date().getFullYear()} ?????? ??????????
              ????????????????
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.bottomItemRight}>
            <Typography variant="body1">
              Made with ?????? by Max Floreskul & Valera Kalenchuk
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
