import React from 'react'

const Menu = ({items}) => {
    return (
        <div className='menu'>
            {
                items.map((menuItems) =>{
                    const {id,title, price, img, desc} = menuItems;
                    return(
                        <div key={id} className="item">
                            <img src={img} alt="img" className='img'/>
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4>{price}</h4>
                                </header>
                                <p className="item-text">{desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>  
    )
}

export default Menu
