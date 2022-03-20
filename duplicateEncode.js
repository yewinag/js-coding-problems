// Question
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let obj = {};
  let str = [];
  for (let i = 0; i < word.length; i++) {
    var value = word[i].toLowerCase();
    if (obj[value]) {
      obj[value] = ')';
    } else {
      obj[value] = '(';
    }
  }
  for (let i = 0; i < word.length; i++) {
    var select = word[i].toLowerCase();
    str.push(obj[select]);
  }
  console.log(str.join(''));
  return str.join('');
}
// duplicateEncode("din") //,"(((");
duplicateEncode('recede'); //,"()()()");
// duplicateEncode("Success")//,")())())","should ignore case");
// duplicateEncode("(( @") //,"))((");
