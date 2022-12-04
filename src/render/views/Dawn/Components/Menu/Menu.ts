import { Dusk } from "@render/decorators/Dusk"
import { onMounted, onUnmounted, ref } from "vue"
import { Dawn } from "../../Dawn"
import homeIcon from '@render/assets/menu/home.png'
import messageIcon from '@render/assets/menu/message.png'
import helpIcon from '@render/assets/menu/help.png'
import settingIcon from '@render/assets/menu/setting.png'
import { Time } from "@libs/Time"

class Menu {
    public constructor(parent: Dawn | null = null) {
        this.parent = parent
    }

    private parent: Dawn | null = null

    private showList = ref<Array<Dusk.IMenu>>([
        { key: Dusk.MenuDisplay.HOME, id: Time.GenerateRandomUid(), icon: homeIcon },
        { key: Dusk.MenuDisplay.MESSAGE, id: Time.GenerateRandomUid(), icon: messageIcon },
        { key: Dusk.MenuDisplay.HELP, id: Time.GenerateRandomUid(), icon: helpIcon },
        { key: Dusk.MenuDisplay.SETTING, id: Time.GenerateRandomUid(), icon: settingIcon },
    ])

    private currentDisplay = ref<Dusk.MenuDisplay>(Dusk.MenuDisplay.HOME)

    public InitStates() {
        return {
            showList: this.showList,
            currentDisplay: this.currentDisplay,
        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    protected Destroy() {

    }

    public OnDisplayClick(e: Dusk.IMenu) {
        this.currentDisplay.value = e.key
    }
}

export { Menu }