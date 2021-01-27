import {v4 as uuid} from "uuid"
import validateStatusTask from "@/use/validateStatusTask"

export default {
    addNewTask(state,item) {
        item.id = uuid()
        item.status = validateStatusTask(item)

        state.tasks.push(item)
    },
    changeStatusTask(state,item) {
        let index = -1
        state.tasks.filter((task,idx) => {
            if(task.id === item.id) {
                task.status = item.status
                task.status = validateStatusTask(task)
                index = idx
            }
        })

        return index
    }
}
