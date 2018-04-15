import Api from './Api'

export default {
	register(credentials){
		return Api().post('signup', credentials)
	},
	login(credentials){
		return Api().post('signin', credentials)
	}
}