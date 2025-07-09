import Image from "next/image";
import { NextPage } from "next";
import Link from 'next/link';
import { dateToTimeAgo } from '@/lib/common';
interface Props {
    imgUrl: string;
    title: string;
    category: string;
    slug: string;
    slugCategory: string;
    publishAt: string;
}

const CardNewsItem: NextPage<Props> = (props) => {

    const { imgUrl, title, category, slug, slugCategory, publishAt } = props;

    return (
        <Link href={ "/" + slugCategory + '/' +slug }>
            <div className="card mb-3 border-0 news-item">
                <div className="row g-0">
                <div className="col-4 news-item-image">
                    <Image src={imgUrl} fill className="img-fluid" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body news-item-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-danger news-item-category">{category}</p>
                    <p className="card-text news-item-time"><small className="text-body-secondary">{ dateToTimeAgo(publishAt) }</small></p>
                    </div>
                </div>
                </div>
            </div>
        </Link>
    )
}

export default CardNewsItem