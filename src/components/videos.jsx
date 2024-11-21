import React from "react";

export const Videos = () => {
  return (
    <div className="container">
      <h2 className="container-title">Vídeos</h2>
      <div className="container-vid">
        <iframe
          className="video-item"
          width="426"
          height="240"
          src="https://www.youtube.com/embed/8lMIdrlIWOQ"
          title="¿Qué es la inteligencia artificial?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="video-item"
          width="426"
          height="240"
          src="https://www.youtube.com/embed/_tA5cinv0U8"
          title="¿Qué es y cómo funciona la INTELIGENCIA ARTIFICIAL?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    // <div className="container-videos">
    //   <iframe
    //     className="video-item"
    //     width="640"
    //     height="360"
    //     src="https://www.youtube.com/embed/8lMIdrlIWOQ"
    //     title="¿Qué es la inteligencia artificial?"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     referrerpolicy="strict-origin-when-cross-origin"
    //     allowfullscreen
    //   ></iframe>
    //   <iframe
    //     className="video-item"
    //     width="640"
    //     height="360"
    //     src="https://www.youtube.com/embed/_tA5cinv0U8"
    //     title="¿Qué es y cómo funciona la INTELIGENCIA ARTIFICIAL?"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     referrerpolicy="strict-origin-when-cross-origin"
    //     allowfullscreen
    //   ></iframe>
    // </div>
  );
};
