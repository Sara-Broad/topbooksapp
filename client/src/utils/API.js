import axios from "axios";

export default {

    getBookByInfo: function (info) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + info)
    },
    getSavedFiction: function () {
        return axios.get("api/fiction/")
    },
    getSavedNonFiction: function () {
        return axios.get("api/nonfiction/")
    },
    saveFiction: function (bookData) {
        return axios.get("api/fiction/", bookData)
    },
    saveNonFiction: function (bookData) {
        return axios.get("api/nonfiction", bookData)
    },
    deleteFiction: function (id) {
        return axios.get("api/deleteFiction/" + id)
    },
    deleteNonFiction: function (id) {
        return axios.get("api/deleteNonFiction/" + id)
    }
};
