const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: '123bh@vy@456',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM userss', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const Region = parseInt(request.params.Region)

  pool.query('SELECT * FROM userss WHERE Region = $1', [Region], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getUsers,
  getUserById,
}
