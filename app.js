var inputs = ["name","fatherName","class"];
var rowToUpdate;
var updateBtn;

function Student(name, fatherName, Class) {
    this.name = name
    this.fatherName = fatherName
    this.clas = Class
}


let submit = () => {
    
        //getting Values from input field

        var name = document.getElementById('name').value;
        var fatherName = document.getElementById('fatherName').value;
        var clas = document.getElementById('class').value;
        if (name!= "" && fatherName != "" && clas != "") {
        //creating object for Student ...
        var student1 = new Student(name, fatherName, clas)

        var table = document.getElementById('tab');


        //creating DOM Element Table ==> column1
        var col1 = document.createElement('td');
        var col1Text = document.createTextNode(student1.name);
        col1.appendChild(col1Text);

        //creating DOM Element Table ==> column2
        var col2 = document.createElement('td');
        var col2Text = document.createTextNode(student1.fatherName);
        col2.appendChild(col2Text);

        //creating DOM Element Table ==> column3
        var col3 = document.createElement('td');
        var col3Text = document.createTextNode(student1.clas);
        col3.appendChild(col3Text);



        var deleteBtn = document.createElement('button');
        var deleteText = document.createTextNode('DELETE');
        deleteBtn.setAttribute('onclick', 'deleleRecord(this)');
        deleteBtn.setAttribute('class', 'smallBtn');
        deleteBtn.appendChild(deleteText);

        var updateBtn = document.createElement('button');
        var updateText = document.createTextNode('UPDATE');
        updateBtn.setAttribute('onclick', 'updateRecord(this)');
        updateBtn.setAttribute('class', 'smallBtn');
        updateBtn.appendChild(updateText);



        //creating DOM Element Table ==> column4
        var col4 = document.createElement('td');
        col4.appendChild(deleteBtn);
        col4.appendChild(updateBtn);

        var row = document.createElement('tr');
        row.setAttribute('class', 'row')

        row.appendChild(col1)
        row.appendChild(col2)
        row.appendChild(col3)
        row.appendChild(col4)


        table.appendChild(row)

            
        for (var i = 0; i < 3; i++) {

            document.getElementById(inputs[i]).value = "";
        }
    }else{
        alert("Please Fill out the Fields");
    }


}

function deleleRecord(e) {
    e.parentNode.parentNode.remove()
}

function updateRecord(e) {
    updateBtn= e;
    rowToUpdate = e.parentNode.parentNode;
    console.log(e);

    for (var i = 0; i < 3; i++) {

        var value = e.parentNode.parentNode.childNodes[i].innerHTML;
        document.getElementById(inputs[i]).value = value;
    }
    var btn = document.getElementById('btn');
    btn.innerHTML = "UPDATE";
    btn.removeAttribute('onclick');
    btn.setAttribute('onclick', 'UPDATE(this);');
    e.style.display="none";


}

function UPDATE(e) {
    for (var i = 0; i < 3; i++) {

        rowToUpdate.childNodes[i].innerHTML = document.getElementById(inputs[i]).value;
        document.getElementById(inputs[i]).value = "";
    }

    e.innerHTML = "SUBMIT";
    e.removeAttribute('onclick');
    e.setAttribute('onclick', 'submit()');
    updateBtn.style.display="block";

}