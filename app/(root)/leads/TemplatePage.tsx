

'use client'
import React, { useEffect } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const JQuerytable = dynamic(() => import("@/components/UI/Table"));


const columns = [
  { title: "PostId", data: "postId" },
  { title: "Id", data: "id" },
  { title: "Name", data: "name" },
  { title: "Email", data: "email" },
  { title: "Body", data: "body" },
  {
    title: "Action",
    data:'action',
    render: function (_data: unknown, _type: unknown, row: { id: number; }) {
      // You can customize the buttons based on row data or conditions
      const editButton = `<div class="action-buttons d-flex justify-content-end">
											
												<div href="" class="btn btn-secondary light mr-2" onclick="create(${row.id})">
													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<rect x="0" y="0" width="24" height="24"></rect>
															<path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "></path>
															<rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"></rect>
														</g>
													</svg>
												</div>
												
											</div>`;
      
     
      return `${editButton}`; // Show both buttons
  }
  },
];



const TemplatePage = () => {
  const router = useRouter();
  function create(){
   router.push('/leads/create');
  }  

  useEffect(() => {
    window.create = create;
}, []);

  return (
    <div className="container-fluid">
      <div className="row page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/home">Home</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link href="/leads">Leads</Link>
          </li>
        </ol>
      </div>

      <JQuerytable columns={columns} apiUrl="https://jsonplaceholder.typicode.com/comments" query='postId'  />
    
    </div>
  );
};

export default TemplatePage;
