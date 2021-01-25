export default (timestamp) => {
    const a = new Date(timestamp * 1000)
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    // const hour = a.getHours();
    // const min = a.getMinutes();
    // const sec = a.getSeconds();
    return date + " " + month + " " + year
}