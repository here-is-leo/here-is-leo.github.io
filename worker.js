export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname;

    // اگر مسیر خالی بود، index.html رو برگردون
    if (path === '/') {
      path = '/index.html';
    }

    // سرویس فایل‌های استاتیک
    try {
      const response = await fetch(`https://www.here-is-leo.ir${path}`);
      if (response.status === 404) {
        return new Response('صفحه پیدا نشد', { status: 404 });
      }
      return response;
    } catch {
      return new Response('خطا در سرویس', { status: 500 });
    }
  }
};
