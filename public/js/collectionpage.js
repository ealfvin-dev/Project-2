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
    var galleryOption = $("<button>");
        galleryOption.attr({"class": "list-group-item list-group-item-action",
                            "type": "button"});
        galleryOption.text(data.name);
    return galleryOption;
}
getGallery();