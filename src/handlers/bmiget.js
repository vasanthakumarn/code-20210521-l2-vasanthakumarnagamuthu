function getBMI(event, context) {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify(event)
    };
}

export const handler = getBMI;