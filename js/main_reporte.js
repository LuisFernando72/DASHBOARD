function printHTML() {
    if (window.print) {
      window.print();
    }
  }
  
  const parameters = new URL(location.href);
  console.log(parameters);
  const text = parameters.searchParams.get("id").toLowerCase();
  const text2 = parameters.searchParams.get("id2").toLocaleLowerCase();
  console.log(text);
  console.log(text2);
  //Para el titulo
  document.querySelector('title').textContent = "Luis Fernando";

