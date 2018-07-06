import React from 'react';
import { Link } from 'react-router-dom';
export default function BagItem({
  id,
  title,
  body,
  price,
  imgurl,
  onSubmit = () => {},
  RemoveEvent = () => {},
}) {
  return (
    <div className="pre__layout">
      <div className="control">
        <form className="content pre_content">
          <img className="pre-img" src={imgurl} alt={title} id="img" />
          <div className="title is-3 pre-item">{title}</div>
          <div className="subtitle is-6 pre-item">{body}</div>
          <div className="subtitle is-5 pre-item">{price}</div>
          <button
            className="button is-white is-outlined"
            onClick={e => onSubmit(id)}
          >
            cart
          </button>
          <button
            className="button is-white is-outlined"
            onClick={e => RemoveEvent()}
          >
            exit
          </button>
        </form>
      </div>
    </div>
  );
}
