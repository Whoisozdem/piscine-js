function triangle(str, num){
let triangleStr = "";
for (let i = 1; i <= num; i++) {
  for (let j = 0; j < num - i; j++) {
    triangleStr += "";
  }
  for (let k = 0; k < i; k++) {
    triangleStr += str;
  } if (i<num){
  triangleStr += "\n";
  }
}
return triangleStr

}