const morgan = require('morgan')
const express = require('express')

const app = new express()

app.use(morgan('dev'))

app.listen(8888, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listen at port 8888')
})
