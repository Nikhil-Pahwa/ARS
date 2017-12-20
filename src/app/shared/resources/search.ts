export class Search {
    constructor(
        public from: string,
        public to: string,
        public journeyDate: string
    ) { }
}

let currentDate = new Date();

export let EmptySearch = new Search('-1', '-1',
    ((currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear()));
