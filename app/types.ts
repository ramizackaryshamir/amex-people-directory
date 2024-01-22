export interface PersonProps {
  large: string,
  imgWidth: number,
  imgHeight: number,
  uuid: string,
  first: string,
  last: string,
  age: string,
  streetName?: string,
  streetNumber?: string,
  city: string,
  state?: string,
  country?: string,
  postcode?: string,
  email?: string,
  phone?: string,
  dob?: string,
}

export type PersonResponseObject = Record<string, PersonProps>;

export interface Params {
  params: {
    id: string
  }
};