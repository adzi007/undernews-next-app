
import { NextPage } from "next";

interface Props {
    totalPage: number;
    curentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
    slugCategory: string;
}

const Pagination: NextPage<Props> = (props) =>{ 

    const {totalPage, curentPage, hasPrev, hasNext, slugCategory } = props 

    const displayPage = 5;
    let start;
    let end;

    if (totalPage <= displayPage + 3) {
        start = 1;
        end = totalPage;
    } else {
        start = Math.max(1, curentPage - 4);
        end = Math.min(start + displayPage, totalPage);
    }

    const paginationList = [];

    if (start > 1) {
    paginationList.push({
        page: 1,
        label: '1',
        isActive: false,
    });

    if (start > 2) {
        paginationList.push({
        page: 0,
        label: '...',
        isActive: false,
        });
    }
    }

    for (let index = start; index <= end; index++) {
        paginationList.push({
            page: index,
            label: index.toString(),
            isActive: index === curentPage,
        });
    }

    if (end < totalPage) {
        if (end < totalPage - 1) {
            paginationList.push({
            page: 0,
            label: '...',
            isActive: false,
            });
        }
        paginationList.push({
            page: totalPage,
            label: totalPage.toString(),
            isActive: false,
        });
    } 
    

    return (
        <ul className="pagination mx-auto">
            <li className="page-item">
                <a className="page-link bg-transparent border-0" href="#" aria-label="Previous">
                    <span aria-hidden="true">Prev</span>
                </a>
            </li>

            { paginationList.map((row, index) => {

                // console.log('slugCategory',slugCategory);
                

                let urlLink = ""

                if(slugCategory == "") {
                    urlLink = "/indexs?page=" + row.page
                }else{
                    urlLink = "/indexs?category="+slugCategory+"&page=" + row.page
                }

                return(
                    <li className="page-item" key={index}>
                        <a className={ "page-link bg-transparent border-0 " + ( row.isActive ? 'active':'' ) } href={urlLink}>{ row.label }</a>
                    </li>
                )
            }) }

            <li className="page-item">
                <a className="page-link bg-transparent border-0" href="#" aria-label="Next">
                    <span aria-hidden="true">Next</span>
                </a>
            </li>

        </ul>
    )
}

export default Pagination