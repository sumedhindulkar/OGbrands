import React from 'react'
import Prod1 from '../../assets/leaf_3update.png'
import Prod2 from '../../assets/leaf_2update.png'
import Prod3 from '../../assets/leaf_1update.png'
import {ShopContainer,HeadingSpan1,HeadingSpan2,CardWrapper,ProductCard,CardImg,HeadingWrapper,CardH4,CardP} from './ShopStyles'
import Carousel from 'react-elastic-carousel'
import './index.css'

const Shop = () => {

    const breakpoints = [
        {width: 1,itemsToShow: 1},
        {width: 550,itemsToShow: 2},
        {width: 768,itemsToShow: 3},
        {width: 1200,itemsToShow: 4}
    ]

    return (
        <>
            <ShopContainer id='shop-here'>
                <HeadingWrapper>
                    <HeadingSpan1>SHOP</HeadingSpan1>
                    <HeadingSpan2>HERE</HeadingSpan2>
                </HeadingWrapper>
                <Carousel breakPoints={breakpoints} showArrows={false} enableMouseSwipe={true}>
                    <ProductCard>
                        <CardImg src={Prod3} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                    <ProductCard>
                        <CardImg src={Prod2} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                    <ProductCard>
                        <CardImg src={Prod3} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                    <ProductCard>
                        <CardImg src={Prod3} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                </Carousel>
                {/* <CardWrapper>
                    <ProductCard>
                        <CardImg src={Prod1} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                    <ProductCard>
                        <CardImg src={Prod2} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                    <ProductCard>
                        <CardImg src={Prod3} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                    <ProductCard>
                        <CardImg src={Prod3} alt></CardImg>
                        <CardH4>Lavender Buds ( Organic)</CardH4>
                        <CardP>$ 420</CardP>
                    </ProductCard>
                </CardWrapper> */}
            </ShopContainer>
        </>
    )
}

export default Shop
