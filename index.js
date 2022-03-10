/*function cafe = (name) => {

}*/

function cafemenu(name) {
  if (name[0]==='a' ||
  name[0]==='e' ||
  name[0]==='i' ||
  name[0]==='o' ||
  name[0]==='u'
  ) {
      return `Make an ${name}`
  } 
  return `Make a ${name}`
};

console.log(cafemenu('americano'))