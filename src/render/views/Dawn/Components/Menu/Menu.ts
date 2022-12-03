import { Dusk } from "@render/decorators/Dusk"
import { onMounted, onUnmounted, ref } from "vue"
import { Dawn } from "../../Dawn"
import droneIcon from '@render/assets/menu/drone.png'
import recordIcon from '@render/assets/menu/record.png'
import { Time } from "@libs/Time"

class Menu {
    public constructor(parent: Dawn | null = null) {
        this.parent = parent
    }

    private parent: Dawn | null = null

    private showList = ref<Array<Dusk.IMenu>>([
        { key: Dusk.MenuDisplay.DRONE, id: Time.GenerateRandomUid(), icon: droneIcon },
        { key: Dusk.MenuDisplay.RECORD, id: Time.GenerateRandomUid(), icon: recordIcon },
    ])

    private currentDisplay = ref<Dusk.MenuDisplay>(Dusk.MenuDisplay.DRONE)

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