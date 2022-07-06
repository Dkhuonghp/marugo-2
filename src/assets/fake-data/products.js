const product_01_image_01 = ('../model/sneaker_1/scene.gltf')
const product_01_image_02 = ('../model/sneaker_1/balance.usdz')

const product_02_image_01 = ('../model/sneaker_2/scene.gltf')

const product_03_image_01 = ('../model/sneaker_3/scene.gltf')

const product_04_image_01 = ('../model/sneaker_4/scene.gltf')

const product_05_image_01 = ('../model/sneaker_5/scene.gltf')

const product_06_image_01 = ('../model/sneaker_6/scene.gltf')

const product_07_image_01 = ('../model/sneaker_7/scene.gltf')

const product_08_image_01 = ('../model/sneaker_8/scene.gltf')

const product_09_image_01 = ('../model/sneaker_9/scene.gltf')

const product_10_image_01 = ('../model/sneaker_10/scene.gltf')



const products = [
    {
        title: "sneaker_1",
        price: '2500',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "air-dior",
        colors: ["white"],
        slug: "sneaker_1",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
        description: "",
    },
    {
        title: "sneaker_2",
        price: '2500',
        image01: product_02_image_01,
        categorySlug: "jordan",
        colors: ["gray"],
        slug: "sneaker_2",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],

    },
    {
        title: "sneaker_3",
        price: '2500',
        image01: product_03_image_01,
        categorySlug: "nike",
        colors: ["white"],
        slug: "sneaker_3",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },
    {
        title: "sneaker_4",
        price: '2500',
        image01: product_04_image_01,
        categorySlug: "nike",
        colors: ["blue"],
        slug: "sneaker_4",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },
    {
        title: "sneaker_5",
        price: '2500',
        image01: product_05_image_01,
        categorySlug: "nike",
        colors: ["blue"],
        slug: "sneaker_5",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },
    {
        title: "sneaker_6",
        price: '2500',
        image01: product_06_image_01,
        categorySlug: "nike",
        colors: ["gray"],
        slug: "sneaker_6",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },
    {
        title: "sneaker_7",
        price: '2500',
        image01: product_07_image_01,
        categorySlug: "nike",
        colors: ["black"],
        slug: "sneaker_7",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },
    {
        title: "sneaker_8",
        price: '2500',
        image01: product_08_image_01,
        categorySlug: "nike",
        colors: ["black"],
        slug: "sneaker_8",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },
    {
        title: "sneaker_9",
        price: '2500',
        image01: product_09_image_01,
        categorySlug: "nike",
        colors: ["white"],
        slug: "sneaker_9",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },
    {
        title: "sneaker_10",
        price: '2500',
        image01: product_10_image_01,
        categorySlug: "nike",
        colors: ["white"],
        slug: "sneaker_10",
        size: ["18.0", "18.5", "19.0", "19.5", "20.0", "20.5", "21.0", "21.5", "22.0"],
    },


    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData