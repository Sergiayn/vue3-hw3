import state from "@/store/state"
import formatDate from "@/use/formatDate"

export default {
    countActiveStatus() {
        const reducer = (accumulator, item) => item.status === "active" ? accumulator + 1 : accumulator
        return state.tasks.reduce(reducer, 0)
    },
    tasks (){
        return state.tasks.filter(item => {
            item.date = formatDate(item.timestamp)
            return item
        })
    }
}
