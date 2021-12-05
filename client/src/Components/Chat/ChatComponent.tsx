import './chat-style.css'

const ChatComponent = () => {
     return (
          <div id='chat-component' className='position-relative'>
               <div className='input-group position-absolute'>
                    <input
                         type='text'
                         className='form-control '
                         placeholder="Recipient's username"
                         aria-label="Recipient's username"
                         aria-describedby='button-addon2'
                    />
                    <button
                         className='btn btn-outline-secondary'
                         type='button'
                         id='button-addon2'>
                         Button
                    </button>
               </div>
          </div>
     )
}

export default ChatComponent
