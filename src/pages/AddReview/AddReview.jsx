import React from 'react';
import { useState} from "react" 
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import './AddReview.css'
import ReactStars from "react-rating-stars-component";
import { createReview } from '../../redux/actions';

 var justloaded = true
 var alreadyReviewed = false
 const validate = (input) => {
  const errors = {}
  justloaded = false
  if (input.username === "Username"){
    errors.user = '¡Debes logearte para dejar una reseña!'
  }
  if (alreadyReviewed === true){
    errors.user = '¡Solo puedes agregar una reseña!'
  }
  if (!input.rating) {
    errors.rating = '¡Debes seleccionar una calificación!'
  }
  if (input.review.length >= 250) {
    errors.review = '¡El máximo de caracteres es 250!'
  }

  return errors
}


const AddReview = () => {

    let { id } = useParams(); 
    const User = useSelector(state => state.user)
    let user = User
    console.log(User)
    const { Article } = useSelector((state) => state.details.detailedArticle);
    const Reviews = useSelector((state) => state.reviews.reviewList.reviews);


    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
      rating: "",
      review: "",
      username: user.nickname,
      item: id,
   });
   let Chequeo = (Reviews.filter(review => review.username === input.username))
   if(Chequeo.length > 0) {alreadyReviewed = true}
    input.username = User.data.nickname
    let handleChange = (e) => {
      e.preventDefault();
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }, Article))
    }

    

    let handleSubmit = (e) => {
       e.preventDefault();
      dispatch(createReview(input))
      window.location.reload(false);

    }
    const ratingChanged = (newRating) => {
      console.log(newRating);
      
      input.rating=newRating
      setErrors(validate(
        input))
      };
    
  return (
    <>
    <div id="background2">
    <div/>
{/*     <Nav/>
 */}    <div>
    <form id = "form" onSubmit={handleSubmit}>    

    <div className="review">
        <label htmlFor="name">Inserta tu comentario o reseña</label>
        <input
          value={input.review}
          className={errors.review && 'danger'}
          type="text"
          name="review"
          onChange={handleChange}
        />
    </div>
    <div className="stars">
    <ReactStars
          count={5}
          onChange={ratingChanged}
          size={36}
          activeColor="#ffd700"
        />  
    </div>
    <div >
{/*     <input type="file"  accept="image/*" name="image" id="file"  onChange={loadFile}></input>
    <img id="output" width="200" alt="Sin imagen" />
      </div>        
        <div id='types'> */}



      </div>
       <div class="flex flex-row product-star-con" id="w__stars"></div>
      <button disabled={errors.review || errors.rating || errors.user || justloaded === true} type="submit" className>Añadir reseña</button>
      { errors.review && (<p className="danger">{errors.review}</p>) }
      { errors.rating && (<p className="danger">{errors.rating}</p>) }
      { errors.user && (<p className="danger">{errors.user}</p>) }

      </form>

      </div>  
      </div> 
      </>
 
  ); 
};

export default AddReview;
