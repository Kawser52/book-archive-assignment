const loadBook =()=>{
    const getInputData= document.getElementById('search-input');
    const inputValue = getInputData.value;
    getInputData.value = '';
    const url = `http://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data))
}
const searchResult = bookinfo =>{
    console.log(bookinfo);
    const booksDetails = bookinfo.docs;
    let bookNumber = bookinfo.numFound;
    let searchBookNumber = document.getElementById('result-section');
    searchBookNumber.innerHTML = `<h4>Total Search Result:${bookNumber}</h4>`
    
    booksDetails.forEach(details => {
        console.log(details.title);
        const bookDesign = document.getElementById('book-show');
        const div = document.createElement('col-md-4');
        div.innerHTML = `
                <div class="card mt-3" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${details.title}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class='list-style'>Author : </span>${details.author_name}</li>
                        <li class="list-group-item"><span class='list-style'>Published Date : </span>javascript</span>Dapibus ac facilisis in</li>
                        <li class="list-group-item"><span class='list-style'>First Published Date: </span>Vestibulum at eros</li>
                    </ul>
                </div>

        `
        bookDesign.appendChild(div);

    });
}