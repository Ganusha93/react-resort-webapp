import React, { useState, useEffect } from 'react'
import Title from '../Title'



const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function MenuFilter({ menus, setFilteredMenus }) {

    const [type, setType] = useState("all");
    const [maxPrice, setmaxPrice] = useState(0);
    const [price, setPrice] = useState(maxPrice);

    let types = getUnique(menus, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })


    useEffect(() => {
        let maxPrice = Math.max(...menus.map(item => item.price));
        setmaxPrice(maxPrice);
        setPrice(maxPrice)
    }, [menus]);


    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        if (name === 'type') {
            setType(value);
        }
        if (name === 'price') {
            setPrice(value);
        }

    }

    useEffect(() => {
        let tempMenus = [...menus];

        //filter by type
        if (type !== 'all') {
            tempMenus = tempMenus.filter(menu => menu.type === type);
        }

        //filter by price
        tempMenus = tempMenus.filter(menu => menu.price <= price);
        setFilteredMenus(tempMenus)
    },[type,price,menus,setFilteredMenus])



    return (
        <section className="filter-container">
            <Title title="search Foods" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">food type</label>
                    <select name="type" id="type" onChange={handleChange} value={type} className="form-control">{types}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ¥{price}</label>
                    <input type="range" min={0} max={maxPrice} name="price" id="price" onChange={handleChange} value={price} className="form-control" />
                </div>
            </form>
        </section>
    )
}
