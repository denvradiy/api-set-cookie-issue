import { NextApiRequest, NextApiResponse } from 'next';

const handlerTest2 = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.setHeader('Set-Cookie', [
      `accessToken=token1; HttpOnly; Path=/;`,
      `refreshToken=token2; HttpOnly; Path=/;`,
    ]);
    res.status(200).json({ success: true });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
};

export default handlerTest2;
