/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Country } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Airline
// ====================================================

export interface Airline_airline {
  __typename: "Airline";
  id: string;
  departure: string;
  destination: string;
  name: string;
  country: Country;
  modified: any;
  created: any;
}

export interface Airline {
  airline: Airline_airline;
}

export interface AirlineVariables {
  id: string;
}
