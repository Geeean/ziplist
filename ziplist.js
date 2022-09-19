const sample = [1,2,3];
const sample2 = ["a","b","c"];

function ziplist(list,list2) {
  let zip = [];
  if (list.length != list2.length) {
    return 0;
  }
  for (let i = 0; i < list.length + list2.length; i++) {
    if(list[i] && list2[i] != NaN)
      zip.push(list2[i],list[i]);
  }
  return zip;
}

function zipListSimple(list,list2){
  let zip = _.zip(list2,list);
  return _.flatten(zip);
}

console.log(ziplist(sample,sample2));
console.log(zipListSimple(sample,sample2));