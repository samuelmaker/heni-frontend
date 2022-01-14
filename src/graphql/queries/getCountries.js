import { gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      capital
    }
  }
`;

export default GET_COUNTRIES;
