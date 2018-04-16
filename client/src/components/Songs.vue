<template>
	<v-container>
    <v-layout justify-center>
    <v-flex xs10>
      <panel title="Songs">
		<div v-for="song in songs" :key="song.id">
			{{song.title}}
			{{song.artist}}
			{{song.genre}}
			{{song.album}}
			{{song.albumImageUrl}}
			{{song.youtubeId}}
			{{song.lyrics}}
			{{song.tab}}
		</div>
      </panel>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
	import SongsService from '@/services/SongsService';
	import Panel from '@/components/Panel';
	export default{
		data(){
			return{
				songs: []
			}
		},
		async mounted(){
			 this.songs = (await SongsService.getSongs()).data
		}
	}
</script>

<style scoped>
	
</style>