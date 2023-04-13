// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(el => el === name.toLowerCase() || el === name)
}
function fuzzyMatch(drivers, name) {
    return drivers.filter(el => el.slice(0, 2) === name.slice(0, 2))
}
function matchName(drivers, name) {
    return drivers.filter(el => el.name === name)
}