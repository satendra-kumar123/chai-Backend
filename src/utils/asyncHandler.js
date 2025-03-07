const asyncHandler = (requestHandler) =>
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((error) => next(error))
}

// This is function using tryCatch block of code.
// const asyncHandler = (fn) => {
//     return async (req, res, next) => {
//         try {
//             await fn(req, res, next)
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             })
//         }
//     }
// }

export { asyncHandler }