/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

$(document).ready(function () {
    $.widget.bridge('uibutton', $.ui.button);

    $('#myTable').DataTable();
    
    $(function () {
        $('.bs-timepicker').timepicker();
    });
});



