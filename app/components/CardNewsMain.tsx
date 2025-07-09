import Image from "next/image"
import Link from "next/link";
import { NextPage } from "next";

interface Props {
    imgUrl: string;
    title: string;
    slug: string;
    slugCategory: string;
}

const CardNewsMain: NextPage<Props> = (props) =>  {

    const { imgUrl, title, slug, slugCategory } = props;

    return (

        <Link href={ "/" + slugCategory + '/' +slug }>
            <div className="card text-light rounded-0 headline-news-one">
                <Image src={imgUrl} fill className="card-img rounded-0" alt="..." />
                <div className="card-img-overlay card-news-content-lg">
                    <div className="headline-news-body">
                        <h5 className="card-title headline-news-title">{title}</h5>
                        <p className="card-text headline-news-excerp">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text headline-news-time"><small>Last updated 3 mins ago</small></p>
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}

export default CardNewsMain