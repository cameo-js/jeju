$(document).ready(function(){
    $(".todo_input").keyup(function(e) {
        if ( this.value != "" ){
            if(e.keyCode == 13){
                todo.add(this.value);
                this.value = "";
                todo.render();
            }
        }
    });

    background.initialize();
    clock.initialize();
});