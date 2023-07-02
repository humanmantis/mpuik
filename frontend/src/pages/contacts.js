import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import YouTube from '@mui/icons-material/YouTube';
import Telegram from '@mui/icons-material/Telegram';

import { graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { contactFromSchema } from '../utils/validation';
import Layout from '../components/layout';
import Map from '../components/shared/map/map';
import Address from '../components/shared/address/address';
import Link from '../components/shared/link/link';
import './contacts.scss';
import Seo from '../components/seo';
import { mapSeo } from '../utils/map-seo';

function Contacts({ data }) {
  const pageData = data.allStrapiPage.nodes[0];
  const location = pageData.location || {};
  const { register, handleSubmit, formState, reset, getValues } = useForm({
    resolver: yupResolver(contactFromSchema),
  });
  const { isDirty, errors } = formState;

  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (form) => {
    sendRequest(form);
    reset(getValues());
  };

  const sendRequest = (data) => {
    setIsLoading(true);
    axios
      .post(
        `${process.env.STRAPI_API_URL}/api/messages`,
        { data },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + process.env.STRAPI_TOKEN,
          },
        }
      )
      .then((res) => res && setIsSuccess(true))
      .catch((err) => err && setIsFail(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <Layout
      title={pageData.title}
      subtitle={pageData.subtitle}
      className="contacts"
    >
      <Address
        direction="row"
        justifyContent="space-between"
        address={location.address}
        phone={location.phone}
        email={location.email}
      />

      {location?.social && (
        <Grid container spacing={1} className="social-networks">
          <Grid item xs={12}>
            <Typography variant="h5" className="subtitle">
              Соціальні мережі
            </Typography>
          </Grid>
          {location.social?.facebook && (
            <Grid item>
              <Link
                to={location.social?.facebook}
                target="_blank"
                rel="noreferrer"
                className="social-network"
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
              >
                <YouTube className="social-network-img" />
              </Link>
            </Grid>
          )}
        </Grid>
      )}

      <div className="relative-container">
        <div className="map-container">
          <Map position={[location.latitude, location.longitude]} />
        </div>
        <form
          className="form"
          onSubmit={handleSubmit(sendMessage)}
          noValidate
          autoComplete="off"
        >
          <Typography className="title">Напишіть нам</Typography>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xs={12} className="address-item input-container mt30">
              <TextField
                id="sender"
                name="sender"
                label="Прізвище та ім’я"
                placeholder="Микола Парасюк"
                className="input"
                {...register('sender')}
                error={!!errors.sender}
                helperText={errors.sender?.message ?? ''}
              />
            </Grid>
            <Grid item xs={12} className="address-item input-container mt30">
              <TextField
                id="email"
                name="email"
                label="Електронна пошта"
                placeholder="email@example.com"
                className="input"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message ?? ''}
              />
            </Grid>
          </Grid>
          <TextField
            id="message"
            name="message"
            label="Повідомлення"
            multiline
            rows={4}
            className="textarea mt30"
            placeholder="Доброго дня, "
            variant="outlined"
            {...register('message')}
            error={!!errors.message}
            helperText={errors.message?.message ?? ''}
          />
          {isSuccess && (
            <Alert severity="success" className="alert">
              Повідомлення надіслано
            </Alert>
          )}
          {isFail && (
            <Alert severity="error" className="alert">
              Сталася помилка, спробуйте пізніше
            </Alert>
          )}
          <div className="button mt30">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="button-inner"
              disabled={isLoading || !isDirty}
            >
              Надіслати
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contacts;

export const Head = ({ data, location }) => {
  return (
    <Seo
      pageSeo={mapSeo(data.allStrapiPage?.nodes[0]?.seo, { title: data.allStrapiPage?.nodes[0]?.title })}
      location={location}
    />
  );
};


export const query = graphql`
  query GetContacts {
    allStrapiPage(filter: { slug: { eq: "contacts" } }) {
      nodes {
        title
        subtitle
        location {
          address
          email
          phone
          latitude
          longitude
          list {
            title
            id
          }
          social {
            facebook
            instagram
            telegram
            twitter
            youtube
          }
        }
        seo {
          title: metaTitle
          description: metaDescription
          keywords
          robots: metaRobots
          canonical: canonicalURL
          image: metaImage {
            localFile {
              publicURL
            }
          }
          social: metaSocial {
            socialNetwork
            title
            description
            image {
              localFile {
                publicURL
              }
            }
          }
          structuredData {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;
