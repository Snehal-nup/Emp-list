import { data } from "../data.js";

export const renderEmployeeCard = (employee) => {
  let employeeCard = document.createElement("div");
  employeeCard.classList.add("employee-card");
  employeeCard.innerHTML = `
    <div class="employee-image">
          <img src="${employee.imageUrl}" alt="" />
        </div>
        <div>
          <p id="emp${employee.id}">${employee.firstName} ${employee.lastName}</p>
          <p>${employee.company}</p>
        </div>`;
  return employeeCard;
};
