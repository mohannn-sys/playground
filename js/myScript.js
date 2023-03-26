// Get the dom element to display the quote
const quote_element = document.getElementById("quotes");
            
// Define the url of the API that provides the quotes
const api_url = 'https://quotes.rest/qod?category=inspire';

// Fetch the quote from the API
fetch(api_url)
.then(response => response.json())
.then(data => {
    // Get the quote text from the API response
    const quote_text = data.contents.quotes[0].quote;

    // Display the quote on the web page
    quote_element.innerText = "Quote of the Day : "+quote_text;
})
.catch(error => console.error(error));
