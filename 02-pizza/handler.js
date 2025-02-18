const { v4: uuidv4 } = require('uuid');

exports.newOrder = async (event) => {
    const orderId = uuidv4();
    let orderDetails;

    try {
        orderDetails = JSON.parse(event.body);
    } catch (error ){
        console.error("Error parsing order details", error);
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid JSON format in order datails"}),
        };
    }
    const order = {orderId, ...orderDetails}

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: order
        }),
    };
}