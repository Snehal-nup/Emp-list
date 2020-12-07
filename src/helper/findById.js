export const findById = (Id) => {
  const employeeObject = data.filter((employee) => {
    return employee.id == Id;
  });
  return employeeObject;
};
