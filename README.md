## Task. Image Search

Use the code from the previous homework assignment and enhance the image search application with new functionality.

### Refactoring

- Add the **Axios** library to the project for handling HTTP requests.
- Refactor your code by replacing the `fetch` API with Axios.
- Use **async/await** syntax for handling asynchronous requests.

### Pagination

The Pixabay API supports pagination and provides `page` and `per_page` parameters. 

- Configure the requests so that each response returns **15 objects** (the default is 20).
- The initial value of the `page` parameter must be `1`.
- Increment the `page` value by `1` with each subsequent request.
- Reset the `page` value to its initial state when searching for a new keyword, as pagination starts over for the new image collection.

Add a **"Load more"** button in the HTML document right after the gallery layout. Clicking this button should request the next group of images and append the new markup to the existing gallery elements. To make this work, store the user's search query in a global variable upon form submission.

- Hide the button if the gallery contains no images.
- Show the button below the gallery once images are successfully loaded.
- Hide the button during a new form submission, and display it again after receiving the query results if necessary.
- Move the loading indicator below the "Load more" button.

### End of Collection

The backend response includes a `totalHits` property, which represents the total number of images matching the search criteria (for a free account). If the user reaches the end of the collection, hide the "Load more" button and display a message: `"We're sorry, but you've reached the end of search results."`.

### Page Scrolling

Implement smooth page scrolling after requesting and rendering each subsequent group of images. 

- Calculate the height of a single gallery card using the `getBoundingClientRect` function.
- Use the `window.scrollBy` method to automatically scroll the page down by two gallery card heights.


