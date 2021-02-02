import React from 'react'
import Menu from './Menu'

const MenuList = ({ menus }) => {
    if (menus.length === 0) {
        return (<div className="empty-search">
            <h3>unfortunately no food or beverages matched your search </h3>
        </div>);

    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {menus.map(item => {
                    return <Menu key={item.id} menu={item} />
                })}
            </div>
        </section>
    )
}
export default MenuList;