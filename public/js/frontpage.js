$(document).ready(function() {
$("#runButton").on("click", getArt);

getArt();

function getArt() {
    const idsUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

    //Get a list of all valid art object ids
    $.ajax({
        method: "GET",
        url: idsUrl
    }).then(function(idResponse) {
        const numIds = idResponse.total;

        getItem(numIds);

        function getItem(numIds){
            const randIndex = Math.floor(Math.random()*numIds);
            const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + idResponse.objectIDs[randIndex];

            $.ajax({
                method: "GET",
                url: url
            }).then(function(response) {
                let image = "";
                try {
                    image = response.primaryImageSmall;
                }
                catch (error) {
                    //pass (primaryImageSmall does not exist)
                }

                if(image != "") {
                    artObject = response;

                    $("#image").attr("src", artObject.primaryImageSmall);
                    $("#title").text(artObject.title);
                    $("#artist").text(artObject.artistDisplayName);
                    $("#date").text(artObject.objectDate);

                    return;
                }
                getItem(numIds);
            });
        };
    });

    let gallery = "";

    $("#addGallery").on('click', function(event) {
        event.preventDefault();
        gallery = $('galleryName').val();
        console.log(gallery);
    });

    $("#save").on('click', function(event) {
        event.preventDefault();
        let newPiece = {
            picture: $("#image").attr("src"),
            title: $("#title").text(),
            creator: $("#artist").text(),
            date: $("date").text(),
            gall: gallery
        }

        $.ajax("/api/collection",{ //will need to make the table change with form entry
            method: "POST",
            data: newPiece
        }).then(() => {
            console.log("added art piece to table");
        })
    })

};
})