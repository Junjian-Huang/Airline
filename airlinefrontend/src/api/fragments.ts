import { gql } from "@apollo/client";

export const AIRCRAFT = gql`
    fragment aircraftFields on Aircraft {
        id
        type
        gitHub
        imageURL
    }
`;

export const AIRLINE = gql`
    fragment airlineFields on Airline {
        id
        departure
        destination
        name
        country
        modified
        created
    }
`;

export const DESCRIPTION = gql`
    fragment descriptionFields on Description {
        id
        content
        modified
        created
    }
`;

export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;