# [StreamCraft](https://streamcraft.com/ "StreamCraft.com website")

StreamCraft script.
* Theatre Mode
* Hide Like Animation
* Auto Like
* Auto Open Chest (WIP)
* Hide Contribution Guard

## TamperMonkey code
```javascript
(function () {
  let interval = setInterval(() => {
    if (!document.querySelector('.chat-dialog')) {
      return;
    }

    const script = document.createElement('script');

    script.src = 'https://ferisef.github.io/streamcraft-helper/91f8931f518515d9abe0.bundle.js';
    script.crossOrigin = 'anonymous';

    document.body.append(script);
    clearInterval(interval);
  }, 300);
})();
```

[Actual Version](https://ferisef.github.io/streamcraft-helper/)