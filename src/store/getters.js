import formatDate from "@/use/formatDate"

export default {
    countActiveStatus(state) {
        const reducer = (accumulator, item) => item.status === "active" ? accumulator + 1 : accumulator
        return state.tasks.reduce(reducer, 0)
    },
    task: (state) => (id) => {
        return state.tasks.find(task => task.id === id)
    },
    tasks (state){
        return state.tasks.filter(item => {
            item.date = formatDate(item.timestamp)
            return item
        })
    },
    statuses(state) {
        return state.statuses
    }
}
