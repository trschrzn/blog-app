import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  
  return (
    <section className='addPage'>
      <div className='mainAddPage'>
        <div className='title'>
          <input 
          type="text" 
          name="addTitle" 
          id="addTitle"
          placeholder='Add new title...' />
        </div>
        <div className="textContainer">
          <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
          />
        </div>
      </div>

      <div className="aside">

        <div className="publish">
          <h3>Opublikuj</h3>
          <span><b>Status: </b>szkic</span>
          <span><b>Widok: </b>publiczny</span>

          <label htmlFor="uploadFile">Dodaj plik: </label>
          <input type="file" name="uploadFile" id="uploadFile" />

          <div className="buttons">
            <button>Zapisz jako szkic</button>
            <button type='submit'>Opublikuj</button>
          </div>
        </div>

        <div className="categoriesAddPage">
          <div className="cat">
            <input 
              type="radio" 
              name="food" 
              id="food"
              value="food"
              // onChange={(e) => setCat(e.target.value)} 
            />
            <label htmlFor="food">jedzenie</label>
          </div>

          <div className="cat">
            <input 
              type="radio" 
              name="art" 
              id="art"
              value="art"
              // onChange={(e) => setCat(e.target.value)} 
              />
            <label htmlFor="art">sztuka</label>
          </div>
          <div className="cat">
            <input 
              type="radio" 
              name="science" 
              id="science"
              value="science"
              // onChange={(e) => setCat(e.target.value)} 
            />
            <label htmlFor="science">wiedza</label>
          </div>
          <div className="cat">
            <input 
              type="radio" 
              name="fashion" 
              id="fashion"
              value="fashion"
              // onChange={(e) => setCat(e.target.value)} 
            />
            <label htmlFor="fashion">moda</label>
          </div>
          <div className="cat">
            <input 
              type="radio" 
              name="technology" 
              id="technology"
              value="technology"
              // onChange={(e) => setCat(e.target.value)} 
            />
            <label htmlFor="technology">technologia</label>
          </div>
          <div className="cat">
            <input 
              type="radio" 
              name="animals" 
              id="animals"
              value="animals"
              // onChange={(e) => setCat(e.target.value)} 
            />
            <label htmlFor="technology">zwierzęta</label>
          </div>
          

          

          

        </div>
      </div>
    </section>
  )
}

export default Write