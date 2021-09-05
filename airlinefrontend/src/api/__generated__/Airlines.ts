/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Country } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Airlines
// ====================================================

export interface Airlines_airlines_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Airlines_airlines_edges {
  __typename: "AirlineEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Airlines_airlines_nodes_aircraft {
  __typename: "Aircraft";
  id: string;
  type: string;
  gitHub: string;
  imageURL: string;
}

export interface Airlines_airlines_nodes {
  __typename: "Airline";
  id: string;
  departure: string;
  destination: string;
  name: string;
  country: Country;
  modified: any;
  created: any;
  aircraft: Airlines_airlines_nodes_aircraft;
}

export interface Airlines_airlines {
  __typename: "AirlineConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Airlines_airlines_pageInfo;
  /**
   * A list of edges.
   */
  edges: Airlines_airlines_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Airlines_airlines_nodes[] | null;
}

export interface Airlines {
  airlines: Airlines_airlines | null;
}

export interface AirlinesVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
