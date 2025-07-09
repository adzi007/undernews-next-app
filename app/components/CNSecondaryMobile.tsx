import Image from "next/image"
import Link from "next/link";
import { NextPage } from "next";

interface Props {
    imgUrl: string;
    title: string;
    slug: string;
    slugCategory: string;
}

const CNSecondaryMobile: NextPage<Props> = (props) => {

    const { imgUrl, title, slug, slugCategory } = props;

  return (
    <Link href={ "/" + slugCategory + '/' +slug }>
      <div className="card cns-mobile border-0">
          <Image src={ imgUrl } width={250} height={140} className="card-img-top cns-mobile-image rounded-0" alt="..." />
          <div className="card-body px-0 py-2">
            <h5 className="card-title cns-mobile-title">{ title }</h5>
          </div>
      </div>
    </Link>
  )
}

export default CNSecondaryMobile