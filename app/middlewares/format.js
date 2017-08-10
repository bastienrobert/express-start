module.exports = function (req, res, next) {
  var format = req.get('Content-Type')
  if (format) {
    req.headers.accept = format
  }
  next()
}
