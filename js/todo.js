var todo = (function(){
    var storageKey = "todo";
    var list = [];

    initialize();

    function initialize(){
        if( !localStorage.getItem(storageKey) ){
            localStorage.setItem(storageKey,"[]");
        }
        render();
    }
    function render(){
        list = JSON.parse(localStorage.getItem(storageKey));
        $(".todo_count").html(list.length);
        $('#todo ul').empty();
        $.each(list, function(i, val){
            $('#todo ul').append('<li>' + val + ' <a href="javascript:;" class="todo_remove">x</a></li>');
        });
        addEvent();
    }
    function addEvent(){
        $('#todo ul a').click(function(e){
            list.splice($(this).parent().index(),1);
            $(this).parent().remove();
            save();
            render();
        });
    }
    function save(){
        var data = '["'+list.join('","')+'"]';
        if ( list.length == 0 ){
            data = '[]';
        }
        localStorage.setItem(storageKey, data);
    }

    return {
        render : function(){
            render();
        },
        add : function(data){
            list.push(data);
            save();
        }
    };
})();