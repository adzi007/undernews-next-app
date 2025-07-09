
import { BiChevronRight } from "react-icons/bi";
import CardNewsItem from "../components/CardNewsItem";
import MainLayout from "../components/commons/MainLayout";
import { getPostIndexes, getCategoryMenus } from "@/services/graphqlService";
import { getTotalPages } from "@/lib/common";
import Pagination from "../components/Pagination";
import FormFilterIndex from "../components/indexs/FormFilterIndex";
import FilterIndexMobile from "../components/indexs/FilterIndexMobile";

export default async function Indexs({
  searchParams
}: {
  searchParams?: { page: string, category: string },
}) {

  const categoryMenu    = await getCategoryMenus()
  const pageParams      = searchParams?.page
  let categoryParams  = searchParams?.category
  let categoryParamsActiveSlug = searchParams?.category

  let page = 1
  const perPage = 10

  if(pageParams !== undefined){
    page =  parseInt(pageParams)
  }

  let postCategories: string[] = []

  interface SubCategoryMenu {
    name: string;
    slug: string;
  }
  let subCategoryMenu: SubCategoryMenu[] = []

  if(categoryParams !== undefined) {

    let selectedCategory = categoryMenu.find(x => x.mainCategory.slug === categoryParams);

    let categoryObjFromSubmenu
    if(selectedCategory == undefined) {

      const getParentCategory = categoryMenu.find( parent => {        
         if(parent.subCategories !== null && parent.subCategories.categories.length > 0 ){
            return parent.subCategories.categories.some(sub => sub.parentCategory !== null && sub.slug === categoryParams)
         }
         return false
      })

      categoryObjFromSubmenu = getParentCategory
      categoryParamsActiveSlug = getParentCategory?.mainCategory.slug
    }    

    postCategories.push(categoryParams) 
    
    if(selectedCategory?.subCategories !== null) {

      selectedCategory?.subCategories.categories.map((row) => {

        postCategories.push(row.slug)
        
        subCategoryMenu.push({
          name: row.name,
          slug: row.slug
        })

      })
    }

    if(selectedCategory == undefined) {

      categoryObjFromSubmenu?.subCategories.categories.map(row => {

        subCategoryMenu.push({
          name: row.name,
          slug: row.slug
        })

      })
      
    }

  }      
  
  const post      = await getPostIndexes(page, postCategories)
  const totalNews = parseInt(post.postsConnection.aggregate.count)
  const totalPage = getTotalPages(totalNews, perPage)
  

  return (

    <MainLayout>
      <main className="container mt-4 container-main">

        <div className="form-filter-lg py-3 border-bottom mb-5">
          <div>
            <h5 className="mb-0">INDEX NEWS</h5>
          </div>


          <div className="d-inline-flex w-60">

            <FormFilterIndex subCategoryMenu={subCategoryMenu} />

          </div>

        </div>

        <div className="form-filter-sm py-3 border-bottom mb-3 px-3">
         
          <FilterIndexMobile subCategoryMenu={subCategoryMenu} />

        </div>

        <div className="row">

          <div className="col-md-3 side-category-menu">
            <div className="list-group rounded-0 category-menu-list">

              <a href="/indexs" className={"list-group-item list-group-item-action " + (categoryParamsActiveSlug == undefined ? 'active':'' )  } aria-current="true">
                News <BiChevronRight />
              </a>

              { categoryMenu.map((row, index) => {

                return(
                  <a 
                    key={index} 
                    href={"/indexs?category=" + row.mainCategory.slug } 
                    className={"list-group-item list-group-item-action " + (categoryParamsActiveSlug == row.mainCategory.slug ? 'active':'' )  } >
                    {row.mainCategory.name} <BiChevronRight />
                  </a>
                )

              })}

            </div>
          </div>

          <div className="col-md-9">

            { post.posts.map((row, index) => {

              return(
                <CardNewsItem 
                  key={index}
                  title={ row.title }
                  imgUrl={row.thumbnail.url}
                  category={row.category.name}
                  slug={row.slug}
                  slugCategory={row.category.slug}
                  publishAt={row.publishAt}
                />
              )
              
            })}
              

              <div className="d-flex my-5">

                <Pagination 
                  totalPage={totalPage} 
                  curentPage={page} hasPrev={post.postsConnection.pageInfo.hasPreviousPage} 
                  hasNext={post.postsConnection.pageInfo.hasNextPage} 
                  slugCategory={categoryParams !== undefined ? categoryParams:"" }
                />

              </div>

          </div>
          

        </div>

        </main>
    </MainLayout>

    
  )
}

// export default Indexs