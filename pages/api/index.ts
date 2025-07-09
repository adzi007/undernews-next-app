import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  message: string;
}

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => void;


const handler: NextApiHandler = (req, res) => {
    const data: Data = {
      message: 'test next api',
    };
  
    res.status(200).json(data);
  };
  
export default handler;