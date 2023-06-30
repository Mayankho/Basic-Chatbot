// import { NextResponse } from 'next/server';
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export async function POST(req: Request, res: NextResponse) {
//     const body = await req.json()

//     console.log(body.messages)
  
//     const completion = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: body.messages,
//     });
//     console.log(completion.data.choices[0].message);
//     const theResponse = completion.data.choices[0].message;
  
//     return NextResponse.json({ output: theResponse }, { status: 200 })
// }

import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = req.body;
  
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: body.messages,
    });
    console.log(completion.data.choices[0].message);
    const theResponse = completion.data.choices[0].message;
  
    res.status(200).json({ output: theResponse });
  } else {
    res.status(405).send('Method not allowed')
  }
}

