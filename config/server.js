module.exports = ({ env }) => ({
  host: env('HOST', '192.168.1.24'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
