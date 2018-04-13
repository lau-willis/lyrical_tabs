<template>
	<v-toolbar fixed dark class="cyan">
		<router-link :to="{name:'root'}" tag="v-toolbar-title" class="home mr-4 btn btn--flat theme--dark">TabTracker</router-link>
		<v-toolbar-items>
			<v-btn flat dark>Browse</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<router-link v-if="!$store.state.isUserLoggedIn" :to="{name:'login'}" tag="v-btn" class="btn btn--flat theme--dark">Login</router-link>
		</v-toolbar-items>
		<v-toolbar-items>
			<router-link v-if="!$store.state.isUserLoggedIn" :to="{name:'register'}" tag="v-btn" class="btn btn--flat theme--dark">Sign Up</router-link>
		</v-toolbar-items>
	</v-toolbar>
</template>
<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>
<style scoped>
	.home{
		cursor: pointer;
		transition: 0.5s ease-in
	}
	.home:hover{
		color: #E9E;
	}
</style>