import {makeAutoObservable, runInAction} from "mobx";

class SearchSettingsStore {

    date = new Date().toISOString().split('T')[0];

    periodFrom = this.date.toString()
    periodTo = this.date.toString()
    sortBy = "relevancy"

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    setPeriodFrom = async (periodFrom) => {
        runInAction(() => {
            this.periodFrom = periodFrom
        })
    }
    setPeriodTo = async (periodTo) => {
        runInAction(() => {
            this.periodTo = periodTo
        })
    }
    setSortBy = async (sortBy) => {
        runInAction(() => {
            this.sortBy = sortBy
        })
    }
}

export default new SearchSettingsStore()
