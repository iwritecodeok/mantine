import React from "react";
import { HeaderMiddle } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ToolBar } from "../../components/ToolBar";
function Workshop() {
  return (
    <>
      <HeaderMiddle
        activeLink={{
          label: "Workshop",
          link: "http://localhost:3000/workshop",
        }}
        links={[
          {
            label: "About",
            link: "http://localhost:3000/",
          },
          {
            label: "Workshop",
            link: "http://localhost:3000/workshop",
          },
          {
            label: "Support",
            link: "http://localhost:3000/support",
          },
        ]}
      />
      <ToolBar />
      <Footer
        data={[
          {
            title: "About",
            links: [
              {
                label: "Features",
                link: "#",
              },
              {
                label: "Pricing",
                link: "#",
              },
              {
                label: "Support",
                link: "#",
              },
            ],
          },
        ]}
      />
    </>
  );
}

export default Workshop;
