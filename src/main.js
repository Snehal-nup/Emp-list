import { data } from "./data.js";
import { renderEmployeeCard } from "./components/employeeDiv.js";

// import { createNewCard } from "./helper/createNewCard";
import { findById } from "./helper/findById.js";

const rootDiv = document.getElementById("root");

data.then((employees) => {
  employees.forEach((employee) => {
    rootDiv.appendChild(renderEmployeeCard(employee));
  });
});
