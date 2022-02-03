import {combineReducers} from "redux"

import filters from "./filters"
import pizzas from "./pizzas"
import cart from "./cart"


const reducer = combineReducers({
  filters,
  pizzas,
  cart

})

export default reducer