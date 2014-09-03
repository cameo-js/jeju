var background = (function(){
    var list = ["02-1.jpg","02-2.jpg","03-1.jpg","03-2.jpg","04-1.jpg","04-2.jpg",
                "05-1.jpg","05-2.jpg","06-1.jpg","06-2.jpg","07-1.jpg","07-2.jpg",
                "08-1.jpg","08-2.jpg","09-1.jpg","09-2.jpg","11-1.jpg","11-2.jpg",
                "12-1.jpg","12-2.jpg"];
    return {
        initialize : function(){
            var rand = Math.floor((Math.random() * list.length))
            $('#background').css("background-image", "url(images/"+list[rand]+")");
        }
    };
})();