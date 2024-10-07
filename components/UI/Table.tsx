"use client";

import Script from "next/script";
import React from "react";
import { useEffect } from "react";

import "@/public/assets/css/jquery.dataTables.min.css";
import {JqueryTable} from "@/public/assets/js/datatables.init.js"

type DataTableColumn<T> = {
  title: string;
  data: keyof T;
  action?:string
};

interface GenericDataTableProps<T> {
  columns: DataTableColumn<T>[];
  apiUrl: string;
  query?:string;
}



const JQuerytable = <T extends Record<string, unknown>>({
  columns,
  apiUrl,
  query
}: GenericDataTableProps<T>) => {
  useEffect(() => {
    setTimeout(function () {
      JqueryTable.initializeDataTable("#TableJQuery", apiUrl, columns,query);
    }, 300);

    return () => {
      setTimeout(function () {
        JqueryTable.destory();
      }, 100);
    };
  }, [apiUrl, columns]);

  return (
    <>
      <Script
        src="/assets/js/jquery.dataTables.min.js"
        strategy="afterInteractive"
      />

      
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">All Leads</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
               
                <table
                  id="TableJQuery"
                  className="display"
                  style={{ minWidth: "845px" }}
                >
                  <thead>
                    <tr>
                      {columns.map((col) => (
                        <th key={String(col.data)}>{col.title}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JQuerytable;
