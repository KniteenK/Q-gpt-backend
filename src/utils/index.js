
import app from './app.js';
import axios from 'axios';

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

// app.post('/api/ask', async (req,res) =>{
//     const options = {
//         method: 'POST',
//         url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2',
//         // url:'http://localhost:3000/api/ask',
//         headers: {
//           'x-rapidapi-key': 'a17cd95387msha606f79b49f34eap1bb3a4jsndf11b2d013e9',
//           'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
//           'Content-Type': 'application/json'
//         },
//         data: {
//           messages: [
//             {
//               role: 'user',
//               content: req.body.messages[0].content+'reply withinin 50 words max',
//             }
//           ],
//           system_prompt: '',
//           temperature: 0.9,
//           top_k: 5,
//           top_p: 0.9,
//           max_tokens: 10000,
//           web_access: false
//         }
//       };
    
//       try {
            
//         const aiResponse = await axios.request(options);
//         const aiMessage = { type: 'ai', text: aiResponse.data.result };
//         // console.log(aiMessage);
//         res.send(aiMessage.text);
//         console.log(aiMessage.text);
//         // setMessages((prevMessages) => [...prevMessages, aiMessage]);
//         // console.log(aiResponse.data.result);
        
//     } catch (error) {
        
//         console.error('Error sending message:', error);
//     }



// })

// app.get('/api', (req, res) => {
//     res.send('Hello, World!');
// })

const port = process.env.PORT || 3000 

app.listen(port , (req , res) => {
    console.log(`Server is running at http://localhost:${port}`)
})