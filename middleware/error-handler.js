const { CustomError } = require('../errors/custom-error');

const errorHandlerMiddleware = (error, request, response, next) => {
    if (error instanceof CustomError) {
        return response.status(error.status).json({ message: error.message });
    }

    return response.status(500).json({ message: "Something went wrong, please try again!" });
};

module.exports = errorHandlerMiddleware;