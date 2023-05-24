// import React from "react";

// // Project functions imported from wherever you declare them
// import { Client } from "../utils/prismicHelpers";
// import { queryRepeatableDocuments } from "../utils/queries"; //some helper queries for the getStaticPaths function
// import useUpdatePreviewRef from "../utils/useUpdatePreviewRef";

// /**
//  * Post page component
//  */
// const Post = ({ post, previewRef }) => {
//   useUpdatePreviewRef(previewRef, post.id);
//   return <p>Your page content</p>;
// };

// export async function getStaticProps({ params, previewData }) {
//   const previewRef = previewData ? previewData.ref : null;
//   const refOption = previewRef ? { ref: previewRef } : null;

//   const post = (await Client().getByUID("post", params.uid, refOption)) || {};
//   return {
//     props: {
//       previewRef,
//       post,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const documents = await queryRepeatableDocuments(
//     (doc) => doc.type === "post"
//   );
//   return {
//     paths: documents.map((doc) => `/${doc.uid}`),
//     fallback: true,
//   };
// }

const Post = () => {
  return "post";
};

export default Post;
