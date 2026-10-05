export class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message)
        this.statusCode = statusCode
        this.name = "AppError"
    }
}

export const errorHandler = (err, _req, res, _next) => {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        success: false,
        message: err.message
    })
}