export function convertDate(postDate) {
    let msec = Date.parse(postDate)
    let d = new Date(msec)
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString("en-US", options)
}