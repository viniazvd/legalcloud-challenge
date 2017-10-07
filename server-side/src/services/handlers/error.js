const error = (error, msg, rejectFunction) => {
  console.error(error)

  rejectFunction({ error: msg })
}

module.exports = error
