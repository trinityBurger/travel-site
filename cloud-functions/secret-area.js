exports.handler = function (event, context, callback) {
  const secretContent = `
  <h3>welcome to the super secret area</h3>
  <p>Here we can tell you that the sky is blue and two plus two equals four</p>
  `

  let body

  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401
    })
  }
}
