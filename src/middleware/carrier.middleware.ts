export const CarrierMiddleware = async (req, res, next) => {
    /*
     This MiddleWare Check Carrier Access to Api
     Like New Supplier , Update Supplier , etc
     */
    let carrier_access = true
    if (carrier_access) {
        next();
    } else {
        res.json({
            status: 403,
            result: false,
            msg: "Access Denied To this request",
        });
    }
};
