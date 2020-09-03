import '../component/category-list.js';

function main() {
    const baseURL = "https://www.themealdb.com";

    // const getMeal = async () => {
    //     try {
    //         const response = await fetch(`${baseURL}/api/json/v1/1/categories.php`);
    //         const responseJson = await response.json();
    //         if (responseJson.error) {
    //             showResponseMessage(responseJson.message);
    //         } else {
    //             renderAllMeal(responseJson.categories);
    //         }
    //     } catch (message) {
    //         showResponseMessage(message);
    //     }
    // };

    const getMeal = async () => {
        try {
            const response = await fetch(`${baseURL}/api/json/v1/1/categories.php`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllMeal(responseJson.categories);
            }
        } catch (message) {
            showResponseMessage(message);
        }
    };

    const getRandom = async () => {
        try {
            const response = await fetch(`${baseURL}/api/json/v1/1/random.php`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderRandom(responseJson.meals);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };



    const getCategories = async () => {
        try {
            const response = await fetch(`${baseURL}/api/json/v1/1/list.php?c=list`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderCategories(responseJson.meals);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const viewCat = async (cat) => {
        try {
            const response = await fetch(`${baseURL}/api/json/v1/1/filter.php?c=${cat}`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(response.message);
            } else {
                renderFiltercat(responseJson.meals);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    }

    // const renderAllMeal = (meal) => {
    //     const listMealElement = document.querySelector("#listmeals");
    //     meal.forEach(categories => {
    //         listMealElement.innerHTML += `
    //          <tr>
    //             <td>${categories.idCategory}</td>  
    //             <td>${categories.strCategory}</td>  
    //             <td><img src="${categories.strCategoryThumb}"></td> 
    //             <td>${categories.strCategoryDescription}</td>   
    //         </tr>   
    //         `;
    //     });
    // }

    const renderAllMeal = meal => {
        const categoryList = document.querySelector("category-list");
        categoryList.categories = meal;

    };

    const renderRandom = (random) => {
        const listRandom = document.querySelector('#listrandom');
        random.forEach(randoms => {
            listRandom.innerHTML += `
            <img src="${randoms.strMealThumb}" class="w-50 img-rounded mx-auto d-block mt-5"
                alt="meals">
            `;
        });
    }

    const renderCategories = (categorie) => {
        const listCategories = document.querySelector('#pills-tab');
        categorie.forEach(categories => {
            listCategories.innerHTML += `
            <li class="nav-item" id="pilih">
            <a class="nav-link valueCat" id="${categories.strCategory}" data-toggle="pill"
            href="#pills-categories" value="${categories.strCategory}">${categories.strCategory}</a> 
            </li>
            `;
        });
        test();
    }


    const renderFiltercat = (cate) => {
        const listFiltercats = document.querySelector('#listfilter');
        listFiltercats.innerHTML = "";
        cate.forEach(cates => {
            listFiltercats.innerHTML += `
            <tr>
            <td class="text-center">${cates.idMeal}</td>  
            <td><a href="${cates.strMealThumb}"><img src="${cates.strMealThumb}" class="img-thumbnail img-sz mx-auto d-block "></a></td> 
            <td class="text-center mt-5">${cates.strMeal}</td>  
            </tr>  
            `;
        });
    }


    const test = () => {
        const viewCategories = document.getElementsByClassName("valueCat");
        for (let i = 0; i < viewCategories.length; i++) {
            const b = viewCategories[i];
            b.addEventListener("click", function () {
                let a = viewCategories[i].getAttribute('value');
                viewCat(a);
            });
        }

    }
    const showResponseMessage = (message = "Mohon cek kembali koneksi anda") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getMeal();
        getRandom();
        getCategories();

    });



}

export default main;

