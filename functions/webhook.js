/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @param {any} data The object to be parsed
* @returns {string}
*/
module.exports = (name = 'world', data = {}, context, callback) =>
{
    const method = context.http.method,
      result = `webhook ${method} success`;
      
    if (method === 'POST')
      console.log(`data: ${JSON.stringify(data)}`);
    else if (method === 'GET')
      console.log(`params: ${JSON.stringify(context.params)}`);

    callback(null, result);
};