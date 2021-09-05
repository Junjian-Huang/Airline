/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Aircrafts
// ====================================================

export interface Aircrafts_aircrafts_pageInfo {
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

export interface Aircrafts_aircrafts_edges {
  __typename: "AircraftEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Aircrafts_aircrafts_nodes {
  __typename: "Aircraft";
  id: string;
  type: string;
  gitHub: string;
  imageURL: string;
}

export interface Aircrafts_aircrafts {
  __typename: "AircraftConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Aircrafts_aircrafts_pageInfo;
  /**
   * A list of edges.
   */
  edges: Aircrafts_aircrafts_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Aircrafts_aircrafts_nodes[] | null;
}

export interface Aircrafts {
  aircrafts: Aircrafts_aircrafts | null;
}

export interface AircraftsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
