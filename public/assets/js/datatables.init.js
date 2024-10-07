export const JqueryTable = (function () {
  
 
  let isLoaded=false;

  function initializeDataTable(tableId, ajaxUrl, columnsConfig,query) {
	if(isLoaded) return false;
	isLoaded=true;

	$(tableId).DataTable({
	  searching: true,
	  ordering: false,
	  paging: true,
	  language: {
		paginate: {
		  next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
		  previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
		},
	  },

	     serverSide: true, 
        processing: true, 
        ajax: function (data, callback, settings) {

		  const searchValue = data.search.value; 
          const page = Math.floor(data.start / data.length) + 1; // Current page number
          const pageSize = data.length; // Rows per page
        
          // Customize the data sent to the server
          let requestData = { 
            page: page,                
            pageSize: pageSize
          };

		  
		   if(searchValue!='') requestData[query]=searchValue
          $.ajax({
            url: ajaxUrl, 
			data: requestData,
            success: function (response) {
              callback({
                draw: data.draw,
                recordsTotal: response.length, 
                recordsFiltered: response.length, 
                data: response
              });
            }
          });
        },
	  columns: columnsConfig,
	});
  }

  
  function destory() {
    isLoaded = false;
  }


 
  return { initializeDataTable, destory };
})();
