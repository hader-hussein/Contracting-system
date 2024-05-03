$('.accordion-button').on('keydown',function (e) {
 
 
     $('.accordion-collapse').collapse("toggle")
    
     
   })
   $('.tabel-table').on('keydown','tr td',function (e) {
    var keyCode = e.keyCode;
    if (keyCode !== 9) return;

    var $this = $(this),
        $lastTr = $('tr:last', $('.tabel-table')),
        $lastTd = $('td:last', $lastTr);

    
    if (($(e.target).closest('td')).is($lastTd)) {
     

        $lastTr.after($lastTr.clone());
      
    }
    
});

$('.accordion-button').on('keydown',function (e) {
 
 
    $('.accordion-collapse').collapse("toggle")
   
    
  })
  function addField(n)
  {
      var tr = n.parentNode.parentNode.cloneNode(true);
      document.getElementById('tbl').appendChild(tr);
      var removeButton = tr.getElementsByTagName("button")[1];
      removeButton.parentNode.removeChild(removeButton);
    
  }
  $(document).ready(function(){
    $("#my_table").on('click','.btnDelete',function(){
        $(this).closest('tr').remove();
     });
     
 });