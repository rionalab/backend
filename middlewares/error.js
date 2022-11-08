const { isProductionEnv } = require('../helpers/helpers')

const errorHandler = (err, req, res, next) => {
   res.status(err.status || 500)
   res.json({
      success: false,
      message: err.message,
      stack: isProductionEnv() ? null : err.stack,
   })
}

module.exports = {
   errorHandler,
}
