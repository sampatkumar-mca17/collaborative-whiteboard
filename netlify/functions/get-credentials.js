exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        bearerToken: process.env.bearer_token,
        clientId: process.env.client_id
      })
    };
  };