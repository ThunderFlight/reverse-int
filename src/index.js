module.exports = function reverse (n) {
  let a =n.toString()
  let c =n.toString().split("").reverse().join("").replace("-","")
    return Number(c)
}
