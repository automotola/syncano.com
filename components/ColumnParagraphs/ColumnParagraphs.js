import React from 'react';
import classNames from 'classnames';

export default ({ theme, headline, children, imageSrc, image2xSrc, imageSmallSrc, imageSmall2xSrc }) => {
  const className = classNames({
    'column-paragraphs': true,
    'column-paragraphs--blue': (theme === 'blue')
  });

  return (
    <div className={className}>
      <div className="inner inner--column-paragraphs">
        {headline && <h2>{headline}</h2>}
        <div className="column-paragraphs__paragraphs">
          {children}
        </div>
        <div className="column-paragraphs__image">
          <picture>
            <source
              media="(min-width: 321px)"
              srcSet={`${imageSmallSrc} 1x, ${imageSmall2xSrc} 2x`}
            />
            <source srcSet={`${imageSrc} 1x, ${image2xSrc} 2x`} />
            <img
              className="browser-image browser-image--dark"
              src={imageSmall2xSrc}
              alt={headline}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
