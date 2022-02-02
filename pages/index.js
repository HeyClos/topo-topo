import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const shop_id = process.env.SHOPIFY_STORE_DOMAIN
  const client_id = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
  const query = `{ products(first: 2) { edges { node { id title } } } }`; 
  // For reference, additional query examples:
  //`{ products(first: 20) { edges { node { title description images(first: 1) { edges { node { altText transformedSrc(maxWidth: 400, maxHeight: 400) } } } } } } }`;
  //`{ shop { name } }`

  //state hook
  const [products, setProducts] = useState([]);
  //const [shop, setShop] = useState([]);

  async function apiCall(query) { 
    return await fetch(
      `${shop_id}/api/2022-01/graphql.json`,
      { method: 'POST', 
        headers: {
          'Content-Type': 'application/graphql',
          'X-Shopify-Storefront-Access-Token': `${client_id}`
        },
        "body": query
      })
      .then(response => response.json())
  }
  apiCall(query)
    .then(response => { console.log(response) })
    .then(response =>  setProducts(response) )
    //.then(response => { setShop(response.data.shop) })
    //.catch(error => console.log(error))

  //api call to update state
  
  return (
    <>
      <Head>
        <title>topo whore</title>
      </Head>
      <section className={styles.headingMd}>
        <p className={styles.headingLg}>maybe a Ryan Gosling site.</p>
        <p>
          launching sometime maybe
        </p>
        <p>
          stay updated via our <a href="https://twitter.com/topowhore">Twitter</a> and <a href="https://instagram.com/topowhoreco">IG</a>.
        </p>
      </section>

      <section className={styles.headingMd}>
        <p className={styles.headingLg}>recent products</p>
        <div className={styles.grid}>
          {console.log("PRODUCTS", products)}
          {/* {products.map(product => (
            <div className={styles.card} key={product.node.id}>
              <a href={`https://${shop_id}/products/${product.node.id}`}>
                <Image
                  src={product.node.images[0].node.transformedSrc}
                  alt={product.node.images[0].node.altText}
                  width={400}
                  height={400}
                />
              </a>
              <p>{product.node.title}</p>
            </div>
          ))} */}
        </div>
      </section>
    </>
  )
}
