import React, { useState } from "react";

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { F_MT_EXAMPLE } from "../lib/functions";

export default function Home() {
  const [input, setInput] = useState({ name: "", visibility: "PUBLIC" });

  const submitData = async () => {
    if (input.name !== "") {
      let { data, errors } = await F_MT_EXAMPLE({
        name: input.name,
        // visibility: input.visibility,
      });

      if (data) {
        console.log("berhasil", data);
      } else {
        console.log("error", errors);
      }
    }
  };

  return (
    <>
      <input
        placeholder="nama repository"
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        value={input.name}
      />
      <br />
      <select
        onChange={(e) => setInput({ ...input, visibility: e.target.value })}
        value={input.visibility}
      >
        <option value="PUBLIC">Public</option>
        <option value="PRIVATE">Private</option>
      </select>
      <br />
      <button onClick={() => submitData()}>ADD REPO</button>
    </>
  );
}

// export const getServerSideProps = async (ctx) => {
//   try {
//     const token = "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";
//     let data = await F_Q_EXAMPLE(token);

//     if (data) {
//       return { props: { data: data.data.viewer } };
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
