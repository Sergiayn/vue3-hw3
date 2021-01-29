import validateStatusTask from "@/use/validateStatusTask"
import axios from "axios"
axios.defaults.baseURL = process.env.VUE_APP_RESUME_BASE_URL

export default {
    async getTask(context) {
        try {
            const response = await axios
                .get('tasks.json')
                .catch(() => {throw new Error('Error in method getTask')})
            if(response.data) {
                for (const [key, value] of Object.entries(response.data)) {
                    if(context.getters.task(key) === undefined){
                        value.id = key
                        context.state.tasks.push(value)
                    }
                }
            }
        } catch (e) {console.warn(e.message)}
    },
    async addNewTask(context,item) {
        item.status = validateStatusTask(item)
        try {
            const response = await axios
                .post('tasks.json',item)
                .catch(() => {throw new Error('Error in method addNewTask')})
            if(response.data) {
                item.id = response.data.name
                context.state.tasks.push(item)
            }
        } catch (e) {console.warn(e.message)}
    },
    async changeStatusTask(context,item) {
        let index = -1

        const changeStatusTaskRemote = async (task) => {
            try {
                await axios
                    .patch(`tasks/${task.id}.json`,{status:task.status})
                    .catch(() => {throw new Error('Error in method changeStatusTask')})

            } catch (e) {console.warn(e.message)}
        }

        context.getters.tasks.filter((task,idx) => {
            if(task.id === item.id) {
                task.status = item.status
                task.status = validateStatusTask(task)
                index = idx
                changeStatusTaskRemote(task)
            }
        })

        return index
    }
}
