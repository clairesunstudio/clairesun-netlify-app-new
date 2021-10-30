// lambda/hello.js
module.exports.handler = async function(event, context) {
  console.log("queryStringParameters", event.queryStringParameters);
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello, World! This is better " + Math.round(Math.random() * 10)
    })
  };
};
//# sourceMappingURL=hello.js.map
