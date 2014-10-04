function init() {
  fixWrapperElement();
  injectProfileButton();
}

function injectProfileButton() {
  var el = document.getElementById('pagelet_timeline_profile_actions');

  // check if it's a profile page
  if (el) {

    var outerSpan = document.createElement('span');
    outerSpan.className = 'uiButtonGroup uiButtonGroupOverlay';

    var a = document.createElement('a');
    a.className = 'uiPopoverButton uiButton uiButtonOverlay uiButtonLarge _5f0v';
    outerSpan.appendChild(a);

    var innerSpan = document.createElement('span');
    innerSpan.className = 'uiButtonText';
    innerSpan.innerHTML = 'SayHallo';
    a.appendChild(innerSpan);

    el.insertBefore(outerSpan, el.firstChild);

  }

}

function fixWrapperElement() {
  addStyleString('html #fbTimelineHeadline ._70j { width: auto; }');
}

function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
}

setTimeout(init, 500);
