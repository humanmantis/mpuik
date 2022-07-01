import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Layout from '../components/common/Layout';
import Map from '../components/Location/Map';
import AddressComponent from '../components/common/AddressComponent';
import { contactFromSchema } from '../utils/validation';
import Loader from '../components/common/Loader';

const GetContactPage = loader('../graphql/pages/GetContactPage.gql');
const CreateMessage = loader('../graphql/mutations/CreateMessage.gql');

const useStyles = makeStyles((theme) => ({
  addressItem: {
    flexBasis: 'auto'
  },
  typography: {
    fontWeight: 600
  },
  relativeContainer: {
    position: 'relative',
    margin: '3rem 0'
  },
  mapContainer: {
    maxWidth: '80%',
    height: '600px',
    [theme.breakpoints.only('md')]: {
      maxWidth: '60%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      height: '300px'
    }
  },
  inputContainer: {
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  input: {
    width: '100%'
  },

  form: {
    background: 'white',
    borderRadius: '1rem',
    maxWidth: 600,
    width: '100%',
    padding: '60px 40px',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    zIndex: 500,
    boxShadow: '0px 13px 25px rgba(0, 0, 0, 0.26)',
    [theme.breakpoints.down('sm')]: {
      position: 'initial',
      transform: 'translateY(0%)',
      marginTop: 40
    }
  },
  mt30: {
    marginTop: 30
  },
  textarea: {
    width: '100%'
  },
  title: {
    fontWeight: 600,
    fontSize: 34,
    lineHeight: '46px',
    color: '#06040A',
    [theme.breakpoints.down('xs')]: {
      fontSize: 30
    }
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonInner: {
    padding: '10px 40px',
    borderRadius: '0.5rem',
    fontWeight: 600
  },
  alert: {
    margin: '1rem 0'
  },
  socialNetworks: {
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  socialNetwork: {
    borderRadius: '1rem',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '4rem',
    height: '4rem',
    transition: '.3s all ease',
    '&:hover': {
      background: theme.palette.primary.light
    }
  },
  socialNetworkImg: {
    width: '2rem',
    height: '2rem',
    color: theme.palette.primary.main
  },
  subtitle: {
    marginTop: '2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  }
}));

function Contacts() {
  const classes = useStyles();
  const [createMessage, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(CreateMessage);
  const { loading, error, data } = useQuery(GetContactPage);
  const contact = data?.page.data?.attributes;
  const location = contact?.location?.data?.attributes;

  const { register, handleSubmit, formState, errors, reset, getValues } = useForm({
    resolver: yupResolver(contactFromSchema)
  });
  const { isDirty } = formState;

  const sendMessage = (form) => {
    createMessage({ variables: form });
    reset(getValues());
  };

  if (loading) return <Loader />;
  if (error) return <Redirect to="/error" />;

  return (
    <Layout title={contact.title} subtitle={contact.subtitle}>
      <AddressComponent
        direction="row"
        address={location.address}
        phone={location.phone}
        email={location.email}
      />

      {location?.social && (
        <Grid container spacing={1} className={classes.socialNetworks}>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.subtitle}>
              Соціальні мережі
            </Typography>
          </Grid>
          {location.social?.facebook && (
            <Grid item>
              <a
                href={location.social?.facebook}
                target="_blank"
                rel="noreferrer"
                className={classes.socialNetwork}
              >
                <FacebookIcon className={classes.socialNetworkImg} />
              </a>
            </Grid>
          )}
          {location.social?.instagram && (
            <Grid item>
              <a
                href={location.social?.instagram}
                target="_blank"
                rel="noreferrer"
                className={classes.socialNetwork}
              >
                <InstagramIcon className={classes.socialNetworkImg} />
              </a>
            </Grid>
          )}
          {location.social?.telegram && (
            <Grid item>
              <a
                href={location.social?.telegram}
                target="_blank"
                rel="noreferrer"
                className={classes.socialNetwork}
              >
                <TelegramIcon className={classes.socialNetworkImg} />
              </a>
            </Grid>
          )}
          {location.social?.twitter && (
            <Grid item>
              <a
                href={location.social?.twitter}
                target="_blank"
                rel="noreferrer"
                className={classes.socialNetwork}
              >
                <TwitterIcon className={classes.socialNetworkImg} />
              </a>
            </Grid>
          )}
          {location.social?.youtube && (
            <Grid item>
              <a
                href={location.social?.youtube}
                target="_blank"
                rel="noreferrer"
                className={classes.socialNetwork}
              >
                <YoutubeIcon className={classes.socialNetworkImg} />
              </a>
            </Grid>
          )}
        </Grid>
      )}

      <div className={classes.relativeContainer}>
        <div className={classes.mapContainer}>
          <Map position={[location.latitude, location.longitude]} />
        </div>
        <form
          className={classes.form}
          onSubmit={handleSubmit(sendMessage)}
          noValidate
          autoComplete="off"
        >
          <Typography className={classes.title}>Напишіть нам</Typography>
          <Grid container justify="space-between" spacing={2}>
            <Grid
              item
              xs={12}
              className={`${classes.addressItem} ${classes.inputContainer} ${classes.mt30}`}
            >
              <TextField
                id="sender"
                name="sender"
                label="Прізвище та ім’я"
                placeholder="Ілон Маск"
                className={classes.input}
                inputRef={register}
                error={!!errors.sender}
                helperText={errors.sender?.message ?? ''}
              />
            </Grid>
            <Grid
              item
              xs={12}
              className={`${classes.addressItem} ${classes.inputContainer} ${classes.mt30}`}
            >
              <TextField
                id="email"
                name="email"
                label="Електронна пошта"
                placeholder="email@example.com"
                className={classes.input}
                inputRef={register}
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
            className={`${classes.mt30} ${classes.textarea}`}
            placeholder="Доброго дня, "
            variant="outlined"
            inputRef={register}
            error={!!errors.message}
            helperText={errors.message?.message ?? ''}
          />
          {mutationData && (
            <Alert severity="success" className={classes.alert}>
              Повідомлення надіслано
            </Alert>
          )}
          {mutationError && (
            <Alert severity="error" className={classes.alert}>
              Сталася помилка, спробуйте пізніше
            </Alert>
          )}
          <div className={`${classes.button} ${classes.mt30}`}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.buttonInner}
              disabled={mutationLoading || !isDirty}
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
