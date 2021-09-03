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
        const bookDesign = document.getElementById('result-section');
        
    });
}