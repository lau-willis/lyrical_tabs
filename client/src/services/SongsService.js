import Api from './Api'

export default {
	getSongs(){
		return Api().get('songs')
	}
}