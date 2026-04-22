const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',           // pgAdmin mein jo user hai
  host: 'localhost',
  database: 'hydra_db',       // Aapke screenshot ke hisaab se
  password: 'aryabhatt45',  // Apna password yahan daalo
  port: 5432,
});

module.exports = pool;