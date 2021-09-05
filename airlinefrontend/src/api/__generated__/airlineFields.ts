/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Country } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: airlineFields
// ====================================================

export interface airlineFields {
  __typename: "Airline";
  id: string;
  departure: string;
  destination: string;
  name: string;
  country: Country;
  modified: any;
  created: any;
}
