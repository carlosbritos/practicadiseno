var listItems = {

  listAll: function(){
      for (var i = 0; i < listItems.items.length; i++ ){
          $('.puntos').append(listItems.assamble(listItems.items[i]))
      }
},

  assamble: function(a){
      return '<div class="contPuntos row">'
      + '<img src="'+ a.imagen +'" alt="aconcagua" class="col-xs-3">'
      + '<div class="infoPuntos col-xs-9">'
      + '<p>' + a.nombre +'</p>'
      + '<p>' + a.direccion + '</p>'
      + '</div>'
      + '</div>'
},
  
  setItems: function(b){
      listItems.items = b;
  },

  items: [],

}

listItems.setItems(elementsList);
listItems.listAll();

$(document).ready(function(){

  $('#despPopUp').on('click',function(){
    $('.abrirPopUp').toggleClass('active');
  })

  $('.fondoNegro').on('click',function(){
    $('.abrirPopUp').toggleClass('active');
  })

  $('#close').on('click',function(){
    $('.abrirPopUp').toggleClass('active');
  })





})

