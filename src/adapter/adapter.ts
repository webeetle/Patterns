export class Impiegato {
  private _nome: string;
  private _cognome: string;
  private _cf: string;


  constructor(nome: string, cognome: string, cf: string) {
    this._nome = nome;
    this._cognome = cognome;
    this._cf = cf;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get cognome(): string {
    return this._cognome;
  }

  set cognome(value: string) {
    this._cognome = value;
  }

  get cf(): string {
    return this._cf;
  }

  set cf(value: string) {
    this._cf = value;
  }
}

// adaptee
export class Employee {
  private _name: string;
  private _surname: string;
  private _ssn: string;


  constructor(name: string, surname: string, ssn: string) {
    this._name = name;
    this._surname = surname;
    this._ssn = ssn;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get ssn(): string {
    return this._ssn;
  }

  set ssn(value: string) {
    this._ssn = value;
  }
}

export class Adapter extends Impiegato {
  private _employee: Employee;

  constructor(employee: Employee) {
    super(employee.name, employee.surname, employee.ssn);
    this._employee = employee;
  }
}