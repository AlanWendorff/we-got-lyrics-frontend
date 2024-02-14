const typeWriter = (text: string, speed: number, element_id: string) => {
  let letterIndex = 0;
  let timeout;

  if (letterIndex < text.length) {
    const elem = document.querySelector(`#${element_id}`) as HTMLParagraphElement;

    if (elem) {
      elem.innerHTML += text.charAt(letterIndex);
    }

    letterIndex++;
    timeout = setTimeout(typeWriter, speed);
    return;
  }

  clearTimeout(timeout);
};

export default typeWriter;
