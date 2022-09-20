import { MT_EXAMPLE } from "../functions";
import { initializeApollo } from "../apollo";

export const F_MT_EXAMPLE = async (values) => {
  console.log("val", values);
  let token = "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";
  if (token) {
    let client = initializeApollo(token);
    let { data, errors } = await client?.mutate({
      mutation: MT_EXAMPLE,
      variables: { ...values },
    });
    if (data) return { data, errors: null };
    else return { data: null, errors };
  } else {
    return { data: null, errors: { message: "NO TOKEN" } };
  }
};
