
$(function(){

    let urlAPI = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;

   $.ajax({
    url : urlAPI,
    type : 'GET',
    dataType : 'json',
    success : function(data){
        let options = `<option value="">Selecione um estado</option>`;

        for (pos in data){
            options += `<option value="${data[pos].id}">${data[pos].nome}</option>`;
        }

        $('#estados').html(options)
        loading(50);
    }
   });

   // BUSCAR CIDADES APOS SELECIONAR ESTADO

   
   $(document).on('change', '#estados', function(){
       let idEstado = $(this).val();
       let urlCidade =  `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios?orderBy=nome`;
       
       $.ajax({
        url : urlCidade,
        type : 'GET',
        dataType : 'json',
        success : function(data){
            let option = `<option value "">Selecione a cidade</option>`;

            for (pos in data){
                option += `<option value"${data[pos].id}">${data[pos].nome}</option>`;
            }

            $('#cidades').html(option)
            loading(100);
        }
       });
   })

   
   function loading(progresso){
       ///loading
    
       $('.loading').animate({
        width: `${progresso}vw`
       }, {
        duration: 3000,
        step : function(percent){
            $('.loading').html(`${Math.round(percent)}%`)
        }
       })
       
   }

   $(document).on('submit','form', function(){
    $.ajax({

        url : `https://agenciamanadah.com.br/apiteste/add.php`,
        type : 'post',
        dataType : 'json',
        data : {
            nome : $('input[name="nome"]').val()
            
        },
        success : function(net){
            if(net.status == 'ok'){
                alert(net.message)
            }
        }
    })
    return false;
   })


})