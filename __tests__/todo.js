/* eslint-disable no-undef */
const tdList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, Complete, add, overdue, todaydue, laterdue } = tdList();

describe("Todo list getting Tested", () => {
  beforeAll(() => {
    add({
      title: "DAA algorithums",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding new todo in the list", () => {
    
    let length = all.length;

    add({
      title: "node js process of learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Marking todo as completed", () => {
    expect(all[0].completed).toBe(false);
    Complete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieving all todos that are overdue", () => {
    let listOfTodos = overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieving all todos that are dueToday", () => {
    let listOfTodos = todaydue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieving all todos that are dueLater", () => {
    let listOfTodos = laterdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
