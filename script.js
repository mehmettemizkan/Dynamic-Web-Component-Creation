// col-4 attributes start

document.getElementById("componentAttributes").style.display = "none";

function select() {
    document.getElementById("componentAttributes").style.display = "block";

    var selectComponent = document.getElementById("selectComponent").value
    document.getElementById("bgAttributes").style.display = (selectComponent == "Image" ? "none" : "block")
    document.getElementById("textAttributes").style.display = (selectComponent == "Image" ? "none" : "block")
    document.getElementById("textColorAttributes").style.display = (selectComponent == "Image" ? "none" : "block")
    document.getElementById("buttonSizeAttributes").style.display = (selectComponent == "Button" ? "block" : "none")
    document.getElementById("inputAttributes").style.display = (selectComponent == "Input" ? selectInputType() : "none")
    document.getElementById("imageAttributes").style.display = (selectComponent == "Image" ? "block" : "none")
    document.getElementById("linkAttributes").style.display = (selectComponent == "Link" ? "block" : "none")
    document.getElementById("divAttributes").style.display = (selectComponent == "Div" ? "block" : "none")
    document.getElementById("headerAttributes").style.display = (selectComponent == "Header" ? "block" : "none")
}
// col-4 attributes end

// Component Selection Start
// id start
let listItem = document.createElement("option"); // bir option etiketi oluşturup listItem değişkenine atadık
let itemText = document.createTextNode("component"); // component stringini itemtext değişkenine atadık
listItem.appendChild(itemText); //option.component şeklinde bir etiket oluşturmuş olduk
document.getElementById("componentId").append(listItem); // kullanıcının oluşturacağı id stringini componentId ile oluşturmuş olduğumuz selecte ekliyoruz.
// id end

function create() {
    let listItem = document.createElement("option");
    let itemText = document.createTextNode(document.getElementById("addId").value);
    listItem.appendChild(itemText);
    document.getElementById("componentId").append(listItem);

    let selectComponent = document.getElementById("selectComponent").value;
    let componentId = document.getElementById("componentId").value;

    switch (selectComponent) {
        case "Div":
            document.getElementById(componentId).append(addDiv());
            break;
        case "P":
            document.getElementById(componentId).append(addP());
            break;
        case "Header":
            document.getElementById(componentId).append(addHeader());
            break;
        case "Button":
            document.getElementById(componentId).append(addButton());
            break;
        case "Link":
            document.getElementById(componentId).append(addLink());
            break;
        case "Input":
            document.getElementById(componentId).append(addInput());
            break;
        case "Image":
            document.getElementById(componentId).append(addImage());
            break;
    }
}

function addDiv() {
    var bgColor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;
    var text = document.getElementById("text").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;


    var div = document.createElement("div");
    div.setAttribute("id", addId);
    div.setAttribute("class", `${addClass} ${textColor} ${bgColor}`)
    div.textContent = text;

    return div;
}

function addP() {
    var bgColor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;
    var text = document.getElementById("text").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;

    var p = document.createElement("p");
    p.setAttribute("id", addId);
    p.setAttribute("class", `${addClass} ${textColor} ${bgColor}`)
    p.textContent = text;

    return p;
}

function addHeader() {
    var bgColor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;
    var text = document.getElementById("text").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    var headerNumber = document.getElementById("headerNumber").value;

    var header = document.createElement(headerNumber);
    header.setAttribute("id", addId);
    header.setAttribute("class", `${addClass} ${textColor} ${bgColor}`);
    header.textContent = text;

    return header;
}

function addButton() {
    var bgColor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;
    var text = document.getElementById("text").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    var buttonSize = document.getElementById("buttonSize").value;

    var button = document.createElement("button");
    button.setAttribute("id", addId);
    button.setAttribute("class", `btn ${addClass} ${textColor} ${bgColor} ${buttonSize}`);
    button.textContent = text;

    return button;
}

function addLink() {
    var bgColor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;
    var text = document.getElementById("text").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    var addLink = document.getElementById("addLink").value;
    var linkTarget = document.getElementById("linkTarget").value;

    var link = document.createElement("a");
    link.setAttribute("id", addId);
    link.setAttribute("class", `${addClass} ${textColor} ${bgColor}`)
    link.setAttribute("href", `${addLink}`);
    link.setAttribute("target", `${linkTarget}`);
    link.textContent = text;

    return link;
}

function addInput() {
    var bgColor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;
    var text = document.getElementById("text").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    var addInputType = document.getElementById("addInputType").value;

    var input = document.createElement("input");
    input.setAttribute("id", addId);
    input.setAttribute("class", `${addClass} ${textColor} ${bgColor}`)
    input.setAttribute("type", `${addInputType}`);
    input.textContent = text;

    return input;
}

function addImage() {
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    var addImageSource = document.getElementById("addImageSource").value;

    var image = document.createElement("img");
    image.setAttribute("id", addId);
    image.setAttribute("class", `${addClass} ${textColor} ${bgColor}`);
    image.setAttribute("src", `${addImageSource}`);

    return image;
}

function selectInputType() {
    var inputType = document.getElementById("addInputType").value;

    document.getElementById("bgAttributes").style.display = (inputType == "color" ? "none" : "block");
    document.getElementById("textAttributes").style.display = (inputType == "color" || inputType == "datetime-local" ? "none" : "block");
    document.getElementById("textColorAttributes").style.display = (inputType == "color" ? "none" : "block");
    document.getElementById("buttonSizeAttributes").style.display = (inputType == "button" ? "block" : "none");
    document.getElementById("inputAttributes").style.display = "block"
    document.getElementById("imageAttributes").style.display = "none"
    document.getElementById("linkAttributes").style.display = "none"
}

// Component Selection End