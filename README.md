# [StreamCraft](https://streamcraft.com/ "StreamCraft.com website")

StreamCraft script.
* Theatre Mode
* Hide Likes Animation
* Auto Likes
* Auto Open Chest (WIP)
* Hide Ranking and VIP

## TamperMonkey code
```javascript
(function () {
  let interval = setInterval(() => {
    if (!document.querySelector('.chat-dialog')) {
      return;
    }

    const script = document.createElement('script');

    script.src = 'https://ferisef.github.io/streamcraft-helper/f48d2ff5a48e2b795fe7.bundle.js';
    script.crossOrigin = 'anonymous';

    document.body.append(script);
    clearInterval(interval);
  }, 300);
})();
```

[Actual Version](https://ferisef.github.io/streamcraft-helper/)