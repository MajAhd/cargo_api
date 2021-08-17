export interface iDemand {
    get_demand(id:number): object

    new_demand(params:iDemandCreate): object;

    update_demand(id:number , params:iDemandUpdate): object;

    update_demand_status(id:number , params): object;
}

export interface iDemandCreate extends iDemandUpdate{
    user_id:number
}

export interface iDemandUpdate{
    origin_lat:number,
    origin_lon:number,
    delivery_lat:number,
    delivery_lon:number,
    total_weight:number,
    pallets_qtt:number
}
