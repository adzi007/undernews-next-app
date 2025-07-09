
import Image from "next/image";
import CardNewsMain from "./components/CardNewsMain";
import CardNewsSecondary from "./components/CardNewsSecondary";
import CardNewsItem from "./components/CardNewsItem";
import CardNewsGrouped from "./components/CardNewsGrouped";

import MainLayout from "./components/commons/MainLayout";
import CNSecondaryMobile from "./components/CNSecondaryMobile";

import Link from "next/link";

import { getPostHome } from "@/services/graphqlService";



export default async function Home() {

  let response    = await getPostHome();
  const headLines = response.data.postHeadlines
  const posts     = response.data.posts
  

  return (

    <MainLayout>
      <main className="container container-main mt-4">

        <div className="header-ads-mobile">
          <Image src='assets/ads-v-mobile.svg' alt="" fill /> 
        </div>

        <div className="row row-container-mobile">

          <div className="col-md-6 col-12">
            <CardNewsMain 
              imgUrl={headLines[0].posts[0].thumbnail.url} 
              title={headLines[0].posts[0].title} 
              slug={headLines[0].posts[0].slug}
              slugCategory={headLines[0].posts[0].category.slug}
              />
          </div>

          <div className="col-md-6 col-12">

            <div className="row row-headline-1">
              <div className="col">
                <CardNewsSecondary 
                  imgUrl={headLines[0].posts[1].thumbnail.url}
                  title={headLines[0].posts[1].title}
                  slug={headLines[0].posts[1].slug}
                  slugCategory={headLines[0].posts[1].category.slug}
                  />
                  <CNSecondaryMobile 
                    imgUrl={headLines[0].posts[1].thumbnail.url}
                    title={headLines[0].posts[1].title}
                    slug={headLines[0].posts[1].slug}
                    slugCategory={headLines[0].posts[1].category.slug}
                  />
              </div>
              <div className="col">
                <CardNewsSecondary 
                    imgUrl={headLines[0].posts[2].thumbnail.url}
                    title={headLines[0].posts[2].title}
                    slug={headLines[0].posts[2].slug}
                    slugCategory={headLines[0].posts[2].category.slug}
                  />
                  <CNSecondaryMobile 
                    imgUrl={headLines[0].posts[2].thumbnail.url}
                    title={headLines[0].posts[2].title}
                    slug={headLines[0].posts[2].slug}
                    slugCategory={headLines[0].posts[2].category.slug}
                  />
              </div>

            </div>

            <div className="row row-headline-2">

              <div className="col">
                <CardNewsSecondary 
                    imgUrl={headLines[0].posts[3].thumbnail.url}
                    title={headLines[0].posts[3].title}
                    slug={headLines[0].posts[3].slug}
                    slugCategory={headLines[0].posts[3].category.slug}
                  />
                  <CNSecondaryMobile 
                    imgUrl={headLines[0].posts[3].thumbnail.url}
                    title={headLines[0].posts[3].title}
                    slug={headLines[0].posts[3].slug}
                    slugCategory={headLines[0].posts[3].category.slug}
                  />
              </div>

              <div className="col">

                  <CardNewsSecondary 
                    imgUrl={headLines[0].posts[4].thumbnail.url}
                    title={headLines[0].posts[4].title}
                    slug={headLines[0].posts[4].slug}
                    slugCategory={headLines[0].posts[4].category.slug}
                  />
                  <CNSecondaryMobile 
                    imgUrl={headLines[0].posts[4].thumbnail.url}
                    title={headLines[0].posts[4].title}
                    slug={headLines[0].posts[4].slug}
                    slugCategory={headLines[0].posts[4].category.slug}
                  />

              </div>

            </div>
          </div>
          
        </div>

        <div className="row mt-4">

          <div className="col-12">
            <div className="nst-container">
              <h4 className="news-section-title">Updated</h4>
            </div>
          </div>

          <div className="col-12 row mt-2 pe-0">
            <div className="col-md-9">

            { posts.slice(0, 4).map((row, index) => {

                return(
                  <CardNewsItem 
                  key={index}
                  title={row.title}
                  imgUrl={row.thumbnail.url}
                  category={row.category.name}
                  slug={row.slug}
                  slugCategory={row.category.slug}
                  publishAt={row.publishAt}
                />
                )

            }) }


            <div className="news-group-secondary p-3">

              <div className="d-inline-flex w-100 justify-content-between mb-3">
                <h5 className="news-section-title">{headLines[1].title}</h5>
                <a href="#">SEE MORE</a>
              </div>

              <div className="row">

                { headLines[1].posts.map((row, index) => {

                  return(

                    <div className="col-md-4 col-6" key={index}>
                      <CardNewsGrouped 
                        title={row.title}
                        imgUrl={row.thumbnail.url}
                        category={row.category.name}
                        slug={row.slug}
                        slugCategory={row.category.slug}
                      />
                    </div>

                  )

                })}           

              </div>

            </div>

            { posts.slice(4, 8).map((row, index) => {

              return(
                <CardNewsItem 
                  key={index}
                  title={row.title}
                  imgUrl={row.thumbnail.url}
                  category={row.category.name}
                  slug={row.slug}
                  slugCategory={row.category.slug}
                  publishAt={row.publishAt}
              />
              )

              }) }



            <div className="news-group-primary p-3">

              <div className="d-inline-flex w-100 justify-content-between mb-3">
                <h5 className="news-section-title">{headLines[2].title}</h5>
                <a href="#">SEE MORE</a>
              </div>

              <div className="row">

                { headLines[2].posts.map((row, index) => {

                return(

                  <div className="col-md-4 col-6" key={index}>
                    <CardNewsGrouped 
                      title={row.title}
                      imgUrl={row.thumbnail.url}
                      category={row.category.name}
                      slug={row.slug}
                      slugCategory={row.category.slug}
                    />
                  </div>

                )

                })}  
                
              </div>

            </div>

            { posts.slice(8, 12).map((row, index) => {

              return(
                <CardNewsItem 
                  key={index}
                  title={row.title}
                  imgUrl={row.thumbnail.url}
                  category={row.category.name}
                  slug={row.slug}
                  slugCategory={row.category.slug}
                  publishAt={row.publishAt}
              />
              )

            }) }


              <div className="d-flex py-3 border-top mt-4">
              <Link href="/indexs" className="btn btn-primary btn-lg rounded-0 mx-auto">SEE MORE</Link>

              </div>

          </div>

          <div className="col-md-3 ps-3 pe-0">

            <div className="add-item-vertical">
              <span className="fs-6 d-block ms-auto mb-2 me-4">ADVERTISEMENT</span>
              <Image src="https://images.pexels.com/photos/15439326/pexels-photo-15439326/free-photo-of-malam-hotel-neon-papan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={380} height={600} alt="" />
            </div>
          </div>

        </div>

        </div>

        </main> 
    </MainLayout>

     
  )
}
