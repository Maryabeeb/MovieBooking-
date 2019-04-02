$(function (){

    $('#btnSave').on('click',function(){
        $('#formDiv').show();
        $('#display').hide();
    })
    
    $('#btnSave2').on('click',function(){
        $('#display').show();
        $('#formDiv').hide();
    })

    $('#btntoggle').on('click',function(){
        $('#form').toggle();
        
    })
})

