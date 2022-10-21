module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'dpg-cd9g172rrk09hio84u4g-a.oregon-postgres.render.com'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'portafolio_5zae'),
      user: env('PGUSER', 'tikodev'),
      password: env('PGPASSWORD', 'FFVt8q7GXdVP1cp9Excd2T7T6IfO1D1k'),
      ssl: env.bool(true),
    },
    //postgres://tikodev:FFVt8q7GXdVP1cp9Excd2T7T6IfO1D1k@dpg-cd9g172rrk09hio84u4g-a.oregon-postgres.render.com/portafolio_5zae
  },
});
