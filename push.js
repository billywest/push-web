var push = require('web-push');

let vapidKeys = {
  publicKey: 'BO8s9EfwT4f57rcRJApvh3fNjYdW1qb0hymQbyycR6DQzSZ3UiYqXydMB7OAmmAUq686CgXL3Gob6y4MfG9D-34',
  privateKey: '-F6weiVwoK8ClvdYvnOak8NswW-sTyFd8jGY5EALfkU'
};

push.setVapidDetails('mailto:test@sirwest.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/c3NNoxcqPi8:APA91bHJf6aGplm881BhKzBrT-iyGrXTNqVXjelpJdj36GZr2h44SKa73VFqAp5gGN4s-AN072ynVx4b3d_kSViCximTwvP7-0D5zna21-fjDefBrSG0KzSkrCJT0seaXiY7FGfmBAA9',
  expirationTime: null,
  keys: {
    p256dh: 'BOrY4usbQJCOOpOKePTY-J4aQRLcfgYX8Tynngqithe9pnjlHFMLh_OL3Ma-HsWFDsOeoR2oebxjesSEN72uiMU',
    auth: 'o7MSC16alC1cvO5BaLNpcg'
  }
};

push.sendNotification(sub, 'test message');
