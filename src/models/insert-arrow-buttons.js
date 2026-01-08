import { leftArrowButtonTemplate, rightArrowButtonTemplate } from '@/templates';

/**
 * @typedef {Object} InsertArrowButtonsParams
 * @property {HTMLElement} parentElement
 * @property {'left' | 'right' | 'both'} position
 * @property {string} leftButtonClassName
 * @property {string} rightButtonClassName
 *
 * @param {InsertArrowButtonsParams} insertArrowButtonsParams
 * @returns
 */
export const insertArrowButtons = ({
  parentElement,
  position,
  leftButtonClassName,
  rightButtonClassName,
}) => {
  if (position === 'none') {
    return;
  }

  if (position === 'left') {
    parentElement.insertAdjacentHTML(
      'beforeend',
      leftArrowButtonTemplate({ className: leftButtonClassName }),
    );
  } else if (position === 'right') {
    parentElement.insertAdjacentHTML(
      'beforeend',
      rightArrowButtonTemplate({ className: rightButtonClassName }),
    );
  } else {
    insertArrowButtons({
      parentElement,
      position: 'left',
      leftButtonClassName,
      rightButtonClassName,
    });
    insertArrowButtons({
      parentElement,
      position: 'right',
      leftButtonClassName,
      rightButtonClassName,
    });
  }
};
