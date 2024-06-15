import { makeObservable, observable, action, computed } from 'mobx'

export default class counterStore {
	count = 0

	constructor() {
		makeObservable(this, {
			count : observable,
			increase : action,
			decrease : action,
			isNegative : computed
		})
	}

	increase(){
		this.count += 1;
	}

	decrease(){
		this.count -= 1;
	}

	get isNegative(){
		return this.count < 0 ? 'Yes' : 'No'
	}
}
