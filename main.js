menuListArray = ["Pizza Vegetariana", "Pizza de calabresa", "Pizza portuguesa" , "Pizza quatro queijos" , "Pizza de frango" , "Pizza de frango e catupiry"];
function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i = 0; i<menuListArray.length; i++){
        htmldata = htmldata + menuListArray[i] + '<br>'
    }
    document.getElementById0("displayMenu").innerHTML = htmldata;
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