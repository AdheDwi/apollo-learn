import { gql } from "@apollo/client";

export const Q_EXAMPLE = gql`
  query ExampleQuery {
    viewer {
      name
    }
  }
`;
