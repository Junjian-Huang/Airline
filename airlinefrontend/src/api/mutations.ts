import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const LOGIN = gql`
  mutation Login($code: String!) {
    login(input: { code: $code }) {
      aircraft {
        ...aircraftFields
      }
      jwt
    }
  }
  ${fragments.AIRCRAFT}
`;

export const EDIT_SELF = gql`
  mutation EditSelf($type: String, $imageURL: String) {
    editSelf(input: { type: $type, imageURL: $imageURL }) {
      ...aircraftFields
    }
  }
  ${fragments.AIRCRAFT}
`;


export const ADD_AIRLINE = gql`
  mutation AddAirline(
    $departure: String!
    $destination: String!
    $name: String!
    $country: String!
  ) {
    addAirline(input: { 
       departure: $departure,
       destination: $destination, 
       name: $name, 
       country: $country 
      }
      ) {
      ...airlineFields
    }
  }
  ${fragments.AIRLINE}
`;

export const EDIT_AIRLINE = gql`
  mutation EditAirline(
    $airlineId: ID!
    $aircraftID: ID
    $departure: String
    $destination: String
    $name: String
  ) {
    editAirline(
      input: {
        airlineId: $airlineId,
        aircraftID: $aircraftID,
        departure: $departure,
        destination: $destination,
        name: $name
      }
    ) {
      ...airlineFields
    }
  }
  ${fragments.AIRLINE}
`;

export const ADD_DESCRIPTION = gql`
  mutation AddDescription(
    $content: String!,
    $airlineId: ID!,
    $aircraftId: ID
  ) {
    addDescription(input: { content: $content, airlineId: $airlineId, aircraftID: $aircraftId}) {
      ...descriptionFields
    }
  }
  ${fragments.DESCRIPTION}
`;

export const EDIT_DESCRIPTION = gql`
  mutation EditDescription(
    $descriptionId: ID!,
    $content: String
  ) {
    editDescription(input: { descriptionId: $descriptionId, content: $content}) {
      ...descriptionFields
    }
  }
  ${fragments.DESCRIPTION}
`;