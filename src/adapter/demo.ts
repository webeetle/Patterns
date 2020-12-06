import * as AdapterPattern from './adapter';

export function show() {
    var impiegato = new AdapterPattern.Impiegato('Mario', 'Rossi', 'RSSMRA30A01H501I');
    console.log('nome', impiegato.nome, 'cognome', impiegato.cognome, 'identificativo', impiegato.cf);
    var employee = new AdapterPattern.Employee('John', 'Doe', '000-00-0000');
    console.log('name', employee.name, 'surnmane', employee.surname, 'identification', employee.ssn);
    console.log('Adapted');
    var employeeAdapted = new AdapterPattern.Adapter(employee);
    console.log('nome', employeeAdapted.nome, 'cognome', employeeAdapted.cognome, 'identificativo', employeeAdapted.cf);
}