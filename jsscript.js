let url = "https://davids-restaurant.herokuapp.com/menu_items.json";
$(document).ready(function(){
    var item_list=[];
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',function(){
    $.get(url,function(data,status){
        if(status.localeCompare("success")==0)
        {
            
            for(i in data.menu_items)
            {
                item_list.push(data.menu_items[i]);
                let id=data.menu_items[i].id;
                $('#menu_item_dpdo').append("<option value='"+id+"'>"+data.menu_items[i].name+"</option>");
                $("#menu_item_dpdo").formSelect();
            }
        }
    });
});
$("#menu_item_dpdo").change(function(){
    var item=$('#menu_item_dpdo').val();
    for(i in item_list){
        //if(item.localeCompare(item_list[i].name)==0)
        if(item==item_list[i].id)
        {
            $("#ch").empty();
            $("#ch").append("<h4>Description:</h5><table><tbody><tr><td><b>Short Name:</b></td><td>"+item_list[i].short_name+"</td></tr><tr><td><b>Name:</b></td><td>"+item_list[i].name+"</td></tr><tr><td><b>Description:</b></td><td>"+item_list[i].description+"</td></tr><tr><td><b>Price:</b></td><td><u><strong>Small:</strong></u>&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:14px; font-weight:bold;margin-right:4px;'>&#8377;</span>"+item_list[i].price_small+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><strong>Large:</strong></u>&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:14px; font-weight:bold;margin-right:4px;'>&#8377;</span>"+item_list[i].price_large+"</td></tr></tbody></table>");
        }
    }
});
});