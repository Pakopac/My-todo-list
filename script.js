window.onload = function(){
    document.querySelector('#add').onclick = function(){
        var addcolumns = document.createElement("div");
        document.getElementById('columns').appendChild(addcolumns);
        addcolumns.classList.add("column");

        var addTitle = document.createElement("p");
        var addDelete = document.createElement("button");
        var addText = document.createElement("input");
        var addDescription = document.createElement("textarea");
        addcolumns.appendChild(addTitle);
        addcolumns.appendChild(addDelete);
        addcolumns.appendChild(addText)
        addcolumns.appendChild(addDescription);
        var text = document.createTextNode('task');
        var exit = document.createTextNode('X');
        addTitle.appendChild(text);
        addDelete.appendChild(exit);
        addDelete.classList.add("delete");
        addText.classList.add("name");

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