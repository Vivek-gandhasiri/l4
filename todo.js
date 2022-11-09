/* eslint-disable no-undef */
const tdList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const Complete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  

  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const todaydue = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const laterdue = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const display = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    Complete,
    overdue,
    todaydue,
    laterdue,
    display,
  };
};

module.exports = tdList;

