import validateTimestamp from "@/use/validateTimestamp";

export default (item) => {
    if(item.status === undefined) {
        item.status = 'active'
    }
    if(validateTimestamp(item.timestamp)) {
        item.status = 'cancelled'
    }

    return item.status
}
