$('.accordion-button').on('keydown',function (e) {
 
 
     $('.accordion-collapse').collapse("toggle")
    
     
   })
   $('.tabel-table').on('keydown','tr td',function (e) {
    var keyCode = e.keyCode;
    if (keyCode !== 9) return;

    var $this = $(this),
        $lastTr = $('tr:last', $('table')),
        $lastTd = $('td:last', $lastTr);

    
    if (($(e.target).closest('td')).is($lastTd)) {
     

        $lastTr.after($lastTr.clone());
      
    }
    
});

$('.accordion-button').on('keydown',function (e) {
 
 
    $('.accordion-collapse').collapse("toggle")
   
    
  })
