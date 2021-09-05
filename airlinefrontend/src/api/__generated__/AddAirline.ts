/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Country } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddAirline
// ====================================================

export interface AddAirline_addAirline {
  __typename: "Airline";
  id: string;
  departure: string;
  destination: string;
  name: string;
  country: Country;
  modified: any;
  created: any;
}

export interface AddAirline {
  addAirline: AddAirline_addAirline;
}

export interface AddAirlineVariables {
  departure: string;
  destination: string;
  name: string;
  country: string;
}
