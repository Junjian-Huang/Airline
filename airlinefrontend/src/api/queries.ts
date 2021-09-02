import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const AIRLINES = gql`
    query Airlines($first: Int, $after: String, $last: Int, $before: String) {
        airlines(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...airlineFields
                aircraft{ 
                    ...aircraftFields
                }
            }
        }
    }
    ${fragments.AIRLINE}
    ${fragments.PAGE_INFO}
    ${fragments.AIRCRAFT}
`

export const AIRLINE = gql`
    query Airline($id: ID!) {
        airline(id: $id) {
            ...airlineFields
        }
    }
    ${fragments.AIRLINE}
`

export const AIRCRAFTS = gql`
    query Aircrafts($first: Int, $after: String, $last: Int, $before: String) {
        aircrafts(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
            ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...aircraftFields
            }
        }
    }
    ${fragments.AIRCRAFT}
    ${fragments.PAGE_INFO}
`

export const AIRCRAFT = gql`
    query Aircraft($id: ID!) {
        aircraft(id: $id){
            ...aircraftFields
        }
    }
    ${fragments.AIRCRAFT}
`

export const SELF = gql`
    query Self {
        self {
            ...aircraftFields
        }
    }
    ${fragments.AIRCRAFT}
`