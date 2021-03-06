/**
 * Copyright (c) 2020 Google Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const exposed = {};
if (location.search) {
  var a = document.createElement("a");
  a.href = location.href;
  a.search = "";
  history.replaceState(null, null, a.href);
}

function tweet_(url) {
  open(
    "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url),
    "_blank"
  );
}
function tweet(anchor) {
  tweet_(anchor.getAttribute("href"));
}
expose("tweet", tweet);

function share(anchor) {
  var url = anchor.getAttribute("href");
  event.preventDefault();
  if (navigator.share) {
    navigator.share({
      url: url,
    });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  } else {
    tweet_(url);
  }
}
expose("share", share);

function prefetch(e) {
  if (e.target.tagName != "A") {
    return;
  }
  if (e.target.origin != location.origin) {
    return;
  }
  /**
   * Return the given url with no fragment
   * @param {string} url potentially containing a fragment
   * @return {string} url without fragment
   */
  const removeUrlFragment = (url) => url.split("#")[0];
  if (
    removeUrlFragment(window.location.href) === removeUrlFragment(e.target.href)
  ) {
    return;
  }
  var l = document.createElement("link");
  l.rel = "prefetch";
  l.href = e.target.href;
  document.head.appendChild(l);
}
document.documentElement.addEventListener("mouseover", prefetch, {
  capture: true,
  passive: true,
});
document.documentElement.addEventListener("touchstart", prefetch, {
  capture: true,
  passive: true,
});


function expose(name, fn) {
  exposed[name] = fn;
}

addEventListener("click", (e) => {
  const handler = e.target.closest("[on-click]");
  if (!handler) {
    return;
  }
  e.preventDefault();
  const name = handler.getAttribute("on-click");
  const fn = exposed[name];
  if (!fn) {
    throw new Error("Unknown handler" + name);
  }
  fn(handler);
});

//Dark mode toggle. Initial theme set in prerender.js
const buttonTheme = document.querySelector("#btn-theme");

buttonTheme.addEventListener("click", (e) => {
  const htmlClassList = document.documentElement.classList;
  const message = {
    type: 'set-theme',
  };
  if (htmlClassList.contains('dark')) {
    htmlClassList.remove('dark');
    localStorage.theme = 'light';
    message.theme = 'github-light'
  } else {
    htmlClassList.add('dark');
    localStorage.theme = 'dark';
    message.theme = 'github-dark'
  }

  const iframe = document.querySelector('.utterances-frame');
  iframe.contentWindow.postMessage(message, 'https://utteranc.es');
});

// wait for utterances to load and send its first message.
addEventListener('message', event => {
    if (event.origin !== 'https://utteranc.es') {
      return;
    }
    const message = {
      type: 'set-theme',
      theme: localStorage.theme == 'dark' ? 'github-dark' : 'github-light'
    };
    const utterances = event.source;// document.querySelector('iframe').contentWindow; // try event.source instead
    utterances.postMessage(message, 'https://utteranc.es');
  });
