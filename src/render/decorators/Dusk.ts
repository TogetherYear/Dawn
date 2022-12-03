namespace Dusk {
    export interface IMenu {
        key: MenuDisplay,
        id: string,
        icon: string
    }

    export enum MenuDisplay {
        DRONE,
        RECORD
    }
}
export { Dusk }
