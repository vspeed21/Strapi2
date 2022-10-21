module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-95.railway.app'),
      port: env.int('PGPORT', 7175),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'm7Z37EPDmjTGrop5DCzM'),
      ssl: env.bool(true),
    },
  },
});
