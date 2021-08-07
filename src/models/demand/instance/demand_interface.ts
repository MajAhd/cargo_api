export interface iDemand {
    id: number;
    license_plate?: string;

    get_demand(): object

    new_demand(): object;

    update_demand_routes(): object;

    update_demand_parcel(): object;

    update_demand_status(): object;
}
