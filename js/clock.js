var clock = (function(){
    var options = {
         month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false
    };
    function initialize(){
        setInterval(render, 1000);
    }
    function render(){
        var date = new Date();
        $('#clock').html(date.toLocaleTimeString("en-US", options));
    }
    return {
        initialize : function(){
            initialize();
        }
    };
})();