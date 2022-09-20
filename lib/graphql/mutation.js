import { gql } from "@apollo/client";

export const MT_EXAMPLE = gql`
  mutation exampleMT($name: String) {
    createRepository(
      input: { name: $name, visibility: "PUBLIC", owner: "Adhe" }
    ) {
      repository {
        url
      }
    }
  }
`;
