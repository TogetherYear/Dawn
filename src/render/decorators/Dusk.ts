namespace Dusk {
    export interface IMenu {
        key: MenuDisplay,
        id: string,
        icon: string,
        path: string
    }

    export enum MenuDisplay {
        HOME,
        MESSAGE,
        HELP,
        SETTING
    }
}
export { Dusk }
