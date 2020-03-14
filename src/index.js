module.exports = function reverse (n) {
 const revNumber = n.toString().split('').reverse().join('');
 return parseInt(revNumber);
}
