$(function(){
    $("#item-menu-proveedor").click(function(e){
        e.preventDefault();
        fetch('proveedor.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(datoshtml) {
            //console.log(datoshtml);
            $("#main-content").html(datoshtml);
        });
    })
})

