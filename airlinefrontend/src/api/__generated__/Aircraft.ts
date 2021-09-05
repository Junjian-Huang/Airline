/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Aircraft
// ====================================================

export interface Aircraft_aircraft {
  __typename: "Aircraft";
  id: string;
  type: string;
  gitHub: string;
  imageURL: string;
}

export interface Aircraft {
  aircraft: Aircraft_aircraft;
}

export interface AircraftVariables {
  id: string;
}
