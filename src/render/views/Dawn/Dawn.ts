import { AActor } from "@libs/AActor"
import { onMounted, onUnmounted } from "vue"

class Dawn extends AActor {
    public constructor() { super() }

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
        window.EN_Vibe.Max()
        window.NE_Message.success("Together丨233")
    }
}

export { Dawn }