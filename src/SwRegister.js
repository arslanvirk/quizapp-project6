export default function SwRegister() {
    // Register a service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            let swPath = `${process.env.PUBLIC_URL}/sw.js`  //Get Server Worker File from Public
            navigator.serviceWorker.register(swPath).then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
}




  