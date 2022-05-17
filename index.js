export function greet(name = "") {
  if (name === "Jessica" || name === "Thomas" || name === "Stefan") {
    return "Hello Coach!";
  } else if (name === "") {
    return "Hello stranger!";
  } else {
    return "Hello " + name + "!";
  }
}
