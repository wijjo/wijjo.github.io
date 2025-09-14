// noinspection JSUnusedGlobalSymbols

const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getNYTCrosswordURL(offset = 0) {
    let date = new Date();
    if (offset !== 0) {
        date.setDate(date.getDate() + offset);
    }
    const mon = mons[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);
    return `https://www.nytimes.com/svc/crosswords/v2/puzzle/print/${mon}${day}${year}.pdf`;
}
