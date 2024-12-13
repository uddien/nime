function fitElementToParent(el, padding, exception) {
    var timeout = null;
    function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        if (exception) anime.set(exception, { scale: 1 });
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        var invertedRatio = elOffsetWidth / parentOffsetWidth;
        timeout = setTimeout(function () {
            anime.set(el, { scale: ratio });
            if (exception) anime.set(exception, { scale: invertedRatio });
        }, 10);
    }
    resize();
    window.addEventListener('resize', resize);
}