import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { F_Q_EXAMPLE } from "../lib/functions";

export default function Home({ data }) {
  console.log("data", data);
  return (
    <>
      <p>{data.name}</p>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const token = "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";
    let data = await F_Q_EXAMPLE(token);

    if (data) {
      return { props: { data: data.data.viewer } };
    }
  } catch (error) {
    console.log(error);
  }
};
