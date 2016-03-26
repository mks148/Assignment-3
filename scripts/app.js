(function () {


    "use strict";
    // Instantiate new xhr object
    var paragraph_file = "scripts/intro.json";
    var request = new XMLHttpRequest();
    request.open('GET', paragraph_file, true);
    request.addEventListener('readystatechange', function () {
        // this will load file
        if (request.readyState === 4 && request.status === 200) {
            var intro = {};

            // json object
            intro = JSON.parse(request.responseText);


            // local array
            var introArray = [];

            // json object to read data
            introArray = intro.intros;

            //storing
            var introArrayLength = introArray.length;
            //looping
            for (var number = 0; number < introArrayLength; number++) {
                var intro = document.getElementById("one" + (number + 1));
                one.innerHTML = introArray[number];

            }
        }
    });
    request.send();

})();