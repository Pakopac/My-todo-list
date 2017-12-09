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
        var popup = document.querySelector('.popup');
        link.setAttribute("href", "#link");
        linkBack.setAttribute("href", "index.html");
        addcolumns.appendChild(addTitle);
        addcolumns.appendChild(addDelete);
        addcolumns.appendChild(addTable);
        addcolumns.appendChild(addPopup);
        addcolumns.appendChild(link);
        popup.appendChild(linkBack);
        var text = document.createTextNode('task');
        var exit = document.createTextNode('X');
        var buttonAddTable = document.createTextNode('Add Table');
        var exitPopup = document.createTextNode('X');
        addTitle.appendChild(text);
        addDelete.appendChild(exit);
        addTable.appendChild(buttonAddTable);
        link.appendChild(addTable);
        addDelete.classList.add("delete");
        addTable.classList.add("btnAddTable");


        var close = document.querySelectorAll('.delete');
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                this.parentElement.remove(div);
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
    var inputTitle = document.querySelector('.inputTitle');
    var description = document.querySelector('.description');
    var buttonCreate = document.querySelector('.btnCreate');
    buttonCreate.onclick = function clearFields() {
        inputTitle.value = '';
        description.value = '';
    }
};