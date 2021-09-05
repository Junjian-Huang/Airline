/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditSelf
// ====================================================

export interface EditSelf_editSelf {
  __typename: "Aircraft";
  id: string;
  type: string;
  gitHub: string;
  imageURL: string;
}

export interface EditSelf {
  editSelf: EditSelf_editSelf;
}

export interface EditSelfVariables {
  type?: string | null;
  imageURL?: string | null;
}
