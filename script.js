window.onload = function(){
    document.querySelector('#add').onclick = function(){
        var addcolumns = document.createElement("div");
        document.body.appendChild(addcolumns);
        addcolumns.classList.add("column");
    };
}