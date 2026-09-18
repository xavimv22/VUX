import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCarousel from '@/components/ProductCarousel';
import CategoryBanner from '@/components/CategoryBanner';
import NYStoreBanner from '@/components/NYStoreBanner';
import MembersSection from '@/components/MembersSection';
import StoresSection from '@/components/StoresSection';
import Footer from '@/components/Footer';

// ─── Product Data ────────────────────────────────────────────────────────────

const newArrivalsProducts = [
{
  id: 1,
  name: 'Iconic Puffer Jacket Black',
  price: '179€',
  image: 'https://nude-project.com/cdn/shop/files/NP_SORRY_ECOMM70680_3eb7bfcc-fbcd-4109-a3be-34e659674569.webp?v=1787664028&width=360',
  alt: 'Iconic Puffer Jacket Black - VuxClothes FW26 collection',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#1a1a1a' },
  { url: '#', color: '#f5f0e8' },
  { url: '#', color: '#6b7c5a' },
  { url: '#', color: '#2c3e6b' }]

},
{
  id: 2,
  name: 'Iconic Puffer Jacket Khaki',
  price: '179€',
  image: 'https://nude-project.com/cdn/shop/files/NP_SORRY_ECOMM69569_4a526e4e-657a-4389-9c18-1fb0c0a67ad2.webp?v=1788967174&width=360',
  alt: 'Iconic Puffer Jacket Khaki - VuxClothes FW26 collection',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#2c3e6b' },
  { url: '#', color: '#f5f0e8' },
  { url: '#', color: '#6b7c5a' },
  { url: '#', color: '#1a1a1a' }]

},
{
  id: 3,
  name: 'Iconic Puffer Jacket Off-White',
  price: '179€',
  image: 'https://nude-project.com/cdn/shop/files/7frontIvory.webp?v=1789400943&width=360',
  alt: 'Iconic Puffer Jacket Off-White - VuxClothes FW26 collection',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: ['XXL'],
  swatches: [
  { url: '#', color: '#f5f0e8' },
  { url: '#', color: '#6b7c5a' },
  { url: '#', color: '#2c3e6b' },
  { url: '#', color: '#1a1a1a' }]

},
{
  id: 4,
  name: 'Iconic Puffer Jacket Navy',
  price: '179€',
  image: 'https://nude-project.com/cdn/shop/files/NP_SORRY_ECOMM71011_fba264bd-02d8-4259-a6b9-717a48cbffc3.webp?v=1788453215&width=360',
  alt: 'Iconic Puffer Jacket Navy - VuxClothes FW26 collection',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#2c3e6b' },
  { url: '#', color: '#f5f0e8' },
  { url: '#', color: '#6b7c5a' },
  { url: '#', color: '#1a1a1a' }]

},
{
  id: 5,
  name: 'Marble Hoodie Marshmallow',
  price: '89€',
  image: 'https://nude-project.com/cdn/shop/files/4_back_e8e93eee-b19b-4fa8-aebc-39ea98b12669.webp?v=1786012119&width=360',
  alt: 'Marble Hoodie Marshmallow - VuxClothes FW26 collection',
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  badges: ['Most Wanted'],
  disabledSizes: ['XS', 'XL'],
  swatches: [
  { url: '#', color: '#f5f0e8' },
  { url: '#', color: '#8b6b4a' },
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#1a1a1a' }]

},
{
  id: 6,
  name: 'IT Zip-Up Hoodie',
  price: '99€',
  image: 'https://nude-project.com/cdn/shop/files/2back_b9f45789-bf55-4b0d-bc34-581ba1a874a5.webp?v=1787051272&width=360',
  alt: 'IT Zip-Up Hoodie - VuxClothes FW26 collection',
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  badges: ['New In'],
  disabledSizes: [],
  swatches: []
},
{
  id: 7,
  name: 'Winner Hoodie Grey Melange',
  price: '89€',
  image: 'https://nude-project.com/cdn/shop/files/4back_02ed99e8-f882-48da-aed9-81b2f23512b1.webp?v=1786012165&width=360',
  alt: 'Winner Hoodie Grey Melange - VuxClothes FW26 collection',
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  badges: ['New In'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#1a1a1a' }]

},
{
  id: 8,
  name: 'The Promotion Knit Sweater Dark Orange',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_SORRY_ECOMM67425_192629be-d5d5-48d1-90f2-0a5ff443c362.webp?v=1787152393&width=360',
  alt: 'The Promotion Knit Sweater Dark Orange - VuxClothes FW26 collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In'],
  disabledSizes: ['XL'],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#c4622d' }]

},
{
  id: 9,
  name: 'C-suite Zip-Up Hoodie Grey',
  price: '99€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR55052.webp?v=1785920015&width=360',
  alt: 'C-suite Zip-Up Hoodie Grey - VuxClothes FW26 collection',
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  badges: ['New In'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#2c3e6b' }]

},
{
  id: 10,
  name: 'C-suite Zip-Up Hoodie Navy',
  price: '99€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR55886.webp?v=1785919976&width=360',
  alt: 'C-suite Zip-Up Hoodie Navy - VuxClothes FW26 collection',
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  badges: ['New In'],
  disabledSizes: ['XL', 'XXL'],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#2c3e6b' }]

},
{
  id: 11,
  name: 'Le Marais Knit Sweater Grey Melange',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/LE_MARAIS_KNIT_WHITE_front_067a1c40-1292-4bc5-8cba-7d32e90ad09f_front.webp?v=1786437786&width=360',
  alt: 'Le Marais Knit Sweater Grey Melange - VuxClothes FW26 collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#c4a882' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#c4a0b8' }]

},
{
  id: 12,
  name: 'Le Marais Knit Sweater Blue',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR51774.webp?v=1786028335&width=360',
  alt: 'Le Marais Knit Sweater Blue - VuxClothes FW26 collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#c4a882' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#c4a0b8' }]

}];


const knitwearProducts = [
{
  id: 1,
  name: 'Le Marais Knit Sweater Grey Melange',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/LE_MARAIS_KNIT_WHITE_front_067a1c40-1292-4bc5-8cba-7d32e90ad09f_front.webp?v=1786437786&width=360',
  alt: 'Le Marais Knit Sweater Grey Melange - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#c4a882' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#c4a0b8' }]

},
{
  id: 2,
  name: 'Le Marais Knit Sweater Blue',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR51774.webp?v=1786028335&width=360',
  alt: 'Le Marais Knit Sweater Blue - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#c4a882' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#c4a0b8' }]

},
{
  id: 3,
  name: 'Le Marais Knit Sweater Ash',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR_DAY260136_08286300-5433-4b6c-aa73-f98eb882dc7f.webp?v=1786354880&width=400',
  alt: 'Le Marais Knit Sweater Ash - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#c4a882' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#c4a0b8' }]

},
{
  id: 4,
  name: 'Le Marais Knit Sweater Pink',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR49013_0b3a31fe-0dc7-4788-9807-a775eae3322b.webp?v=1786355084&width=400',
  alt: 'Le Marais Knit Sweater Pink - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In', 'Most Wanted'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#c4a882' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#c4a0b8' }]

},
{
  id: 5,
  name: 'Wavy Knit Sweater Brown',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_LEISURELEAGUE_ECOMM31008_e2654d66-e52e-463a-a676-b9994bf24603.webp?v=1786116272&width=400',
  alt: 'Wavy Knit Sweater Brown - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In'],
  disabledSizes: ['S', 'XL'],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#8b6b4a' },
  { url: '#', color: '#f5f0e8' }]

},
{
  id: 6,
  name: 'Wavy Knit Sweater Ivory',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR50480_2c5755c1-8fcf-472f-9c9d-694c923ab3c3.webp?v=1786355127&width=400',
  alt: 'Wavy Knit Sweater Ivory - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In'],
  disabledSizes: ['XL'],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#8b6b4a' },
  { url: '#', color: '#f5f0e8' }]

},
{
  id: 7,
  name: 'Home-Office Knit Sweater',
  price: '129€',
  image: 'https://nude-project.com/cdn/shop/files/NP_SORRY_ECOMM67425_192629be-d5d5-48d1-90f2-0a5ff443c362.webp?v=1787152393&width=360',
  alt: 'Home-Office Knit Sweater - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In'],
  disabledSizes: ['S', 'XL'],
  swatches: []
},
{
  id: 8,
  name: 'Wavy Knit Sweater Ash',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR55052.webp?v=1785920015&width=360',
  alt: 'Wavy Knit Sweater Ash - VuxClothes knitwear collection',
  sizes: ['S', 'M', 'L', 'XL'],
  badges: ['New In'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#8b6b4a' },
  { url: '#', color: '#f5f0e8' }]

}];


const womensProducts = [
{
  id: 1,
  name: 'Cargo Leather Bag',
  price: '169€',
  image: 'https://nude-project.com/cdn/shop/files/5front_f0cab7b8-839a-4733-8b38-b1b74992abbb.webp?v=1786553431&width=360',
  alt: 'Cargo Leather Bag - VuxClothes women exclusive collection',
  sizes: [],
  badges: ['Genuine Leather'],
  disabledSizes: [],
  swatches: []
},
{
  id: 2,
  name: 'Kiddo Full-Zip Knit Yellow',
  price: '109€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR55886.webp?v=1785919976&width=360',
  alt: 'Kiddo Full-Zip Knit Yellow - VuxClothes women exclusive collection',
  sizes: ['XS', 'S', 'M', 'L'],
  badges: [],
  disabledSizes: ['S'],
  swatches: []
},
{
  id: 3,
  name: 'Cherry Leather Bag Green',
  price: '169€',
  image: 'https://nude-project.com/cdn/shop/files/NP_SORRY_ECOMM63399.webp?v=1786704349&width=1208',
  alt: 'Cherry Leather Bag Green - VuxClothes women exclusive collection',
  sizes: [],
  badges: ['Genuine Leather'],
  disabledSizes: [],
  swatches: []
},
{
  id: 4,
  name: 'Simona Top Blue',
  price: '69€',
  image: 'https://nude-project.com/cdn/shop/files/IMG_6973_14fbe607-b4d2-4aed-bc7b-3c7a5d9829d1.webp?v=1787562534&width=836',
  alt: 'Simona Top Blue - VuxClothes women exclusive collection',
  sizes: ['XS', 'S', 'M', 'L'],
  badges: ['Complete Set'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#c4c4c4' }]

},
{
  id: 5,
  name: 'Simona Bottom Blue',
  price: '99€',
  image: 'https://nude-project.com/cdn/shop/files/IMG_1101_a53f98c6-fc0c-4284-ab86-20cfdff27b42.webp?v=1787590361&width=1208',
  alt: 'Simona Bottom Blue - VuxClothes women exclusive collection',
  sizes: ['34', '36', '38', '40', '42'],
  badges: ['Complete Set'],
  disabledSizes: ['34', '42'],
  swatches: [
  { url: '#', color: '#5b7fa6' },
  { url: '#', color: '#c4c4c4' }]

},
{
  id: 6,
  name: 'Mija Knit Polo',
  price: '69€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR49013_0b3a31fe-0dc7-4788-9807-a775eae3322b.webp?v=1786355084&width=400',
  alt: 'Mija Knit Polo - VuxClothes women exclusive collection',
  sizes: ['XS', 'S', 'M', 'L'],
  badges: ['New In'],
  disabledSizes: [],
  swatches: []
},
{
  id: 7,
  name: 'Regina Tank Top Washed Brown',
  price: '39€',
  image: 'https://nude-project.com/cdn/shop/files/NP_WORKWEAR50480_2c5755c1-8fcf-472f-9c9d-694c923ab3c3.webp?v=1786355127&width=400',
  alt: 'Regina Tank Top Washed Brown - VuxClothes women exclusive collection',
  sizes: ['XS', 'S', 'M', 'L'],
  badges: [],
  disabledSizes: ['XS', 'S'],
  swatches: [
  { url: '#', color: '#8b6b4a' },
  { url: '#', color: '#e8a0b0' }]

},
{
  id: 8,
  name: 'Hearts Tee Grey',
  price: '39€',
  image: 'https://nude-project.com/cdn/shop/files/NP_LEISURELEAGUE_ECOMM31008_e2654d66-e52e-463a-a676-b9994bf24603.webp?v=1786116272&width=400',
  alt: 'Hearts Tee Grey - VuxClothes women exclusive collection',
  sizes: ['XS', 'S', 'M', 'L'],
  badges: [],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#9e9e9e' },
  { url: '#', color: '#ffffff' }]

}];


const accessoriesProducts = [
{
  id: 1,
  name: 'Cherry Charm Gold',
  price: '19€',
  image: 'https://nude-project.com/cdn/shop/files/3_1b1059da-e18d-4b18-81d6-1ca6113ec547.webp?v=1786037555&width=360',
  alt: 'Cherry Charm Gold - VuxClothes accessories collection',
  sizes: [],
  badges: ['Vux Members Exclusive'],
  disabledSizes: [],
  swatches: []
},
{
  id: 2,
  name: 'Metal Barrel Bag Navy',
  price: '149€',
  image: 'https://nude-project.com/cdn/shop/files/a1a1_2.webp?v=1788171762&width=1200',
  alt: 'Metal Barrel Bag Navy - VuxClothes accessories collection',
  sizes: [],
  badges: [],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#8b6b4a' },
  { url: '#', color: '#2c3e6b' }]

},
{
  id: 3,
  name: 'Metal Barrel Bag Brown',
  price: '149€',
  image: 'https://nude-project.com/cdn/shop/files/bbbb_2b116376-7842-446b-ae12-37c8100df251.webp?v=1788171765&width=1200',
  alt: 'Metal Barrel Bag Brown - VuxClothes accessories collection',
  sizes: [],
  badges: [],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#8b6b4a' },
  { url: '#', color: '#2c3e6b' }]

},
{
  id: 4,
  name: 'Cargo Leather Bag',
  price: '169€',
  image: 'https://nude-project.com/cdn/shop/files/5front_f0cab7b8-839a-4733-8b38-b1b74992abbb.webp?v=1786553431&width=360',
  alt: 'Cargo Leather Bag - VuxClothes accessories collection',
  sizes: [],
  badges: ['Genuine Leather'],
  disabledSizes: [],
  swatches: []
},
{
  id: 5,
  name: 'Ona Necklace',
  price: '99€',
  image: 'https://nude-project.com/cdn/shop/files/111_f9dea3a3-9faa-4518-bcd7-8826ebff2385.jpg?v=1785772092&width=1200',
  alt: 'Ona Necklace - VuxClothes accessories collection',
  sizes: [],
  badges: [],
  disabledSizes: [],
  swatches: []
},
{
  id: 6,
  name: 'S925 Miamor Ring Silver',
  price: '89€',
  image: 'https://nude-project.com/cdn/shop/files/2aa.jpg?v=1785772177&width=1200',
  alt: 'S925 Miamor Ring Silver - VuxClothes accessories collection',
  sizes: [],
  badges: [],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#c0c0c0' },
  { url: '#', color: '#d4af37' }]

},
{
  id: 7,
  name: 'S925 Miamor Ring Gold',
  price: '89€',
  image: 'https://nude-project.com/cdn/shop/files/3a_243d69b2-d0c9-4858-9cf1-04b1f2f9be85.jpg?v=1785772325&width=1200',
  alt: 'S925 Miamor Ring Gold - VuxClothes accessories collection',
  sizes: [],
  badges: [],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#d4af37' },
  { url: '#', color: '#c0c0c0' }]

},
{
  id: 8,
  name: 'Prime Condom Beanie Black',
  price: '45€',
  image: 'https://nude-project.com/cdn/shop/files/4a_6f61b892-e2ca-457b-b28d-408ba9533260.jpg?v=1785772469&width=1200',
  alt: 'Prime Condom Beanie Black - VuxClothes accessories collection',
  sizes: [],
  badges: ['New In'],
  disabledSizes: [],
  swatches: [
  { url: '#', color: '#1a1a1a' },
  { url: '#', color: '#f5f0e8' },
  { url: '#', color: '#6b7c5a' }]

}];


// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="MainContent">
        {/* Hero Section */}
        <HeroSection />

        {/* New Arrivals Carousel */}
        <ProductCarousel
          title="New Arrivals"
          subtitle="FW26 · 01"
          products={newArrivalsProducts}
          shopLink="#" />
        

        {/* Knitwear Banner */}
        <CategoryBanner
          image="https://nude-project.com/cdn/shop/files/le_marais_vertical.webp?format=pjpg&quality=70&v=1789490196&width=906"
          imageAlt="VuxClothes knitwear collection FW2026 - Le Marais knit sweaters"
          subtitle="FW2026"
          title="Knitwear"
          shopLink="#"
          position="left" />
        

        {/* Knitwear Carousel */}
        <ProductCarousel
          title="Knitwear"
          subtitle="FW2026"
          products={knitwearProducts}
          shopLink="#" />
        

        {/* Women's Exclusive Banner */}
        <CategoryBanner
          image="https://nude-project.com/cdn/shop/files/woman_vertical_blanco_c51db8ff-2137-4efd-829a-1f18455e6251.jpg?format=pjpg&quality=70&v=1788338022&width=906"
          imageAlt="VuxClothes women exclusive collection FW2026 - women's fashion"
          subtitle="FW2026"
          title="Women's Exclusive"
          shopLink="#"
          position="left" />
        

        {/* Women's Carousel */}
        <ProductCarousel
          title="Women's Exclusive"
          subtitle="FW2026"
          products={womensProducts}
          shopLink="#" />
        

        {/* Accessories Banner */}
        <CategoryBanner
          image="https://nude-project.com/cdn/shop/files/accesoriosvertical_escaneado_1_c23852c5-7a8a-4f56-b406-0401a6246e00.jpg?format=pjpg&quality=70&v=1788338201&width=906"
          imageAlt="VuxClothes accessories collection FW2026 - bags, jewelry and more"
          subtitle="FW2026"
          title="Accessories"
          shopLink="#"
          position="left" />
        

        {/* Accessories Carousel */}
        <ProductCarousel
          title="Accessories"
          subtitle="FW2026"
          products={accessoriesProducts}
          shopLink="#" />
        

        {/* NY Store Banner */}
        <NYStoreBanner />

        {/* Members Section */}
        <MembersSection />

        {/* Stores Section */}
        <StoresSection />
      </main>

      <Footer />
    </div>);

}