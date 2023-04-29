// Connect to Postgres using the node-postgres package

const POOL = require('pg').Pool

const pool = new POOL({
  user: 'me',
  host: 'localhost',
  database: 'favlinks',
  password: 'password',
  port: 5432,
})

// Create all the functions that will be our request handlers in our express server

// Create a new link in the db

const createLink = (link) => {
  pool.query('INSERT INTO link VALUES link', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

// Read all the data from db

const getLinks = (req, res) => {
  pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

// Update link in the db

const updateLink = (req, res) => {
  pool.query('SET link WHERE links = link', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

// Delete link in the db

const deleteLink = (req, res) => {
  pool.query('DELETE FROM links WHERE getLinks = link', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

module.exports = {
  getLinks,
}
