function getGallery () {
    $.get("/api/gallery", renderGalleryList);
}

function renderGalleryList(data) {
     let rowsToAdd = [];
     for (let i = 0; i < data.length; i++){
        rowsToAdd.push(createGalleryRow(data[i]));
     }

     $("#gallery-list").empty();
     $("#gallery-list").prepend(rowsToAdd);
     console.log("getting rows")
}

function createGalleryRow(data) {
    var galleryOption = $("<a>");
        galleryOption.attr({"class": "btn list-group-item list-group-item-action",
                            "type": "button",
                            "href": `/collection?${data.name}`});
        galleryOption.text(data.name);
    return galleryOption;
}
getGallery();


var url = window.location.search;
var galleryName = url.split("?")[1];


function buildPage(){
    console.log(galleryName);
    $.get('/api/collection/' + galleryName, renderCollection)
}
buildPage();

function createArtworkDiv (data) {
    var artworkDiv = $("<div>");
        artworkDiv.attr({"class": "card"}).css("width", "18rem");

    var artworkImg = $("<img>");
        artworkImg.attr({"src": data.picture,
                         "class": "card-img-top",
                         "alt": "artwork"});

    var artworkTitle = $("<p>");
        artworkTitle.text(data.title).attr({"class": "card-text"});
    
    var artworkArtist = $("<p>");
        artworkArtist.text(data.artist).attr({"class": "card-text"});

    var artworkDate = $("<p>");
        artworkDate.text(data.date).attr({"class": "card-text"})

    artworkDiv.append(artworkImg);
    artworkDiv.append(artworkTitle);
    artworkDiv.append(artworkArtist);
    artworkDiv.append(artworkDate);

    return artworkDiv;
}

function renderCollection(data) {
    let artCols = [];
    for(let i = 0; i < data.length; i++){
        artCols.push(createArtworkDiv(data[i]));
    }
    $(".artWorks").empty();
    $(".artWorks").append(artCols);
}