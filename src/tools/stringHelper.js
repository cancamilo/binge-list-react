
export const limitMaxLength = (str, max) => {
    return str.length > max ? `${str.slice(0, max)}...`: str ;
}