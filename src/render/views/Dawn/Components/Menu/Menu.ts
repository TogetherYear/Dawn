import { Dusk } from "@render/decorators/Dusk"
import { onMounted, onUnmounted, ref, watch } from "vue"
import { Dawn } from "../../Dawn"
import router from "@render/router"

class Menu {
    public constructor(parent: Dawn | null = null) {
        this.parent = parent
    }

    private parent: Dawn | null = null

    private isShow = ref<boolean>(false)

    public InitStates() {
        return {
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

    private OnShow() {

    }

    private OnHide() {

    }
}

export { Menu }