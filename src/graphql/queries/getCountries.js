import { gql } from "@apollo/client";

const getCountries = gql`
  query GetCountries {
    countries {
      name
      capital
      continent {
        name
      }
    }
  }
`;

export default getCountries;
