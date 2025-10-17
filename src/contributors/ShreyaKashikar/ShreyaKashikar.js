const text = "Website";
  let index = 0;
  const speed = 200; 
  const heading = document.getElementById("animatedHeader");

  function type() {
    if (index < text.length) {
      heading.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();