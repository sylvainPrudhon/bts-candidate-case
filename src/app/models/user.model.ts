export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;
}

class Adress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Position;
}

class Position {
  lat: number;
  lng: number;
}

class Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
