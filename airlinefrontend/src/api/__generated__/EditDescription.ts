/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditDescription
// ====================================================

export interface EditDescription_editDescription {
  __typename: "Description";
  id: string;
  content: string;
  modified: any;
  created: any;
}

export interface EditDescription {
  editDescription: EditDescription_editDescription;
}

export interface EditDescriptionVariables {
  descriptionId: string;
  content?: string | null;
}
