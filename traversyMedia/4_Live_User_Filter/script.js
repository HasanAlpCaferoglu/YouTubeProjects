const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems =[]; // fetched data will be put in listItem variable

getData()

// Event listener is needed when filtering
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50') // 50 random user will be fetched

    //const data = await res.json();
    // data obtained with API will give an object which has results property. Random users are value of that property. So, below line is written to get the random users directly in an array.

    const { results } = await res.json();
    //console.log(results)

    // Clear results before do anything
    result.innerHTML = '';

    results.forEach(user => {
        const li = document.createElement('li'); // for each user, list item will be generated.
        
        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })  
}

function filterData(searchTerm) {
    //searchItem is whatever is beeing typed in
    //console.log(searchTerm)

    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}