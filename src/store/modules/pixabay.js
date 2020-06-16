// import Vue from "vue";
// import Vuex from "vuex";
// import axios from 'axios'

// Vue.use(Vuex);


export default {
    namespaced: true,
    state: {
        products: [{}],
        videoProducts: [{}]
    },

    mutations: {

        addProduct({
            products
        }, product) {
            products.push(product);
        },
        addVideoProduct({
            videoProducts
        }, product) {
            videoProducts.push(product);
        },
    },
    actions: {
        /* fetching the products array from pixabay */

        // , getters
        fetchProducts({
            commit
        }, URI) {
            console.log("fetching from pixabay ...")
            if (URI) {
                fetch(URI)
                    .then((res) => res.json())
                    .then((data) => {
                        // Get the last 50 products
                        const products = data["hits"];
                        // console.log(products);
                        products.forEach((product) => {
                            // Commit only non-existing products with a size
                            // if (
                            //   !getters.brandNames.includes(product.brand_name) &&
                            //   product.size
                            // ) {
                            // }
                            commit("addProduct", {
                                LhdTitle: product.user,
                                RpicUrl: product.largeImageURL,
                                id: product.id,
                                downloads: product.downloads,
                                subhdT: product.tags,
                                stickerData: {
                                    price: Math.floor((parseInt(product.likes) * 5) / Math.random()) * 10,
                                    discount: 55
                                }
                            });
                        });
                    });
            }
        },
        /* fetching videoProducts */
        fetchVideoProduct({
            commit
        }, VIDEOURI) {

            fetch(VIDEOURI)
                .then((res) => res.json())
                .then((data) => {
                    // Get the last 50 products
                    const products = data["hits"];
                    // console.log(products);
                    products.forEach((productVideo) => {
                        // Commit only non-existing productVideos with a size
                        // if (
                        //   !getters.brandNames.includes(productVideo.brand_name) &&
                        //   productVideo.size
                        // ) {
                        // }
                        commit("addVideoProduct", {
                            LhdTitle: productVideo.user,
                            RpicUrl: productVideo.picture_id,
                            id: productVideo.id,
                            downloads: productVideo.downloads,
                            subhdT: productVideo.tags,
                            videoUrl: productVideo['videos'].tiny.url,
                            stickerData: {
                                price: Math.floor((parseInt(productVideo.likes) * 5) / Math.random()) * 10,
                                discount: 55
                            }
                        });
                    });
                });

        }


    },
    /* the return the array of products */
    getters: {
        // brandNames: (state) => state.products.map((product) => product.brand_name),
        // totalAmount: (state) => {
        //   let amount = 0;

        //   state.cart.forEach((item) => (amount += item.price * item.count));

        //   return amount;
        // },
        getProds: (state) => {
            return state.products;
        },
        getVideoProds: (state) => {
            return state.videoProducts;
        }
    },
};