import {combineReducers} from 'redux';

let counter = (state=12,action)=>{
    switch(action.type){
        case 'ADD':
            return state+action.value;
        case 'DEC':
            return state-action.value;
        case 'ODD':
            return state*2;
        default:
            return state;
    }
}

let initValue = {
    list:[1,2,3]
}

let todo = (state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(action.value);
            // let obj = Object.assign({},state,{a:100})
            return newState;
        case 'del_item':
            let newList = JSON.parse(JSON.stringify(state));
            newList.list.splice(action.value,1);
            return newList;
        default:
            return state;
    }
}

export default combineReducers({
    counter,todo
})