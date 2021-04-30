export interface IContactOptionAddress {
  _key: string;
  _type: string;
  title: string;
  address: string;
}

export interface IContactOptionEmail {
  _key: string;
  _type: string;
  title: string;
  email: string;
}

export interface IContactOptionPhone {
  _key: string;
  _type: string;
  title: string;
  phone: string;
  prefix: string;
}

export interface IFormInput {
  _key: string;
  _type: string;
  type: string;
  label: string;
  name: string;
  required: boolean;
}

export interface IFormSubmit {
  _key: string;
  _type: string;
  text: string;
}

export interface IFormTextarea {
  _key: string;
  _type: string;
  label: string;
  name: string;
  required: boolean;
  maxLength: number;
  minLength: number;
}
