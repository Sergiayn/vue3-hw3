import {v4 as uuid} from "uuid"
import validateTimestamp from "@/use/validateTimestamp"

export default {
    addNewTask(state,item) {
        item.id = uuid()
        if(item.status === undefined) {
            item.status = 'active'
        }
        if(validateTimestamp(item.timestamp)) {
            item.status = 'cancelled'
        }

        state.tasks.push(item)
    }
}
