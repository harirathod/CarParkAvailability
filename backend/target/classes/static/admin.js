var btns = document.querySelectorAll('.split-screen-ctnr .btn');

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        var selectedOption = document.getElementById('selector').value;
        var operation = button.textContent == "+" ? "add" : "subtract";

        const url = `/updateSpaces/${selectedOption}/${operation}`;

        const data = {
            name: selectedOption,
            operation: operation
        };

        const xhr = new XMLHttpRequest();
        xhr.open("PUT", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else {
                    console.log(xhr.statusText);
                }
            }
        }

        xhr.send(JSON.stringify({}));
    })
});



    
    
    
    
    
    
    



/**
 * 1. When a button is clicked, get the selected option and whether it's a plus or minus.
 * 2. Post the selectedOption and the textContent to the mapping.
 * 
 */

