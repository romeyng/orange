import * as $ from 'jquery';
import 'datatables';

var dataset= [{
  "Ticket No": "48444",
  "DateCreated": "Jan 8, 2019",
  "Due Date": "Jan 10, 2019",
  "ClientName":"Grenadines Air",
  "TailNumber":"S5456",
  "Status":"Complete"                                      
},
{
  "Ticket No": "66545",
  "DateCreated": "Jan 8, 2019",
  "Due Date": "Jan 11, 2019",
  "ClientName":"Grenadines Air",
  "TailNumber":"S5456",
  "Status":"Complete"                                      
}]

export default (function () {
  $('#dataTable').DataTable({
    scrollX: true,
    data: dataset,
    columns: [{title: "Ticket No", data: "Ticket No"},
              {title: "DateCreated", data:"DateCreated"},
              {title: "Due Date", data:"Due Date"},
              {title: "ClientName", data:"ClientName"},
              {title: "TailNumber", data: "TailNumber"},
              {title: "Status", data:"Status"}]

    
} );

$(".dataTables_scrollHeadInner").css({"width":"100%"});
$(".table ").css({"width":"100%"});

}());
