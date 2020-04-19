module.exports = {
  core :
  {
    bootstrap :
    {
      'core/store' : 'core/store/bootstrap'
    },
    store :
    {
      middlewares : [
        'store/middleware/logger',
        'store/middleware/delayer'
      ]
    },
    locator :
    {
      'core/store'               : __dirname,
      'core/store/bootstrap'     : `${__dirname}/bootstrap`,
      'store/middleware/logger'  : `${__dirname}/middleware/logger`,
      'store/middleware/delayer' : `${__dirname}/middleware/delayer`
    }
  }
}
