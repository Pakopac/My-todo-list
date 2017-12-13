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
        linkBack.setAttribute("href", "#");
        addTitle.setAttribute("contenteditable", "true");
        addcolumns.appendChild(addDelete);
        addcolumns.appendChild(addTitle);
        addcolumns.appendChild(addTable);
        var text = document.createTextNode('task');
        var exit = document.createTextNode('X');
        var buttonAddTable = document.createTextNode('Add Table');
        addTitle.appendChild(text);
        addDelete.appendChild(exit);
        addTable.appendChild(buttonAddTable);
        addDelete.classList.add("delete");
        addTable.classList.add("btnAddTable");
        addTitle.classList.add("titleTask");


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
        var task = document.querySelectorAll('.titleTask');
        var btnChange = document.querySelectorAll('.btnChange');


        for (var i = 0; i < btnChange.length; i++){
        };
            btnTable[i].onclick = function NewTable() {
                var createTable = document.createElement("div");
                createTable.classList.add("Table");
                var createInputTitle = document.createElement("input");
                createInputTitle.setAttribute("type", "text");
                createInputTitle.classList.add("inputTitle");
                takeColumn[i].appendChild(createTable);
                createTable.appendChild(createInputTitle);
                var createdescription = document.createElement("textarea");
                createdescription.classList.add("inputDescription");
                createTable.appendChild(createdescription);
                var createButton = document.createElement("button");
                var textButton = document.createTextNode('Enter');
                createTable.appendChild(createButton);
                createButton.appendChild(textButton);
                createButton.classList.add("createButton");

                createButton.onclick = function GetValueOnTable(){
                    createInputTitle.style.display = "none";
                    createdescription.style.display = "none";
                    createButton.style.display = "none";
                    takeColumn[i].appendChild(link);
                    link.appendChild(createTable);
                    createTable.innerHTML = '<span class="title">' + createInputTitle.value + '</span><br><span class ="descr">' + createdescription.value + '</span>';
                    createTable.onclick = function displayPopup() {
                            var popUp = document.querySelector('.popup');
                            popUp.style.display = "block";
                            popUp.innerHTML = '<a href="#"><button class="leavePopup">X</button></a><span class="task">'+ task[i].value +
                            '</span><br><input type="text" class="titlePopUp" value="'+ createInputTitle.value +'"><br><textarea class="descriptionPopUp">'
                            + createdescription.value+'</textarea><br><a href="#"><button class="btnChange">Change</button></a>';

                        btnChange.onclick = function changeTable(){
                            console.log('ok');
                            createTable.innerHTML = "";
                            var titlePopUp = document.querySelector('.titlePopUp');
                            var descriptionPopUp = document.querySelector('.descriptionPopUp');
                            var title = document.querySelector('.title');
                            var descr = document.querySelector('.descr');
                            createTable.innerHTML = '<span class="title">' + titlePopUp.value + '</span><br><span class ="descr">' + descriptionPopUp.value + '</span>';
                        };
                    };


                    };



                };
            };

};