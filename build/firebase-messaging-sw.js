importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js"
);
let config = {
  messagingSenderId: "691026318174"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const title = payload.notification.title;
  console.log("payload", payload);
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    actions: [
      { action: "like", title: "Like" },
      { action: "reply", title: "Reply" }
    ]
  };

  return self.registration.showNotification(title, options);
});
