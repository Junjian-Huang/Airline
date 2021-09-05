/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddDescription
// ====================================================

export interface AddDescription_addDescription {
  __typename: "Description";
  id: string;
  content: string;
  modified: any;
  created: any;
}

export interface AddDescription {
  addDescription: AddDescription_addDescription;
}

export interface AddDescriptionVariables {
  content: string;
  airlineId: string;
  aircraftId?: string | null;
}
