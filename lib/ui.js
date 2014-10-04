function injectProfileButton() {
  var el = document.getElementById('pagelet_timeline_profile_actions');

  if (el) {

    var outerSpan = document.createElement('span');
    outerSpan.className = 'uiButtonGroup uiButtonGroupOverlay';

    var a = document.createElement('a');
    a.className = 'uiPopoverButton uiPopoverButtonWithChevron uiButton uiButtonOverlay uiButtonLarge _5f0v';
    outerSpan.appendChild(a);

    var innerSpan = document.createElement('span');
    innerSpan.className = 'uiButtonText';
    innerSpan.innerHTML = 'SayHallo';
    a.appendChild(innerSpan);

    el.appendChild(outerSpan);
  }

};

setTimeout(function() {
  injectProfileButton();
}, 1000);
