<template>
  <v-container>
    <v-layout justify-center>
    <v-flex xs10>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
            <v-text-field type="email" name="email" v-model="email" label="Enter your email" />
            <v-text-field type="password" name="password" v-model="password" autocomplete="new-password" label="Enter your password" min="8" hint="At least 8 characters"/>
            <div class="error" v-html="error"></div>
            <v-btn dark class="cyan" @click="register">Register</v-btn>
          </form>
      </panel>
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
          this.$store.dispatch('setUser', response.data.user);
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
