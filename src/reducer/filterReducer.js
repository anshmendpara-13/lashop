const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price)

            // 1st method
            // console.log(Math.max.apply(Math,priceArr));

            // 2nd method
            // let maxPrice = priceArr.reduce((initialValue, curVal) => Math.max(initialValue, curVal), 0)
            // console.log(maxPrice);

            // 3rd method
            let maxPrice = Math.max(...priceArr)
            // console.log(priceArr);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }
            };


        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sort_value);
            return {
                ...state,
                sorting_value: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct = [...action.payload];

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "Sort by") {
                    newSortData = tempSortProduct
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
                if (sorting_value === "lowest") {
                    return a.price - b.price
                }
                if (sorting_value === "highest") {
                    return b.price - a.price
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];


            const { text, category, company, color, price } = state.filters;
            // console.log(typeof (category))
            // console.log(state)

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
            }
            if (category !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category.toLowerCase();
                })
            }
            if (company !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company === company.toLowerCase();
                })
            }
            if (color !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.colors.includes(color)
                );
            }
            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price === price)
            }
            else {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price)
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0,

                },
            }

        default:
            return state
    }
}

export default filterReducer;