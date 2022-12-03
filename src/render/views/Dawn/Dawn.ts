import { AActor } from "@libs/AActor"
import { onMounted, onUnmounted } from "vue"
import { Menu } from "./Components/Menu/Menu"

class Dawn extends AActor {
    public constructor() { super() }

    public menu = new Menu(this)

    public InitStates() {
        return {}
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

    public Test() {
        General.Widget.Max()
        Message.success("Together丨233")
    }
}

export { Dawn }