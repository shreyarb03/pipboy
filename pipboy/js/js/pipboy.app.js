$(document).ready(function(){
    console.log("loaded");
    var weapons = [
        {
         "name":"44-pistol",
         "damage":48,
         "fire-rate":6,
         "range":119,
         "accuracy":66,
         "weight":4.2,
         "value":99
        },
         {
         "name":"10mm-pistol",
         "damage":18,
         "fire-rate":46,
         "range":119,
         "accuracy":61,
         "weight":4.2,
         "value":53
        },
         {
         "name":"assault-rifle",
         "damage":30,
         "fire-rate":40,
         "range":119,
         "accuracy":72,
         "weight":13.1,
         "value":144
        },
    ]
    $('.item-list a').on('mouseover',function(e){
        var current_item=$(e.currentTarget).attr('class');
        console.log(current_item);
        for(item in weapons)
        {
            if(weapons[item].name == current_item){
                console.log(weapons[item]);
                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.range').html(weapons[item].range);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
            }
               
        }
    });
});