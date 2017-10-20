// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

var modals = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imge = document.getElementById('myImg1');
var modalImge = document.getElementById("img02");
var captionTexts = document.getElementById("caption1");
imge.onclick = function() {
    modals.style.display = "block";
    modalImge.src = src;
    captionTexts.innerHTML;
}

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
spans.onclick = function() {
    modals.style.display = "none";
}