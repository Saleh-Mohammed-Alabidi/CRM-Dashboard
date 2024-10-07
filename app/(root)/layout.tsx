import NavHeader from "@/components/NavHeader/NavHeader";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";
import Script from "next/script";
import { sidebarLinks } from "@/constants/sidebarLinks";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="/assets/js/global.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/dlabnav-init.js" strategy="afterInteractive" />
      <Script src="/assets/js/picker.js" strategy="afterInteractive" />
      <Script src="/assets/js/picker.date.js" strategy="afterInteractive" />
      <Script src="/assets/js/pickadate-init.js" strategy="afterInteractive" />
      

      <div id="main-wrapper" className="show">
        <NavHeader />
        <SideBar sidebarLinks={sidebarLinks} />
        <div className="content-body">{children}</div>
      </div>
    </>
  );
}
