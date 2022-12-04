namespace Dusk {
    export interface IMenu {
        key: MenuDisplay,
        id: string,
        icon: string
    }

    export enum MenuDisplay {
        HOME,
        MESSAGE,
        HELP,
        SETTING
    }
}
export { Dusk }
