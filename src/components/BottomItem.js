import React from 'react';

export default function BottomItem({
  id,
  title,
  imgurl,
  handleOver = () => {},
  handleOut = () => {},
  ClickEvent = () => {},
  RemoveEvent = () => {},
}) {
  return (
    <div className="item__layout">
      <div className="control">
        <div className="content">
          <a onClick={e => ClickEvent(id)}>
            <img
              onMouseOver={e => handleOver(id)}
              onMouseOut={e => handleOut(id)}
              src={imgurl}
              alt={title}
              id="img"
              className="card-image"
              onClick={e => RemoveEvent()}
            />
          </a>
          <div className="title is-4">{title}</div>
        </div>
      </div>
    </div>
  );
}
