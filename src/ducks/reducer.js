import axios from 'axios'

let initialState = {
    books:{
        title:'',
        author:'',
        genre:'',
        description:'',
        img:''
    }
}

const GET_BOOKS = 'GET_BOOKS';

export default function (state = initialState, action) {
    //console.log(action)
    switch (action.type) {
        case GET_BOOKS + "_FULFILLED":
            return Object.assign({}, state, { books: action.payload });
        default:
            return state
    }
}

export function getBooks() {
    const books = axios.get('/api/getBooks').then(res => {
        return res.data
    })

    return {
        type: GET_BOOKS,
        payload: books
    }
}