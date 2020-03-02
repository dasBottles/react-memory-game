import React, {useState} from 'react';
import Card from './Components/Card/Card';
import Emotes from './pepeLaugh.json'

function App() {
  const [emotes, setEmotes] = useState(Emotes)
  const removeEmote = id => {
    console.log('Emote removed', id);
    const newListOfEmotes = emotes.filter(emote => emote.id !== id);
    setEmotes(newListOfEmotes);
  }

  return (
    <div className='container'>
      {Emotes.map(emote => 
        <Card
        key={emote.id}
        image={emote.image}
        remove={() => removeEmote(emote.id)}
        />
      )}
    </div>
  );
}

export default App;
