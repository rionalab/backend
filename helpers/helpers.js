const isProductionEnv = () => {
   return process.env.NODE_ENV === 'production'
}

module.exports = {
   isProductionEnv,
}
