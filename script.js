window.onload = function(){
    document.querySelector('#add').onclick = function(){
        var addcolumns = document.createElement("div");
        document.getElementById('columns').appendChild(addcolumns);
        addcolumns.classList.add("column");
        function createElementFunction( typeElem) {
           return document.createElement(typeElem);
        }



        var addTitle = createElementFunction('p');
        var addDelete = document.createElement("button");
        var addTable = document.createElement("button");
        var addPopup = document.createElement("div");
        var link = document.createElement("a");
        var linkBack = document.createElement("a");
        var deletePopup = document.createElement("button");
        var popup = document.querySelector('.popup');
        link.setAttribute("href", "#link");
        linkBack.setAttribute("href", "index.html");
        addcolumns.appendChild(addTitle);
        addcolumns.appendChild(addDelete);
        addcolumns.appendChild(addTable);
        addcolumns.appendChild(addPopup);
        addcolumns.appendChild(link);
        popup.appendChild(linkBack);
        popup.appendChild(deletePopup);
        var text = document.createTextNode('task');
        var exit = document.createTextNode('X');
        var buttonAddTable = document.createTextNode('Add Table');
        var exitPopup = document.createTextNode('X');
        addTitle.appendChild(text);
        addDelete.appendChild(exit);
        addTable.appendChild(buttonAddTable);
        link.appendChild(addTable);
        linkBack.appendChild(deletePopup);
        deletePopup.appendChild(exitPopup);
        addDelete.classList.add("delete");
        addTable.classList.add("btnAddTable");
        deletePopup.classList.add("deletePopup");

        
        var close = document.querySelectorAll('.delete');
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            };
        }


        var removePopup = document.querySelectorAll('.deletePopup');
        for (var j = 0; j < removePopup.length; j++ ) {
            removePopup[j].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            };
        }

    };

};