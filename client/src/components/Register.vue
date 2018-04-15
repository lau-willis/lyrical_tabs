<template>
  <v-container>
    <v-layout justify-center>
    <v-flex xs10>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field type="email" name="email" v-model="email" label="Enter your email" />
            <v-text-field type="password" name="password" v-model="password" autocomplete="new-password" label="Enter your password" min="8" hint="At least 8 characters"/>
            <div class="error" v-html="error" />
            <v-btn dark class="cyan" @click="register">Register</v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register() {
      try{
          const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.user.email);
        } catch(error){
          this.error = error.response.data.error
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: red;
  }  
</style>
