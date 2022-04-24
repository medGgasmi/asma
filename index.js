let resX = document.getElementById('resX')
let resY = document.getElementById('resY')

function equal(){
  let a = +document.getElementById('a').value;
  let b = +document.getElementById('b').value;
  let c = +document.getElementById('c').value;
  let d = +document.getElementById('d').value;
  let e = +document.getElementById('e').value;
  let f = +document.getElementById('f').value;
  
  let resultY =  (  (  (f - d*c/a)/(-d*b/a + e)   ).toFixed(3)   )
  
  let resultX = (  (f - e * resultY) / (d) ).toFixed(3)
  
  resY.textContent = 'Y = ' + resultY
  resX.textContent = 'X = ' + resultX
  
  
}