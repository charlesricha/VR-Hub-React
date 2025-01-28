import React from 'react'

const Products = () => {
    const data = [
        {
            name:"VR remo 1 Headset",
            image:"/1x/VR1.png",
            price:57000,
            description:"Very Comfy",
    },

    {
        name:"VR remo 2 Headset",
        image:"/1x/VR2.png",
        price:57000,
        description:"Very Comfy",
    },

    {
        name:"VR remo 3 Headset",
        image:"/1x/image.png",
        price:57000,
        description:"Very Comfy",
    },

    {
        name:"VR remo 4 Headset",
        image:"/1x/VR4.png",
        price:57000,
        description:"Very Comfy",
        },

    {
        name:"VR remo 1 gear",
        image:"/1x/Holder.png",
        price:57000,
        description:"Very Comfy",
    },

    {
        name:"VR remo 1 Headset",
        image:"/1x/VR1.png",
        price:57000,
        description:"Very Comfy",
},

{
    name:"VR remo 2 Headset",
    image:"/1x/VR2.png",
    price:57000,
    description:"Very Comfy",
},

{
    name:"VR remo 3 Headset",
    image:"/1x/image.png",
    price:57000,
    description:"Very Comfy",
},

{
    name:"VR remo 4 Headset",
    image:"/1x/VR4.png",
    price:57000,
    description:"Very Comfy",
    },

{
    name:"VR remo 1 gear",
    image:"/1x/Holder.png",
    price:57000,
    description:"Very Comfy",
},
       
{
    name:"VR remo 4 Headset",
    image:"/1x/VR4.png",
    price:57000,
    description:"Very Comfy",
    },

{
    name:"VR remo 1 gear",
    image:"/1x/Holder.png",
    price:57000,
    description:"Very Comfy",
},
        

]
  return (
    <section id="products">
        <h3 className='flex items-center justify-center text-3xl'>Products</h3>
    <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 mt-4'>
            
        
       { data.map(({name,image,price,description}) => (
            <div className="item bg-amber-100 rounded-xl text-black p-4 flex flex-col gap-1">
                <img src={image} alt="" className='rounded-xl' />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <button className='bg-slate-800 text-white px-4 rounded-2xl'>Buy Now</button>
            </div>
       ))}
    </div>
    </section>
  )
}

export default Products
