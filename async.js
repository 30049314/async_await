// Fetch data using Async/Await
async function fetchData() 
{
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Run our Display Data function
        displayData(data);
    }   
    catch(error)
    {
        console.error("Error fetching data: ", error);
        document.getElementById("dataContainer").innerHTML = '<p class="alert alert-danger">Failed to load data.</p>';
    } 
}

// Function to display the data in HTML
function displayData(data)
{
    const container = document.getElementById("dataContainer");
    // Clear any existing content
    container.innerHTML = '';

    // Loop through any objects return via data
    data.forEach(
        item => {
            const card = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.body}</p>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        }
    );
}

// Fetch the data when the page loads
window.onload = fetchData;