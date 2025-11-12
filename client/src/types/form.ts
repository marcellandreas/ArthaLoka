export interface InputChangeEvent
  extends React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > {}

export interface AddressFormType {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
}
