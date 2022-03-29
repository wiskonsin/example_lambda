const axios = require("axios");

exports.handler = async () => {
    try {
        const res = await axios.get(process.env.API_URL)
        return {
            statusCode: 200,
            body: res.data[0].summary
        }
    } catch (e) {
        console.log(e)
        return {
            statusCode: 400,
            body: JSON.stringify(e)
        }
    }
};
