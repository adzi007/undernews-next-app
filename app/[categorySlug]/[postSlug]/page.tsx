import React from 'react'
import BreadCrumb from '../../components/single/BreadCrumb'
import Image from 'next/image'
import { BiLink, BiLogoFacebook, BiLogoTelegram, BiLogoTwitter, BiLogoWhatsapp } from 'react-icons/bi'
import CommentSection from '../../components/single/CommentSection'
import CardNewsGrouped from '../../components/CardNewsGrouped'
import MainLayout from '../../components/commons/MainLayout'
import Link from "next/link";
import { Suspense } from 'react'
import { dateToTimeAgo } from '@/lib/common'
import { getPostSingle } from '@/services/PostSingle'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'


export async function generateMetadata() {
	return {
		title: 'Undernews | ',
		description: 'My description',
	}
}

async function Single({params}: {params: {categorySlug:string, postSlug:string}}) {

  const session = await getServerSession(authOptions)

  let response    = await getPostSingle(params.postSlug);
  let postSingle  = response.data.post

  let sessionServer = {
    user: {
      id: ""
    }
  }

  if(session){

    sessionServer = session

  }
  
  
  return (
    <MainLayout>
      <main className="container mt-4 container-main">
        <div className="row">
          <div className="col-md-8">

            <BreadCrumb />

            <article className="blog-post">
              <h2 className="blog-post-title mb-1">{postSingle?.title}</h2>

              <div className="meta-social mb-3">
                <p className="blog-post-meta mb-0">{ dateToTimeAgo(postSingle?.publishAt) } by <a href="#">{ postSingle?.author.name }</a> </p>
                <div className='share-social'>
                  <span className=''>share :</span>
                  <button type='button' className='btn btn-social ms-2 rounded-circle tw'><BiLogoTwitter /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle fb'><BiLogoFacebook /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle wa'><BiLogoWhatsapp /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle tele'><BiLogoTelegram /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle share-link'><BiLink /></button>
                </div>
              </div>

              

              <Image src={postSingle?.thumbnail.url} width={300} height={200} alt='' />
              

              <p className='text-muted mt-2 fs-6'>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.</p>
              
              <div className="post__content" dangerouslySetInnerHTML={{__html: postSingle?.content.html}}></div>
            
            </article>


            <div className="mb-3 sp-recomendation-post">

                <div className="d-inline-flex w-100 justify-content-between mb-3">
                  <h5 className="">Recomendations</h5>
                  <a href="#">SEE MORE</a>
                </div>

                <div className="row">

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Economy"
                      slug="test-slug"
                      slugCategory='test-slug'
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France of riots in France of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Politics"
                      slug="test-slug"
                      slugCategory='test-slug'
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Sport"
                      slug="test-slug"
                      slugCategory='test-slug'
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Economy"
                      slug="test-slug"
                      slugCategory='test-slug'
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Politics"
                      slug="test-slug"
                      slugCategory='test-slug'
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Sport"
                      slug="test-slug"
                      slugCategory='test-slug'
                    />
                  </div>

                </div>

            </div>

            { postSingle?.relatedNews.posts.length > 0 &&
            
            <div className="mb-3 sp-related-post">

                <div className="d-inline-flex w-100 justify-content-between mb-3">
                  <h5 className="">Related News</h5>
                  <a href="#">SEE MORE</a>
                </div>

                <div className="row">

                  { postSingle?.relatedNews.posts.map((row, index) => {

                    return(
                      <div className="col-6 mb-3" key={index}>
                        <Link href={"/" + row.category.slug + "/" + row.slug} className='d-block w-100 h-100 border-bottom pb-2'>{ row.title }</Link>
                      </div>      
                    )
                  })}                          

                </div>

            </div>
            
            }

            <div className="sp-comment-section">
              <Suspense fallback={<p>Loading feed...</p>}>
                <CommentSection slug={params.postSlug} postId={postSingle?.id} sessionServer={sessionServer} />
              </Suspense>
            </div>

          </div>
          <div className="col-md-3 offset-md-1">
            <div className="add-item-vertical">
              <span className="fs-6 d-block ms-auto mb-2 me-4">ADVERTISEMENT</span>
              <Image src="https://images.pexels.com/photos/15439326/pexels-photo-15439326/free-photo-of-malam-hotel-neon-papan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={380} height={600} alt="" />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Single