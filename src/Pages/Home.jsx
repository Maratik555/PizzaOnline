import React from 'react';
import {Categories, LoadingBlock, PizzaBlock, SortPopup} from "../Components";
import {useSelector,useDispatch} from "react-redux";
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности',type: 'popular' },
  { name: 'цене',type: 'price'},
  { name: 'по названию',type: 'name'}
]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category,sortBy} = useSelector(({filters}) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy,category))
  }, [category,sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  },[])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  },[])

  const addPizzaToCart = (obj) => {
    dispatch({
      type: "ADD_PIZZA_CART",
      payload: obj,
    })
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems}
                   activeSortType={sortBy}
                   onClickSort={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded
          ? items.map(obj => <PizzaBlock
            onClickAddPizza={addPizzaToCart}
            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
            {...obj} key={obj.id}/>)
          : Array(12).fill(0).map((_,index) =>  <LoadingBlock key={index} />)
        }
      </div>
    </div>
  )
}

export default Home;