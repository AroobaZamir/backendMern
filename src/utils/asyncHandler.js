//this is a wrapper function that is reusable and is used to avoid repeatition of same code everywhere

const asyncHandler = (requestHandler)=>{
    return (req, res, next)=>{
        Promise.resolve(requestHandler(req, res,next)).catch((err)=> next(err))
    }
}