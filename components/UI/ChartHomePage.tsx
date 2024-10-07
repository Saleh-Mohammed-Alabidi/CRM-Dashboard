"use client";

import Script from "next/script";
import React from "react";
import { useEffect } from "react";
import {ChartHomePage} from "@/public/assets/js/statistics-page.js"

const Chart = () => {
  useEffect(() => {
    setTimeout(function () {
      ChartHomePage?.refersh();
    }, 500);

    return () => {
      setTimeout(function () {
        ChartHomePage?.destory();
      }, 100);
    };
  }, []);

  return (
    <>
      <Script src="/assets/js/apexchart.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/chart.bundle.min.js"
        strategy="afterInteractive"
      />
     
    </>
  );
};

export default Chart;
