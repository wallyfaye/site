export default (identifier = 'core') => {
  document.documentElement.setAttribute("lang", "en-US")
  const element = document.createElement('div');
  element.setAttribute('id', identifier);
  element.classList.add(identifier);
  document.body.appendChild(element);
  return document.getElementById(identifier);
};
