const config = {
  email: {
    domain: 'mg.mousebelt.com',
    mailgun: {
      public: process.env.MAILGUN_PUBLIC,
      private: process.env.MAILGUN_PRIVATE
    },
    from: {
      support: 'hello@mousebelt.com',
    },
    template: {
      folder: 'default',
    }
  },
  app: {
    secret: '[1)07T]z@I!H9]c_«qIærOG$P0Np10l6Î7(25µf<j@L6};ZBÄs_î;ü0=QpC[µðo}',
    port: 3000,
  },
  db: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    dialect: 'mysql',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  },
  project: 'Mousebelt',
  frontendBaseUrl: process.env.FRONTEND_BASE_URL,
  RESET_PASSWORD_EXPIRATION: 10, // minutes
};

module.exports = config;
