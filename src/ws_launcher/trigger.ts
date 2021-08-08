import {Launcher, requests} from "./ServiceLauncher"

// requests.set("get_person", new Launcher().set_launcher(get_demand))

export const trigger = {
    initial: async (trigger_name: string, data: any) => {
        let loader = requests.get(trigger_name)
        loader.set_params(data)
        return await loader.builder()
    },
}
