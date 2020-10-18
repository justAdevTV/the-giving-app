import { Banner } from "../components";
import {
  DownloadPreview,
  HomeBannerContent,
  MakeADifference,
} from "../features";
import { Home as HomeTemplate } from "../templates";

// Main Page
function Home() {
  // Redirects user to page
  const handleRedirectClick = () => {};

  // Scrolls user down to next section
  const handleScrollDownClick = () => {};

  return (
    <HomeTemplate
      banner={
        <Banner backgroundImage="/images/home_banner.jpg">
          <HomeBannerContent
            onRedirectClick={handleRedirectClick}
            onScrollDownClick={handleScrollDownClick}
          />
        </Banner>
      }
      difference={<MakeADifference />}
      download={<DownloadPreview onDownloadClick={handleRedirectClick} />}
      helpInfo={null}
      contact={null}
    />
  );
}

export default Home;
