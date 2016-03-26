(function () {


    "use strict";
    // Instantiate new xhr object
    var data_file = "scripts/app.json";
    var request = new XMLHttpRequest();
    request.open('GET', data_file, true);
    request.addEventListener('readystatechange', function () {
        // wait for file to finish loading
        if (request.readyState === 4) {
            var paragraph = {};

            // read in the json object
            paragraph = JSON.parse(request.responseText);


            // declare local paragraph array container
            var paragraphArray = [];

            // read in the paragraphs array from the json object
            paragraphArray = paragraph.paragraphs;

            //store
            var paragraphArrayLength = paragraphArray.length;
            //loop
            for (var number = 0; number < paragraphArrayLength; number++) {
                var paragraph = document.getElementById("myName" + (number + 1));
                myName.innerHTML = paragraphArray[number];

            }
        }
    });
    request.send();

})();