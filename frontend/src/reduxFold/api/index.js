export const fetchList = async () => {
    const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/api/services`);
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json();
}

export const fetchItem = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/api/services/${id}`);
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json();
}