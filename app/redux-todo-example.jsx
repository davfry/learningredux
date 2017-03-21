var redux =  require('redux');

console.log('Starting todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
      default:
        return state;
      }
  };

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension(): f => f
));

store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
})

var currentState = store.getState();
console.log('currentState: ', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'New search text'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'New search text 2'
});

console.log('Should be new search text', store.getState() );
