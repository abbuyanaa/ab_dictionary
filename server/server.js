const path = require('path');
const express = require('express');
const createLocaleMiddleware = require('express-locale');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config({ path: path.join(__dirname, '.env') });

console.log('--------------Server Starting---------------');
console.log(`NODE_ENV : ${process.env.NODE_ENV || 'development'}`);

const pool = require('./db/pool');

(async function() {
  await pool.getConnection().then(async (conn) => {
    if (!conn) process.exit(1);
    const [rows] = await pool.query('SELECT NOW() AS SYSDATE');
    console.log(rows[0].SYSDATE);
    console.log('>> Database Config');
    console.log(` - connectString : ${conn.config.host}:${conn.config.port}`);
    console.log(` - user : ${conn.config.user}`);
    console.log(` - name : ${conn.config.database}`);

    /* App & Server */
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(createLocaleMiddleware({
      priority: ['accept-language', 'default'],
      default: 'en-US',
    }));

    const corsOptions = {
      origin: `${process.env.SERVER_PROTOCOL}://${
        process.env.NODE_ENV === 'production'
          ? process.env.ORIGIN_HOST_PORT
          : process.env.DEV_ORIGIN_HOST_PORT
      }`,
      credentials: true,
    };

    app.use(cors(corsOptions));
    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.get('/', async (req, res) => {
      const db = await pool.getConnection();
      try {
        await db.beginTransaction();
        const ins = await db.query(`
          INSERT INTO tb_words
          (wrdfst, wrdsnd, wrdlvl, wrdknd, reg_dt, upd_dt, wrkstn) VALUES
          ('a', 'b', '', '', now(), now(), 'a');
        `);
        // console.log(conn.config);
        // const data = {
        //   host: conn.config.host,
        //   user: conn.config.user,
        //   database: conn.config.database,
        // };
        await con.commit();
        // await con.rollback();
        return res.json(ins);
      } catch (error) {
        console.error('SQL Error:', error);
        await con.rollback();
      } finally {
        try {
          await con.release();
        } catch (error) {
          console.error(error);
        }
      }
    });

    let server;
    if (process.env.SERVER_PROTOCOL === 'https') {
      const { readFileSync } = require('fs');
      const httpsOptions = {};
      try {
        httpsOptions.key = readFileSync(path.join(__dirname, './private.pem'));
        httpsOptions.cert = readFileSync(path.join(__dirname, './public.pem'));
      } catch (error) {
        console.log(error);
        process.exit(-1);
      }
      server = require('https').createServer(httpsOptions, app);
    } else {
      server = require('http').createServer(app);
    }
    server.listen(process.env.SERVER_PORT, () => {
      console.log(`${process.env.SERVER_PROTOCOL.toUpperCase()} Server Running at ${process.env.SERVER_PROTOCOL}://localhost:${process.env.SERVER_PORT}`);
    });
  })
  .catch(err => {
    /* Database Connection Error */
    console.log('Database Connection Error');
    console.log(err);
    process.exit(-1);
  });
})();
