/*
  Hashmap is used when data is get frequently from a common lists.
  As compared to normal searching, O(n); Hashmap has a complexity of O(1) due to unique index mapping.
*/

const {HashMap} = require("./DT");

const Hash1 = new HashMap();

Hash1.set("JET", 9011);
Hash1.set("ABS", 6892);
Hash1.set("LEET", 1337);
Hash1.set("QUICE", 5103);
Hash1.set("TEXAS", 2344);
Hash1.set("USA", 1945);
Hash1.set("KALI", 5656);
Hash1.set("VIOR", 4156);

console.log(Hash1);

console.log(Hash1.get("USA"));
console.log(Hash1.get("KALI"));