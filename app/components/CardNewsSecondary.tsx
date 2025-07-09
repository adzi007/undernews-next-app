import Image from 'next/image'
import Link from "next/link";
import { NextPage } from "next";

interface Props {
    imgUrl: string;
    title: string;
    slug: string;
    slugCategory: string;
}

const CardNewsSecondary: NextPage<Props> = (props) => {

    const { imgUrl, title, slug, slugCategory } = props;

    return (
        <Link href={ "/" + slugCategory + '/' +slug }>
            <div className="card text-light rounded-0">
                <Image src={imgUrl} width={300} height={200} className="card-img rounded-0" alt="..." />
                <div className="card-img-overlay card-news-content-lg">
                    <div className="headline-news-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small>3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardNewsSecondary