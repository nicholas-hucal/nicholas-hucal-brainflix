const formatDateForSite = (timestamp) => {
    if (timestamp) {
        return new Date(Number(timestamp)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
    return new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

export default formatDateForSite