var restify = require('restify')
var yahooFinance = require('yahoo-finance')
var restifyPromise = require('restify-await-promise')

const server = restify.createServer({
  name: 'yahoo-finance-proxy',
  version: '1.0.0'
})

restifyPromise.install(server)

server.get('/quotes/:symbol', function(req, res, next) {
  return yahooFinance.quote({ symbol: req.params.symbol }).then(quote => {
    res.send(quote)
  })
})

server.listen(process.env.PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url)
})
