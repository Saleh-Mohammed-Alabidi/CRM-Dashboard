import NavHeader from "@/components/NavHeader/NavHeader";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";
import Script from "next/script";
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
        <SideBar />
        {children}
      </div>
    </>
  );
}
