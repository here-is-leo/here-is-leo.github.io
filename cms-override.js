/* cms-override.js — خواندن محتوای ذخیره‌شده در پنل ادمین */
(function(){
  try {
    var s = localStorage.getItem('cms-site');
    if (s && typeof SITE !== 'undefined') {
      var o = JSON.parse(s);
      Object.keys(o).forEach(function(k){ SITE[k] = o[k]; });
    }
  } catch(e){ console.warn('CMS site override failed', e); }

  try {
    var b = localStorage.getItem('cms-blog');
    if (b && typeof blogPosts !== 'undefined') {
      var arr = JSON.parse(b);
      blogPosts.length = 0;
      for (var i = 0; i < arr.length; i++) blogPosts.push(arr[i]);
    }
  } catch(e){ console.warn('CMS blog override failed', e); }
})();