export const capitalize = (str) => {
 const lowercase = str.toLowerCase()
 return str.charAt(0).toUpperCase() + lowercase.slice(1)
}