import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import {ProductCard} from "./components/ProductCard/ProductCard";

function App() {
    const [products, setProducts] = useState([
        {
            id: 1,
            src: 'https://remont.lvivservice.com.ua/upload/iblock/f92/X-min.png',
            title: 'iPhone X',
            description: 'A 5.5" beast of processing power from Apple',
            price: 999,
            category: 'Iphone'
        },
        {
            id: 2,
            src: 'https://s.pn.com.ua/i/md/1232/4415517/4415517_00p.jpg',
            title: 'Samsung S9',
            description: 'The most powerful Android device on the planet',
            price: 789,
            category: 'Samsung'
        },
        {
            id: 3,
            src: 'https://c.ua/image/cache/catalog/VladimirGorchakov/GooglePixel7Pro/whi/1-800x800.jpg',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876,
            category: 'Pixel'
        },
        {
            id: 4,
            src: 'https://img.ktc.ua/img/base/1/1/204111.jpg',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799,
            category: 'Oneplus'
        },
        {
            id: 5,
            src: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apple_iphone_8_plus_red_11_1.jpg',
            title: 'iPhone 8',
            description: 'The little, less-stylish brother of the iPhone X.',
            price: 789,
            category: 'Iphone'
        },
        {
            id: 6,
            src: 'https://vedroid.com/img/smartphones/xiaomi-redmi-note-10-pro-(china)/01.jpg',
            title: 'Redmi Note 10 PRO',
            description: 'The latest and most powerful smartphone from LG.',
            price: 789,
            category: 'Redmi'

        },
        {
            id: 7,
            src: 'https://c.ua/image/cache/catalog/VladimirGorchakov/GooglePixel7Pro/whi/1-800x800.jpg',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876,
            category: 'Pixel'
        },
        {
            id: 8,
            src: 'https://i.allo.ua/media/catalog/product/cache/3/image/468x468/602f0fa2c1f0d1ba5e241f914e856ff9/h/u/huawei_mate_10_pro-bl_result_2.jpg',
            title: 'Huawei Mate 10 Pro',
            description: 'The most powerful Android device yet from Huawei',
            price: 799,
            category: 'Huawei'
        },
        {
            id: 9,
            src: 'https://img.ktc.ua/img/base/1/1/204111.jpg',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799,
            category: 'Oneplus'
        }
    ])
    const [searchValue, setSearchValue] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value)

    const onClickDeleteButtonHandler = () => setSearchValue('')
    const onEnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const filteredItems = products.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        event.key === 'Enter' ? setProducts(filteredItems) : setProducts(products)
    }

    return (<div className="App">
        <h1><b>IT-Incubator store</b></h1>

        <input onKeyPress={onEnterDown} value={searchValue} onChange={onChangeInputHandler}
               placeholder={'Search...'}/>
        {searchValue && <button onClick={onClickDeleteButtonHandler}>X</button>}
        <div className="ProductList">
            {products.map(el => {
                return (
                    <ProductCard key={el.id}
                                 id={el.id}
                                 src={el.src}
                                 title={el.title}
                                 description={el.description}
                                 price={el.price}/>
                )
            })}
        </div>
    </div>);
}

export default App;
