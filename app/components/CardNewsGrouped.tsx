import Image from "next/image"
import { NextPage } from "next";
import Link from 'next/link'
interface Props {
    imgUrl: string;
    title: string;
    category: string;
    slug: string;
    slugCategory: string;
}

const CardNewsGrouped: NextPage<Props> = (props) => {

    const { imgUrl, title, category, slug, slugCategory } = props;

    return (
        <Link href={ "/" + slugCategory + '/' +slug }>
            <div className="card rounded-0 bg-transparent border-0">
                <Image src={imgUrl} width={140} height={140} className="card-img-top rounded-0" alt="..." />
                <div className="card-body px-0">
                    <p className="card-text text-danger mb-1">{category}</p>
                    <h5 className="card-title title-grouped-news">{title}</h5>
                    
                </div>
            </div>
        </Link>
    )
}

export default CardNewsGrouped