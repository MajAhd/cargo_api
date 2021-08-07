export const UserMiddleware = async (req, res, next) => {
    /*
     This MiddleWare Check User Access to Api
     Like New Demand , Update Demand , etc
     */
    let user_access = true
    if (user_access) {
        next();
    } else {
        res.json({
            status: 403,
            result: false,
            msg: "Access Denied To this request",
        });
    }
};
