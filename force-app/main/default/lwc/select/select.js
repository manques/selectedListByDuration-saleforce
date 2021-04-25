import { LightningElement, track } from 'lwc';

const selectData = {
        name: 'selectedDate',
        label: 'select date',
        required: true,
        options: [
            {
                id: 1,
                value: 'none',
                label: '---NONE---'
            },
            {   
                id: 2,
                value: 'THIS_WEEK',
                label: 'This Week'
            },
            {
                id: 3,
                value: 'LAST_WEEK',
                label: 'last week'
            },
            {   
                id: 4,
                value: 'TODAY',
                label: 'today'
            }
        ]
};

export default class Select extends LightningElement {
    @track selectData = selectData;

    onSelect(event) {
        console.log(event);
    }
}