<template>
  <span>
    <span v-if="checking">
      Loading...
    </span>
    <span v-else>
      <button 
        v-if="!user" 
        @click="login">
        Login
      </button>
      <span v-if="user">
        <img 
          :src="user.photoURL" 
          :title="user.uid"
          width="32" 
          height="32"
        >
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import firebase from "~/plugins/firebase.ts";
import auth from "~/plugins/auth.ts";

export default {
  data() {
    return {
      user: null,
      checking: true,
    };
  },
  created() {
    auth().then(u => {
      this.user = u;
      this.checking = false;
    });
  },
  methods: {
    login: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
  },
};
</script>
