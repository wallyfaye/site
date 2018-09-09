export default (identifier = 'core') => {
  const element = document.createElement('div');
  element.setAttribute('id', identifier);
  element.classList.add(identifier);
  document.body.appendChild(element);
  return document.getElementById(identifier);
};
