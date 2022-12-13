import { Dusk } from "@render/decorators/Dusk"
import { onMounted, onUnmounted, ref, watch } from "vue"
import { Dawn } from "../../Dawn"
import homeIcon from '@render/assets/menu/home.png'
import messageIcon from '@render/assets/menu/message.png'
import helpIcon from '@render/assets/menu/help.png'
import settingIcon from '@render/assets/menu/setting.png'
import { Time } from "@libs/Time"
import router from "@render/router"

class Menu {
    public constructor(parent: Dawn | null = null) {
        this.parent = parent
    }

    private parent: Dawn | null = null

    private showList = ref<Array<Dusk.IMenu>>([
        { key: Dusk.MenuDisplay.HOME, id: Time.GenerateRandomUid(), icon: homeIcon, path: '/Dawn/Home' },
        { key: Dusk.MenuDisplay.MESSAGE, id: Time.GenerateRandomUid(), icon: messageIcon, path: '/Dawn/Message' },
        { key: Dusk.MenuDisplay.HELP, id: Time.GenerateRandomUid(), icon: helpIcon, path: '/Dawn/Help' },
        { key: Dusk.MenuDisplay.SETTING, id: Time.GenerateRandomUid(), icon: settingIcon, path: '/Dawn/Setting' },
    ])

    private currentDisplay = ref<Dusk.MenuDisplay>(Dusk.MenuDisplay.HOME)

    private isShow = ref<boolean>(false)

    public InitStates() {
        return {
            showList: this.showList,
            currentDisplay: this.currentDisplay,
            isShow: this.isShow,
        }
    }

    public InitHooks() {
        watch(this.isShow, (newValue) => {
            if (newValue) {
                this.OnShow()
            }
            else {
                this.OnHide()
            }
        })
    }

    public Run() {
        this.ListenEvents()
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    protected Destroy() {

    }

    private ListenEvents() {
        window.addEventListener('keydown', (e) => {
            this.OnKeyDown(e)
        })
    }

    private OnKeyDown(e: KeyboardEvent) {
        if (e.key == 'Tab') {
            this.isShow.value = !this.isShow.value
        }
    }

    public OnDisplayClick(e: Dusk.IMenu) {
        this.currentDisplay.value = e.key
        router.push({ path: e.path, query: {} })
    }

    private OnShow() {

    }

    private OnHide() {

    }
}

export { Menu }