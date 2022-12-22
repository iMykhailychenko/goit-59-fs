import { useState } from 'react';

import classNames from 'classnames';

import css from './EasterEgg.module.css';
import image from './image.png';

export const EasterEgg = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => setIsOpen(false);

  return (
    <button type="button" className={classNames(css.wrp, isOpen ? css.open : css.close)} onClick={handleOpen}>
      <img className={css.img} src={image} alt="" />
    </button>
  );
};
