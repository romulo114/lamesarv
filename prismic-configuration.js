// -- Prismic API endpoint
export const apiEndpoint = "https://lamesarv.cdn.prismic.io/api/v2";
// -- Access Token if the repository is not public
export const accessToken = "";

export const repoName = "lamesarv";

// -- Link resolution rules
export const linkResolver = (doc) => {
  console.log(doc);
  if (doc.type === "landing_page") {
    return `/`;
  }
  return "/";
};

// Additional helper function for Next/Link components
// export const hrefResolver = (doc) => {
//   if (doc.type === "page") {
//     return "/[uid]";
//   }
//   return "/";
// };
