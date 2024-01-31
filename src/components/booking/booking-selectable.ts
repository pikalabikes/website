interface BookingSelectableOptions {
  container: HTMLElement,
  selectedClass: string,
  toggleClass: string,
  optionsClass: string,
};

export default (options: BookingSelectableOptions) => {
  const { container, optionsClass, selectedClass, toggleClass } = options;

  const optionsList = container.getElementsByClassName(optionsClass)[0];
  const buttons = Array.from(container.getElementsByClassName(toggleClass));
  const selectedOptions = container.getElementsByClassName(selectedClass);

  for (const button of buttons) {
    const options = container.querySelector(`#${button.getAttribute('aria-controls')}`);

    button.addEventListener('click', () => {
      Array.from(selectedOptions).forEach((opt) => opt.classList.remove(selectedClass));
      buttons.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));

      options.classList.add(selectedClass);
      button.setAttribute('aria-expanded', 'true');
      optionsList.scrollIntoView({ block: 'start' });
    });
  }
};
