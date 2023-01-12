import React from "react";
import { Group, Container } from '@mantine/core';
import { HeaderMiddle } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ToolBar } from "../../components/ToolBar";
import { FAQ } from "../../components/FAQ";
import { ContactUs } from "../../components/ContactUs";
function Workshop() {
  return (
    <>
      <HeaderMiddle
      activeLink={
        {
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
    <FAQ/>
    <Container size={500} my={40}>
    <Group grow mb="md" mt="md">
    <ContactUs/>
    </Group></Container>
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