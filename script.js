window.onload = function(){
    document.querySelector('#add').onclick = function(){
        var addcolumns = document.createElement("div");
        document.getElementById('columns').appendChild(addcolumns);
        addcolumns.classList.add("column");

        var addTitle = document.createElement("p");
        var addDelete = document.createElement("button");
        var addTable = document.createElement("button");
        var addPopup = document.createElement("div");
        var link = document.createElement("a");
        var deletePopup = document.createElement("div");
        link.setAttribute("href", "#link");
        addcolumns.appendChild(addTitle);
        addcolumns.appendChild(addDelete);
        addcolumns.appendChild(addTable);
        addcolumns.appendChild(addPopup);
        addcolumns.appendChild(link);
        addPopup.appendChild(deletePopup);
        var text = document.createTextNode('task');
        var exit = document.createTextNode('X');
        var buttonAddTable = document.createTextNode('Add Table');
        addTitle.appendChild(text);
        addDelete.appendChild(exit);
        addTable.appendChild(buttonAddTable);
        link.appendChild(addTable);
        addDelete.classList.add("delete");
        addTable.classList.add("btnAddTable");

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