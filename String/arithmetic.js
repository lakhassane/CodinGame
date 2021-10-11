const expression = "2*3+4";

const digits = expression.split("+");

toMultiply = [];
toAdd = [];
for (dig of digits) {
  if (dig.includes("*")) {
    toMultiply.push(...dig.split("*"));
  } else {
    toAdd.push(dig);
  }
}

result =
  toMultiply.reduce((a, b) => a * b) + Number(toAdd.reduce((a, b) => a + b));
console.log(result);
