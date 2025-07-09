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

const FormFilterIndex: NextPage<Props> = (props) => {

    const router = useRouter()

    const { subCategoryMenu } = props

    const [subCategory, setSubCategory] = useState("")

    const selectSubCategory = (subCategorySelected: string) => {

        setSubCategory(subCategorySelected)

        console.log('subCategorySelected', subCategorySelected);
        
        router.push("/indexs?category=" + subCategorySelected)
    }

    return (
        <>
            <div className="form-filter-news">
                <div className="row w-100">
                    <label htmlFor="inputEmail3" className="col-sm-4 col-form-label text-end">Sub Category</label>
                    <div className="col-sm-8">
                    <select className="form-select" id="inputEmail3" value={subCategory} onChange={(e) => selectSubCategory(e.target.value)} >

                        <option value="" >All Chanel</option>

                        { subCategoryMenu.map((row, index) => {

                        return(
                            <option key={index} value={row.slug}>{ row.name }</option>
                        )

                        })}

                    </select>
                    </div>
                </div>
                </div>

                <div className="form-filter-news">
                <div className="row w-100">
                    <label htmlFor="inputEmail4" className="col-sm-4 col-form-label text-end">Date</label>
                    <div className="col-sm-8">
                    <input type="date" className="input-date" name="tgl" id="inputEmail4" />
                    </div>
                </div>
                </div>
        </>
    )
}

export default FormFilterIndex