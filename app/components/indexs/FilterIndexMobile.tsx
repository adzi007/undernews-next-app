"use client"

import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/navigation"

interface Props {
    subCategoryMenu: {
        name: string;
        slug: string;
    }[]
}

const FilterIndexMobile: NextPage<Props> = (props) => {

    const router = useRouter()

    const { subCategoryMenu } = props

    const [subCategory, setSubCategory] = useState("")

    const selectSubCategory = (subCategorySelected: string) => {

        setSubCategory(subCategorySelected)

        console.log('subCategorySelected', subCategorySelected);
        
        router.push("/indexs?category=" + subCategorySelected)
    }

    return (
        <div className="d-inline-flex justify-content-between w-100">

            <div className="form-filter-news">

            <select className="form-select filter-input-sm" id="inputEmail3" value={subCategory} onChange={(e) => selectSubCategory(e.target.value)} >
                <option value="">All Chanel</option>
                { subCategoryMenu.map((row, index) => {

                    return(
                        <option key={index} value={row.slug}>{ row.name }</option>
                    )

                })}
            </select>
            </div>

            <div className="form-filter-news">
                <input type="date" className="form-control filter-input-sm" name="tgl" id="inputEmail4" />
            </div>

        </div>
    )
}

export default FilterIndexMobile