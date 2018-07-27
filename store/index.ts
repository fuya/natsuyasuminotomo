import Vue from "vue";
import Vuex from "vuex";
import firebase from "../plugins/firebase";
import { firebaseMutations, firebaseAction } from "vuexfire";
const db = firebase.firestore();

const articlesRef = db.collection("articles");

Vue.use(Vuex);

const createStore = () =>
  new Vuex.Store({
    state: {
      articles: []
    },
    getters: {
      articles: state => state.articles
    },
    mutations: {
      ...firebaseMutations
    },
    actions: {
      INIT_ARTICLES: firebaseAction(({ bindFirebaseRef }) => {
        console.log(articlesRef);
        bindFirebaseRef("articles", articlesRef);
      })
    }
  });

export default createStore;
