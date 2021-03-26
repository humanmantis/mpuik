module.exports = ({ env }) =>
  env("NODE_ENV") === "production"
    ? {
        upload: {
          provider: "cloudinary",
          providerOptions: {
            cloud_name: env("CLOUDINARY_NAME"),
            api_key: env("CLOUDINARY_KEY"),
            api_secret: env("CLOUDINARY_SECRET"),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
        email: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: env('SENDGRID_DEFAULT_FROM'),
            defaultReplyTo: env('SENDGRID_DEFAULT_TO'),
          },
        },
      }
    : {
        upload: {
          provider: "local",
        },
        email: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: env('SENDGRID_DEFAULT_FROM'),
            defaultReplyTo: env('SENDGRID_DEFAULT_TO'),
          },
        },
      };
