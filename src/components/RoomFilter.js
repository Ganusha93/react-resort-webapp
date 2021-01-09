import React from 'react'
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    let peoples = getUnique(rooms, 'capacity');
    peoples = peoples.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" onChange={handleChange} value={type} className="form-control">{types}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity"> Guests</label>
                    <select name="capacity" id="capacity" onChange={handleChange} value={capacity} className="form-control">{peoples}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" min={minPrice} max={maxPrice} name="price" id="price" onChange={handleChange} value={price} className="form-control" />
                </div>
                {/* size */}
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end of select type */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
                {/* end of extras type */}


            </form>
        </section>
    )
}
