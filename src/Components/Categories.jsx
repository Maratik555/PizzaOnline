import React, {useState} from 'react';

// class Categories extends Component {
//     state = {
//         activeItem: null,
//     }
//     onSelectItem = i =>{
//         this.setState({activeItem:i})
//     }
//
//     render() {
//         const {items,onClickItem} = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((name,i) => <li
//                         className={this.state.activeItem===i ? 'active':''}
//                         onClick={() => this.onSelectItem(i)} key={name}>
//                         {name}</li>)}
//                 </ul>
//             </div>
//         );
//     }
//}

function Categories ({items}) {

   const [state,setState] = useState(null);

   const onSelectItem = (i) => {
     setState(i)
   }
    return (
        <div className="categories">
                <ul>
                    <li className={state===null ? 'active':''}
                        onClick={()=>onSelectItem(null)}>Все</li>
                    {items.map((name,i) => <li className={state===i ? 'active':''}
                                               onClick={()=>onSelectItem(i)} key={name}>{name}</li> )}
                </ul>
        </div>
        );
}

export default Categories;