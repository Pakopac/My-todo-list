window.onload = function(){
    document.querySelector('#add').onclick = function() {
        var addcolumns = document.createElement("div");
        document.getElementById('columns').appendChild(addcolumns);
        addcolumns.classList.add("column");


        var addDelete = document.createElement("button");
        var addTitle = document.createElement('span');
        var addTable = document.createElement("button");
        var link = document.createElement("a");
        var linkBack = document.createElement("a");
        var popup = document.querySelector('.popup');
        link.setAttribute("href", "#link");
        linkBack.setAttribute("href", "index.html");
        addTitle.setAttribute("contenteditable", "true");
        addcolumns.appendChild(addDelete);
        addcolumns.appendChild(addTitle);
        addcolumns.appendChild(addTable);
        addcolumns.appendChild(link);
        popup.appendChild(linkBack);
        var text = document.createTextNode('task');
        var exit = document.createTextNode('X');
        var buttonAddTable = document.createTextNode('Add Table');
        addTitle.appendChild(text);
        addDelete.appendChild(exit);
        addTable.appendChild(buttonAddTable);
        link.appendChild(addTable);
        addDelete.classList.add("delete");
        addTable.classList.add("btnAddTable");
        addTitle.classList.add("title");


        var close = document.querySelectorAll('.delete');
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function remove() {
                var div = this.parentElement;
                this.parentElement.remove(div);
            };
        }

        var btnTable = document.querySelectorAll('.btnAddTable');
        var inputTitle = document.querySelector('.inputTitle');
        var description = document.querySelector('.description');
        var takeColumn = document.querySelectorAll('.column');
        for (var j = 0; j < takeColumn.lenght; j++ ) {
        };
        for (var i = 0; i < btnTable.length; i++) {
            btnTable[i].onclick = function clearFields() {
                var createTable = document.createElement("div");
                takeColumn[j].append(createTable);
                createTable.classList.add("Table");
                inputTitle.value = '';
                description.value = '';
                var create = document.querySelector('.btnCreate');
                var AllTable = document.querySelectorAll('.Table');
                create.onclick = function createNewTable() {
                    createTable.style.display = "block";
                    createTable.innerHTML = '<span class="title">' + inputTitle.value + '<br><span class ="descr">' + description.value;
                       createTable.appendChild(addDelete);

                };
            };
        };


    };






};