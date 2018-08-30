export const GET_STANDINGS = 'psapp/standings/LOAD';
export const GET_STANDINGS_SUCCESS = 'psapp/standings/LOAD_SUCCESS';
export const GET_STANDINGS_FAIL = 'psapp/standings/LOAD_FAIL';

export default function reducer(state = { standings: {} }, action) {
  switch (action.type) {
    case GET_STANDINGS:
      return { ...state, loading: true };
    case GET_STANDINGS_SUCCESS:
      return { ...state, loading: false, standings: getStandings(action.payload) || [] };
    case GET_STANDINGS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching standings'
      };
    default:
      return state;
  }

}

function getStandings(payload) {
  return Object
    .entries(payload.data[0].data)
    .map((row) => {
      let {name, w, l, d, gd, pos} = row[1];
      let newRow = {
        'key': row[0],
        'name': name,
        'wins': w,
        'losses': l,
        'draws': d,
        'goal diff': gd,
        'position': pos
      };
      
      return newRow;
    })
    .sort((x,y) => {return x.position < y.position ? -1 : y.position < x.position ? 1 : 0 })
    .map(Object.values);
}

export function listStandings() {
  return {
    type: GET_STANDINGS,
    payload: {
      request: {
        url: `/wp-json/sportspress/v2/tables`
      }
    }
  };
}