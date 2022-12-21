import { classNames } from "./classNames";

describe("classNames helper", () => {
  test("only one first param", () => {
    expect(classNames("cls")).toBe("cls");
  });
  test("additional", () => {
    expect(classNames("cls", {}, ["cls1", "cls2"])).toBe("cls cls1 cls2");
  });
  test("mods", () => {
    const expected = "cls cls1 cls2 mod1";
    expect(classNames("cls", {mod1: true, mod2: false}, ["cls1", "cls2"])).toBe(expected);
  });
  
  test("mods with undef", () => {
    const expected = "cls cls1 cls2 mod1";
    expect(classNames("cls", {mod1: true, mod2: undefined}, ["cls1", "cls2"])).toBe(expected);
  });
});