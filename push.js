var push = require('web-push');

let vapidKeys = {
  publicKey: 'BO8s9EfwT4f57rcRJApvh3fNjYdW1qb0hymQbyycR6DQzSZ3UiYqXydMB7OAmmAUq686CgXL3Gob6y4MfG9D-34',
  privateKey: '-F6weiVwoK8ClvdYvnOak8NswW-sTyFd8jGY5EALfkU'
};

push.setVapidDetails('mailto:test@sirwest.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');
