function cloak() {
    const newWindow = window.open('about:blank');
    const iframe = newWindow.document.createElement('iframe');
    newWindow.document.body.style.margin = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.zIndex = '99999';
    iframe.style.border = 'none';

    newWindow.document.body.style.overflow = 'hidden';
    newWindow.document.body.appendChild(iframe);
    iframe.src = window.location.href;
    window.location.replace('https://classroom.google.com/')
}