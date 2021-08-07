export abstract class DemandAbstract{
    abstract id: number;

    async get_demand():Promise<object | null>{
        return null;
    }
    async new_demand(): Promise<object | boolean> {
        return true;
    }

    async update_demand_routes(): Promise<object | boolean> {
        return true;
    }

    async update_demand_parcel(): Promise<object | boolean> {
        return true;
    }

    async update_demand_status(): Promise<object | boolean> {
        return true;
    }
}