import { Client } from "../utils/prismicHelpers";
import { SliceZone } from "../components/SlicesHome";

const LandingPage = ({ page }) => {
  // console.log(page);
  if (!Boolean(page) || !Boolean(page.data)) return;
  return (
    <div>
      <SliceZone sliceZone={page.data.body} />
    </div>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();

  const page =
    (await client.getByUID("landing_page", "home", ref ? { ref } : null)) || {};

  return {
    props: {
      page,
      preview,
    },
  };
}

export default LandingPage;
