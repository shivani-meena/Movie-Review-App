// import { useState } from 'react';
// import './form.css';

// function Form() {
//     const[value,setValue] = useState("");
//     console.log(value,"value");

//     return (
//         <div className="form container">
//             <h2 className='heading'>Fill this form to add Movie</h2>
//             <div className='movie'>Name of Movie</div>
//             <input className='movie-input' type="text" /><br></br>
//             <div className='year'>Year of Release</div>
//             <select className='options'
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}>
//                 <option></option>
//                 <option>2016</option>
//                 <option>9997</option>
//                 <option>2024</option>
//             </select><br></br>
//             <div className='time'>Movie duration</div>
//             <input className="time-input" type="" /><span className='time-unit'>Hours</span>
//             <input className="time-input" type="" /><span className='time-unit'>Min</span>
//             <div className='Genre'>Movie Genre</div>
//             <div className='genre-name'>Select all that is applicabale</div>
//             <input className='checkbox' type="checkbox" />
//             <label className='genre-name'>Drama</label><br></br>
//             <input className='checkbox' type="checkbox" />
//             <label className='genre-name' for="">Biography</label><br></br>
//             <input className='checkbox' type="checkbox" />
//             <label className='genre-name' for="">Romance</label><br></br>
//             <input className='checkbox' type="checkbox" />
//             <label className='genre-name' for="">Action</label><br></br>
//             <input className='checkbox' type="checkbox" />
//             <label className='genre-name' for="">Documentary</label><br></br>
//             <div className='plot'>Description</div>
//             <input className='text-area ' type='text' />
//             <div className='image-upload'>Upload Image of Movie</div>
//             <button className='image-button'>Upload</button>
//         </div>
//     );

// }

// export default Form;