/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Country } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EditAirline
// ====================================================

export interface EditAirline_editAirline {
  __typename: "Airline";
  id: string;
  departure: string;
  destination: string;
  name: string;
  country: Country;
  modified: any;
  created: any;
}

export interface EditAirline {
  editAirline: EditAirline_editAirline;
}

export interface EditAirlineVariables {
  airlineId: string;
  aircraftID?: string | null;
  departure?: string | null;
  destination?: string | null;
  name?: string | null;
}
