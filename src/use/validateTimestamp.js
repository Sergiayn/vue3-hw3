export default (timestamp) => {
    const today = new Date()
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const timestampStartOfDay = startOfDay / 1000

    return timestampStartOfDay > timestamp
}
