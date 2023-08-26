import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Telegram';
import Twitter from '@mui/icons-material/Twitter';
import YouTube from '@mui/icons-material/YouTube';
import Logo from '../shared/logo/logo';
import Address from '../shared/address/address';
import Link from '../shared/link/link';
import './footer.scss';

function Footer({ sections, location, additionalText }) {
  return (
    <>
      <div className="footer-top">
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={5} lg={4}>
              <Logo mobileStyle="flex" />
              {additionalText && (
                <Typography variant="body1" paragraph className="description">
                  {additionalText}
                </Typography>
              )}
              {location?.social && (
                <Grid container spacing={1} className="social-networks">
                  {location.social?.facebook && (
                    <Grid item>
                      <Link
                        to={location.social?.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="social-network"
                        aria-label="Facebook"
                      >
                        <Facebook className="social-network-img" />
                      </Link>
                    </Grid>
                  )}
                  {location.social?.instagram && (
                    <Grid item>
                      <Link
                        to={location.social?.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="social-network"
                        aria-label="Instagram"
                      >
                        <Instagram className="social-network-img" />
                      </Link>
                    </Grid>
                  )}
                  {location.social?.telegram && (
                    <Grid item>
                      <Link
                        to={location.social?.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className="social-network"
                        aria-label="Telegram"
                      >
                        <Telegram className="social-network-img" />
                      </Link>
                    </Grid>
                  )}
                  {location.social?.twitter && (
                    <Grid item>
                      <Link
                        to={location.social?.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="social-network"
                        aria-label="Twitter"
                      >
                        <Twitter className="social-network-img" />
                      </Link>
                    </Grid>
                  )}
                  {location.social?.youtube && (
                    <Grid item>
                      <Link
                        to={location.social?.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="social-network"
                        aria-label="YouTube"
                      >
                        <YouTube className="social-network-img" />
                      </Link>
                    </Grid>
                  )}
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Grid container spacing={3}>
                {!!sections?.length && (
                  <Grid item xs={12} sm={8}>
                    {!!sections?.length && (
                      <Grid container justifyContent="space-around" spacing={3}>
                        {sections.map((section) => (
                          <Grid
                            key={section.id}
                            item
                            xs={12}
                            sm={Math.floor(12 / sections.length)}
                            className="grid-item"
                          >
                            <Typography className="category-title">
                              {section.title}
                            </Typography>
                            {section.links.map((item) => (
                              <Link
                                to={item.link}
                                key={item.id}
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </Grid>
                        ))}
                      </Grid>
                    )}
                  </Grid>
                )}
                {location && (
                  <Grid item xs={12} sm={4}>
                    <Typography className="category-title">
                      {location.title}
                    </Typography>
                    <Address
                      direction="column"
                      address={location.address}
                      phone={location.phone}
                      email={location.email}
                      iconContainerStyle="icon-container"
                      iconStyle="icon"
                      textStyle="text"
                      subItemStyle="sub-item"
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} className="bottom-item-left">
            <Typography variant="body1">
              ЧНУ ім. Ю. Федьковича. ННІФТКН. Кафедра МПУіК &ndash; &copy;{' '}
              {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={12} className="bottom-item-right">
            <Typography variant="body1">
              Made with ❤️ by Max Floreskul & Valera Kalenchuk
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
