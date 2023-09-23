module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env("PUBLIC_URL", "https://strapi_test.powerinmd.com"),
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron: {
    enabled: true,

  },
});