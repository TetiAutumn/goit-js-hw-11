import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const loader = document.querySelector('.loader-container');

form.addEventListener("submit", async event => {
    event.preventDefault();

    const query = event.target.elements["search-text"].value.trim();

    if (!query) {
        iziToast.warning({
            message: "Please enter a search query!",
            position: "topRight",
        });
        return;
    } else {
        try {
            clearGallery();
            loader.classList.remove('hidden');
            const images = await getImagesByQuery(query)
            if (images.hits.length === 0) {
                iziToast.warning({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
            } else {
                createGallery(images.hits)
            }
        } catch (e) {

        } finally {
            loader.classList.add('hidden')
        }

    }

    // далі — запит до API

});
