menuListArray = ["Vegetariana", "Calabresa", "Portuguesa" , "Quatro queijos" , "Frango" , "Frango e catupiry"];
function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i = 0; i<menuListArray.length; i++){
        htmldata = htmldata + 'Pizza ' + menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}
function addItem(){
    var htmldata;
    var imgtags = '<img id = "im1" src="pizzaImg.png"/>' 
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata=""
    for(var i=0; i<menuListArray.length; i++){
        htmldata=htmldata + imgtags + menuListArray[i] + '<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}
function addTop(){
    var item= document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}