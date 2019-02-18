const getEmployerRole = (employeeName, employees) => {
    return employees.find(employeeRole => employeeRole.name === employeeName).role;
}

module.exports = getEmployerRole
