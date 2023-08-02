//How to pass function as a parameter
const m = function () {
  return "Good Morning";
};
const l = function () {
  return "Good Evening";
};
function abc(ml, name) {
  console.log(ml() + " " + name);
}
abc(m, "Naman");
