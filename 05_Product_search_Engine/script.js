(async () => {
    const url = 'https://fakestoreapi.com/products';
    const container = document.getElementById('pcontainer');
    const search = document.getElementById('searchInp');

    const fetchProducts = async () => {

        try {
            const response = await fetch(url);
            return await response.json()

        } catch (error) {
            return error;
        }

    };
    const products = await fetchProducts();

    const generateProducts = (product) => {

        return `

        <div class="card">
            <div class="image">
                <img src="${product.image}" alt="">
            </div>
            <div class="content">
                <h2>${product.title}</h2>
                <p>${product.description.split(' ').slice(0, 25).join(' ')}</p>
            <button> $${product.price}</button>
            </div >
        </div > `

    };

    const renderProducts = (products) => {

        container.innerHTML = "";

        products.forEach((product) => {

            container.innerHTML += generateProducts(product);

        });
    };

    const checkTextContain = (text, searchText) => {
        return text.toString().toLowerCase().includes(searchText)

    }

    const filterHandeler = (e) => {

        const searchText = e.target.value.toLowerCase();

        const filterProducts = products.filter(product => {

            return (
                checkTextContain(product.description, searchText) ||
                checkTextContain(product.title, searchText) ||
                checkTextContain(product.price, searchText)
            );
        });
        renderProducts(filterProducts);
    };

    search.addEventListener('keyup', filterHandeler);
    renderProducts(products);

})();












