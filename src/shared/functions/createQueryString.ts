export function createQueryString(obj: any) {
    const params: any = {};
    let queryString = ``;
    Object.keys(obj).forEach((key) => (Boolean(obj[key]) || obj[key] === 0) ? params[key] = obj[key] : null);
    Object.keys(params).forEach((key, index) => (index == 0) ? queryString += `?${key}=${params[key]}` : queryString += `&${key}=${params[key]}`);
    return queryString;
}