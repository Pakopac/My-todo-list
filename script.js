window.onload = function(){
    document.querySelector('#add').onclick = function(){
        var addcolumns = document.createElement("div");
        document.getElementById('columns').appendChild(addcolumns);
        addcolumns.classList.add("column");

        var addTitle = document.createElement("p");
        var addDelete = document.createElement("button");
        addcolumns.appendChild(addTitle);
        addcolumns.appendChild(addDelete);
        var text = document.createTextNode('titre');
        var exit = document.createTextNode('X');
        addTitle.appendChild(text);
        addDelete.appendChild(exit);
        addDelete.classList.add("delete");

        function remove() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
        var task = document.querySelectorAll('.column');
        var button = document.querySelectorAll('.delete');
        for (var i = 0; i < task.length; i++) {
            button[i].addEventListener('click', remove, false);
        }

    };

};