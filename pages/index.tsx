import { Button, Group } from "@mantine/core";
import { HeaderMiddle } from "../components/Header";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { InfoSection } from "../components/InfoSection";
export default function IndexPage() {
  return (
    <>
    <HeaderMiddle activeLink={{
  "label": "About",
  "link": "http://localhost:3000/"}
}
    links={[
 {
  "label": "About",
  "link": "http://localhost:3000/"
},
{
  "label": "Workshop",
  "link": "http://localhost:3000/workshop"
},
{
  "label": "Support",
  "link": "http://localhost:3000/support"
},
  ]}/>
  <CallToAction />
  <InfoSection />
    <Footer data={[
    {
      "title": "About",
      "links": [
        {
          "label": "Features",
          "link": "#"
        },
        {
          "label": "Pricing",
          "link": "#"
        },
        {
          "label": "Support",
          "link": "#"
        },
      ]
    }
    // ,
    // {
    //   "title": "Project",
    //   "links": [
    //     {
    //       "label": "Contribute",
    //       "link": "#"
    //     },
    //     {
    //       "label": "Media assets",
    //       "link": "#"
    //     },
    //     {
    //       "label": "Changelog",
    //       "link": "#"
    //     },
    //     {
    //       "label": "Releases",
    //       "link": "#"
    //     }
    //   ]
    // },
    // {
    //   "title": "Community",
    //   "links": [
    //     {
    //       "label": "Join Discord",
    //       "link": "#"
    //     },
    //     {
    //       "label": "Follow on Twitter",
    //       "link": "#"
    //     },
    //     {
    //       "label": "Email newsletter",
    //       "link": "#"
    //     },
    //     {
    //       "label": "GitHub discussions",
    //       "link": "#"
    //     }
    //   ]
    // }
  ]}/>
    </>
    
  );
}
