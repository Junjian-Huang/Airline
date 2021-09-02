import { gql } from "@apollo/client";

export const AIRCRAFT = gql`
    fragment studentFields on Student {
        id
        type
        gitHub
        imageURL
    }
`;

export const AIRLINE = gql`
    fragment projectFields on Project {
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
    fragment commentFields on Comment {
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