import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const ask = async(req,res) =>{
    console.log("AAya");
    const options = {
        method: 'POST',
        url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2',
        headers: {
          'x-rapidapi-key': '4ae9787187msh95a3e9a3ac99ffcp16117djsn5c958cc4c641',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
            messages: [
            {
              role: 'user',
              content: req.body.messages[0].content+'reply within 50 words '
            }
        ],
        }
      };
    
      try {
            
        var aiResponse = await axios.request(options);
        // console.log(aiResponse);
        // aiResponse = JSON.parse(aiResponse);
        const aiMessage = { type: 'ai', text: aiResponse.data};
        // console.log(aiMessage);
        res.send(aiMessage.text);
        console.log(aiMessage);
        // setMessages((prevMessages) => [...prevMessages, aiMessage]);
        // console.log(aiResponse.data.result);
        
    } catch (error) {
        
        console.error('Error sending message:', error);
    }



    
}

export {ask};