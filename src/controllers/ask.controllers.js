import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const ask = async (req, res) => {
  console.log(req.body.messages[0].content);
  
  const options = {
    method: 'POST',
    url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      messages: [
        {
          role: 'user',
          content: req.body.messages[0].content + ' reply within 50 words'
        }
      ],
    },
    responseType: 'stream'  // Enable streaming response
  };

  try {
    const aiResponse = await axios.request(options);

    // Stream the response chunks
    aiResponse.data.on('data', chunk => {
      // Send each chunk to the client as soon as it is received
      res.write(chunk.toString());
    });

    aiResponse.data.on('end', () => {
      // End the response when the stream is finished
      res.end();
      console.log('Response finished.');
    });

    aiResponse.data.on('error', error => {
      console.error('Error while receiving data:', error);
      res.status(500).send('Error while receiving data');
    });

  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Error sending message');
  }
};

export { ask };
