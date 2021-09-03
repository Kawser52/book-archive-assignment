// fetch Data
document.getElementById('error-message').style.display = 'none';
const loadBook =()=>{
    const getInputData= document.getElementById('search-input');
    const inputValue = getInputData.value;
    getInputData.value = '';
    document.getElementById('error-message').style.display = 'none';
    if(inputValue === ''){
        document.getElementById('error-message').style.display = 'block';
    } else{
    const url = `http://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data))
    }
   
}

// Search Result Section
const searchResult = bookinfo =>{
    const booksDetails = bookinfo.docs;
    let bookNumber = bookinfo.numFound;
    let searchBookNumber = document.getElementById('result-section');
    searchBookNumber.innerHTML = `<h4>Total Search Result:${bookNumber}</h4>`
     const clearData= document.getElementById('book-show');
    clearData.textContent = '';
    booksDetails.forEach(details => {
        const bookDesign = document.getElementById('book-show');
        const div = document.createElement('col-md-4');
        div.innerHTML = `
                <div class="card mt-3" style="width: 18rem;">
                    <img class="card-img-top" src="https://covers.openlibrary.org/b/id/${details.cover_i}-M.jpg"  class="img-fluid" alt="Card image cap" width ='100' height = '350';>
                    <div class="card-body">
                        <h5 class="card-title">${details.title}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class='list-style'>Author : </span>${details.author_name}</li>
                        <li class="list-group-item"><span class='list-style'>Published Date : </span>${details.publish_date}</span></li>
                        <li class="list-group-item"><span class='list-style'>First Published Date: </span>${details.first_publish_year}</li>
                    </ul>
                </div>

        `
        bookDesign.appendChild(div);

    });
}

function errorCheck(){

};