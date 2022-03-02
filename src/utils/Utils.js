const formatDateforSite = (timestamp) => {
    if (timestamp) {
        return new Date(Number(timestamp)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
    return new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

export const createHumanReadableDate = (timestamp) => {
    if (!timestamp) {
        return false
    }
    let currentTimestamp = new Date().getTime();
    let timeDifference = currentTimestamp - timestamp;
    let types = ['seconds', 'mins', 'hours', 'days', 'months', 'years'];
    let seconds = [1000, 60000, 3600000, 86400000, 2592000000, 31536000000, 63072000000000];
    let times = types.map((type, index) => {
        let time = {
            type: type,
            seconds: seconds[index],
            next: seconds[index + 1],
            plural: `${type} ago`,
            singular: `${type.slice(0, -1)} ago`
        }
        return time;
    })
    let howLongAgo = times.find((time) => time.seconds < timeDifference && time.next > timeDifference);
    if (howLongAgo) {
        if (howLongAgo.seconds * 2 > timeDifference) {
            return `${Math.floor(timeDifference / howLongAgo.seconds)} ${howLongAgo.singular}`;
        } else {
            return `${Math.floor(timeDifference / howLongAgo.seconds)} ${howLongAgo.plural}`;
        }
    }
    return this.formatDateforSite(timestamp);
}

export default formatDateforSite