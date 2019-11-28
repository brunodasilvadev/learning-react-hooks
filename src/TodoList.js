import React from 'react'

import StateContext from './StateContext'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    static contextType = StateContext

    render() {
        const items = this.context
       
        return items.map(item => 
            <TodoItem {...item} {...this.props} key={item.id} />
        )
    }
}