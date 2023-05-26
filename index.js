let error = "";
function validation(mas) {
  let valid = true;
  if (mas.length > 0) {
    let a = mas.split("\n");
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (a[i][j] != "1" && a[i][j] != "0") {
          error = "Должны быть только нули и единицы";
          valid = false;
        }
        if (a.length != a[i].length) {
          valid = false;
          error = "должна быть квадратная матрица";
          valid = false;
        }
      }
    }
  } else {
    error = "Не должно быть пустого поля";
    valid = false;}
  return valid;}

function is_simmetr(mas) {
  for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas.length; j++) {
      if (mas[i][j] != mas[j][i]) {
        return false;}}}
  return true;}
function is_kossimmetr(mas) {
  for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas.length; j++) {
      if (mas[i][j] == mas[j][i]) {
        return false;}}}
  return true;}
function is_reflex(mas) {
  for (let i = 0; i < mas.length; i++) {
    if (mas[i][i] == "0") {
      return false;
      break;}}
  return true;}
function is_transitiv(mas) {
  for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas.length; j++) {
      for (let k = 0; k < mas.length; k++) {
        if (i != j &&j != k && !(mas[i][j] == 1 && mas[j][k] == 1 && mas[k][i] == 1))
          return false;}}}
  return true;}

function count() {
  let res = "";
  let arr = document.getElementById("1");
  if (validation(arr.value)) {
    let a = arr.value.split("\n");
    let simmetr = is_simmetr(a);
    let kossimter = is_kossimmetr(a);
    let transitiv = is_transitiv(a);
    let reflect = is_reflex(a);
    if (simmetr) { res += "симметрична <br>";
    } else {
      res += " не ссиметрична <br>";}
    if (kossimter) {
      res += " коссемитричная <br>";
     } else {
      res += " не коссемитрична <br>";}
    if (reflect) {
      res += " рефлексивна <br>";
    } else {
      res += " не рефлексивна <br>";}
    if (transitiv) {
      res += "транизитивна <br>";
    } else {
      res += "не транизитивна <br>";}
    document.getElementById("result").innerHTML = "Результат: матрица... <br>" + res;
  } else {
      alert(error);}}