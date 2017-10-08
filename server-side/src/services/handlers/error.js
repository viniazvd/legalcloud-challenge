module.exports = (error, msg, rejectFunction) => {
  console.error('error: ', error)

  rejectFunction({ error: msg })
}


