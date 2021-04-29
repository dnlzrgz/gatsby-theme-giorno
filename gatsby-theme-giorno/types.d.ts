export interface ContactOptionAddress {
  _key: string;
  _type: string;
  title: string;
  address: string;
}

export interface ContactOptionEmail {
  _key: string;
  _type: string;
  title: string;
  email: string;
}

export interface ContactOptionPhone {
  _key: string;
  _type: string;
  title: string;
  phone: string;
  prefix: string;
}

export interface FormInput {
  _key: string;
  _type: string;
  type: string;
  label: string;
  name: string;
  required: boolean;
}

export interface FormSubmit {
  _key: string;
  _type: string;
  text: string;
}

export interface FormTextarea {
  _key: string;
  _type: string;
  label: string;
  name: string;
  required: boolean;
  maxLength: number;
  minLength: number;
}
