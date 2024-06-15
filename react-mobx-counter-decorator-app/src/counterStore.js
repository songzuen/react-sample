import { action, computed, makeObservable, observable } from "mobx";

export default class CounterStore{
    @observable count = 0;

    constructor() {
        makeObservable(this)
    }

    @computed get isNegative() {
        return this.count < 0 ? 'Yes' : 'No'
    }

    @action increase() {
        return this.count += 1
    }

    @action decrease() {
        return this.count -= 1
    }
}