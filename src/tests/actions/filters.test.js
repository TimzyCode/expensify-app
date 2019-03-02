import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
}   from '../../actions/filters';

import moment from 'moment'




test ('should test to genereate a set startdate', ()=> {
    const action= setStartDate (moment(0))
    expect(action).toEqual({
        type:   'SET_START_DATE',
        startDate: moment(0)
    })
})

test ('should test to generate a end date', () => {
    const action= setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test ('should generate a text filter', ()=> {
    const action = setTextFilter({text: 'Timothy'})
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: {text: 'Timothy'}
    })
})

test ('should genereate a sort by amount', ()=> {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'

    })
})

test ('should generate a sort by date', ()=> {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})