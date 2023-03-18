import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handlerTest1 = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const testInner = await axios.get(`http://localhost:3000/api/auth/test-inner`);

    res.status(200).json({ testInnerData: testInner.data.success, success: true });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
};

export default handlerTest1