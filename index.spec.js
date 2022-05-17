import { greet } from "./index.js";

describe("first Unit Test greet()", () => {
  it.each([
    ["Jessica", "Hello Coach!"],
    ["Thomas", "Hello Coach!"],
    ["Stefan", "Hello Coach!"],
  ])("should greet the coach", (name, expectedOutput) => {
    const output = greet(name);
    expect(output).toEqual(expectedOutput);
  });

  it("test other name", () => {
    //give
    const name = "Claudia";
    //when
    const output = greet(name);
    //then
    expect(output).toEqual("Hello " + name + "!");
  });

  it.each([
    ["J", "Hello J!"],
    ["Jasmin", "Hello Jasmin!"],
    ["?nsjurhj", "Hello ?nsjurhj!"],
  ])("should greet the person with his name", (name, expectedOutput) => {
    const output = greet(name);
    expect(output).toEqual(expectedOutput);
  });

  it("test empty string", () => {
    //give
    const name = "";
    //when
    const output = greet(name);
    //then
    expect(output).toEqual("Hello stranger!");
  });

  it("test no parameter", () => {
    //when
    const output = greet();
    //then
    expect(output).toEqual("Hello stranger!");
  });
});
