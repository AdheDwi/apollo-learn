import { initializeApollo } from "../apollo";
import { Q_EXAMPLE } from "../graphql";

export const F_Q_EXAMPLE = async (token) => {
  if (token) {
    let client = initializeApollo(token);
    try {
      let { data, errors } = await client.query({ query: Q_EXAMPLE });
      if (data) return { data };
      else return { errors };
    } catch (error) {
      console.log(error, "ERRRROOOOOO");
      return { errors: error };
    }
  }
};
