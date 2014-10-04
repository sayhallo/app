var button;

function init() {
  // check if it's a profile page
  if (document.getElementById('pagelet_timeline_profile_actions')) {
    fixWrapperElement();
    injectProfileButton();
    registerClickHandler();
  }
}

function fixWrapperElement() {
  addStyleString('html #fbTimelineHeadline ._70j { width: auto; }');
}

function injectProfileButton() {
  var el = document.getElementById('pagelet_timeline_profile_actions');

  button = document.createElement('span');
  button.className = 'uiButtonGroup uiButtonGroupOverlay';

  var a = document.createElement('a');
  a.className = 'uiPopoverButton uiButton uiButtonOverlay uiButtonLarge _5f0v';
  button.appendChild(a);

  var innerSpan = document.createElement('span');
  innerSpan.className = 'uiButtonText';
  innerSpan.innerHTML = 'SayHallo';
  a.appendChild(innerSpan);

  el.insertBefore(button, el.firstChild);
}

function registerClickHandler() {
  button.addEventListener('click', function() {
    alert('test');
  });
}

function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
}

setTimeout(init, 500);
