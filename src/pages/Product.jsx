import React, { useState } from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'
import productData from '../assets/fake-data/products'

//!Tablist
import Tab_2 from '../components/Tabs/Tab_2'

const Product = props => {

    const [ index, setIndex ] = useState(0)

    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                {/* //!TabsList */}
                
                <div className='Tabs'>
                    <div className="tabs__list">
                        <div className={`tabs__list__head ${ index === 0 ? "active" : null} `} onClick={() => {setIndex(0)}}>商品詳細</div>
                        <div className={`tabs__list__head ${ index === 1 ? "active" : null} `}  onClick={() => {setIndex(1)}}>クチコミ</div>
                        <div className={`tabs__list__head ${ index === 2 ? "active" : null} `}  onClick={() => {setIndex(2)}}>お問い合わせ</div>
                        <div className={`tabs__list__head ${ index === 3 ? "active" : null} `}  onClick={() => {setIndex(3)}}>オススメ</div>
                    </div>
                    <div className="tabs__content" hidden={index !== 0}>
                        <div className='product-description__title'>
                            商品情報
                        </div>

                        <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>

                    </div>
                    <div className="tabs__content" hidden={index !== 1}>
                        <Tab_2/>
                    </div>
                    <div className="tabs__content" hidden={index !== 2}>
                        <div className="product-description__content">{product.contactTitle_1}</div>
                        <div className="product-description__content">{product.contactContent_1}</div>
                        <div className="product-description__content">{product.contactTitle_2}</div>
                        <div className="product-description__content">{product.contactContent_2}</div>
                        <div className="product-description__content">{product.contactTitle_3}</div>
                        <div className="product-description__content">{product.contactContent_3}</div>
                    </div>
                    <div className="tabs__content" hidden={index !== 3}>
                        <Section>
                            <SectionTitle>
                                オススメの人気商品
                            </SectionTitle>
                            <SectionBody>
                                <Grid
                                    col={4}
                                    mdCol={2}
                                    smCol={1}
                                    gap={20}
                                >
                                    {
                                        productData.getProducts(20).map((item, index) => (
                                            <ProductCard
                                                key={index}
                                                img01={item.image01}
                                                img02={item.image02}
                                                name={item.title}
                                                price={Number(item.price)}
                                                slug={item.slug}
                                            />
                                        ))
                                    }
                                </Grid>
                            </SectionBody>
                        </Section>
                    </div>

                </div>
            </Section>


            {/* <Section>
                <h3 className='product-description__title'>
                    関連商品
                </h3>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section> */}
        </Helmet>
    )
}

export default Product
