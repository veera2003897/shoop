const mainDiv = document.getElementById("productsList");
const catDropdown = document.getElementById("cat");

// Function to create product elements
function createProductElement(product) {
    const subDiv = document.createElement("div");
    subDiv.classList.add("product");

    const id = document.createElement("p");
    id.textContent = "ID: " + product.id;

    const image = document.createElement("img");
    image.src = product.thumbnail;

    const itemName = document.createElement("h2");
    itemName.textContent = product.title;
    itemName.style.cursor = 'pointer'; // Make the title clickable
    itemName.addEventListener('click', () => showProductDetails(product.id)); // Add click event

    const price = document.createElement("h4");
    price.textContent = "Price of item ₹" + product.price;

    const button = document.createElement("button");
    button.textContent = "ADD to Cart";
    button.addEventListener('click',()=>count())

    subDiv.appendChild(id);
    subDiv.appendChild(image);
    subDiv.appendChild(itemName);
    subDiv.appendChild(price);
    subDiv.appendChild(button);

    return subDiv;
}

// Function to display all products
function displayProducts(products) {
    mainDiv.textContent = ''; // Clear the main div
    products.forEach(product => {
        const productElement = createProductElement(product);
        mainDiv.appendChild(productElement);
    });
}

// Fetch and display all products initially
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data.products))
    .catch(err => console.error("Error fetching products:", err));

// Fetch categories and populate the dropdown
fetch("https://dummyjson.com/products/categories")
    .then(res => res.json())
    .then(data => {
        data.forEach(category => {
            const option = document.createElement("option");
            option.value = category.slug; // Assuming category is a string (like "smartphones", "laptops", etc.)
            option.textContent = category.name; // Display the category name directly
            catDropdown.appendChild(option);
        });
    })
    .catch(err => console.error("Error fetching categories:", err));

// Event listener for category selection
catDropdown.addEventListener('input', function (e) {
    const category = e.target.value;
    console.log("Selected category:", category); // Debugging log to check selected value
    fetch(`https://dummyjson.com/products/category/${category}`) // Correct usage of template literal
        .then(res => res.json())
        .then(data => displayProducts(data.products))
        .catch(err => console.error("Error fetching products by category:", err));
});

// Function to show product details when a product title is clicked
function showProductDetails(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            mainDiv.textContent = ''; // Clear the main div to display only the clicked product details

            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("product-details");

            const title = document.createElement("h2");
            title.textContent = product.title;

            const description = document.createElement("p");
            description.textContent = "Description: " + product.description;

            const price = document.createElement("h4");
            price.textContent = "Price: ₹" + product.price;

            const rating = document.createElement("p");
            rating.textContent = "Rating: " + product.rating;

            const image = document.createElement("img");
            image.src = product.thumbnail;

            detailsDiv.appendChild(title);
            detailsDiv.appendChild(description);
            detailsDiv.appendChild(price);
            detailsDiv.appendChild(rating);
            detailsDiv.appendChild(image);

            mainDiv.appendChild(detailsDiv);
        })
        .catch(err => console.error("Error fetching product details:", err));
}
let c=document.getElementById("headcount");
let m=0;
function count()
{
    m++;
    c.textContent=m;
    //c.addEventListener('click',()=>
    //{
    //a=target.value;
    // fetch("https://dummyjson.com/products")
    //    .then(res=> res.json())
    //    .then(data=>
    //    {
    //     // mainDiv.textContent=' '; 
    //     data.products.forEach(a=>
    //     {
    //         const details=document.createElement("div");
    //         details.classList.add("product-details");
    //         details.id="details";
    //         const img=document.createElement("img");
    //         img.src=a.thumbnail;
    //         const del=document.createElement("h4");
    //         del.textContent="X";
    //         details.appendChild(img);
    //         details.appendChild(del);
    //         console.log(details)
    //         const a=document.getElementById("headcount")
    //         a.addEventListener('click',()=>
    //             {
    //                 //let details=document.getElementById("details")
    //                 mainDiv.textContent=' '
    //             })
            
    //         //mainDiv.append(details)

    //     })
    //    }
       
    //   )  
        
}
// document.getElementById("headcount").addEventListener('click',()=>
// {
//     //let details=document.getElementById("details")
//     mainDiv.textContent=' '
// }) 
