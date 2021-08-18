const $e402f9079cddd898$var$string = `.skin * {box-sizing: border-box;margin: 0;padding: 0;}\n    .skin *::before,.skin *::after {box-sizing: border-box;}\n    .skin {\n        background: #ffe600;\n        min-height: 50vh;\n        position: relative\n    }\n    .nose {\n        border: 10px solid #000;\n        border-color: #000 transparent transparent;\n        border-bottom: none;\n        width: 0px;\n        height: 0px;\n        position: absolute;\n        left: 50%;\n        top: 145px;\n        margin-left: -10px;\n        z-index: 10;\n    }\n    @keyframes wave {\n        0% {\n            transform: rotate(0deg);\n        }\n        33% {\n            transform: rotate(5deg);\n        }\n        66% {\n            transform: rotate(-5deg);\n        }\n        100% {\n            transform: rotate(0deg);\n        }\n    }\n    .nose:hover {\n        transform-origin: center bottom ;\n        animation: wave 300ms infinite linear\n    }\n    .arc {\n        position: absolute;\n        width: 20px;\n        height: 6px;\n        top:-16px;\n        left:-10px;\n        border-radius: 10px 10px 0 0;\n        background: #000;\n    }\n    .eye {\n        border: 2px solid #000;\n        position: absolute;\n        width: 64px;\n        height: 64px;\n        left: 50%;\n        top: 100px;\n        margin-left: -32px;\n        background: #2e2e2e;\n        border-radius: 50%;\n    }\n    .eye::before {\n        content: "";\n        display: block;\n        border: 2px solid #000;\n        width: 25px;\n        height: 25px;\n        background: #fff;\n        border-radius: 50px;\n        position: relative;\n        left: 8px;\n        top: 2px;\n    }\n    .eye.left {\n        transform: translateX(-100px)\n    }\n    .eye.right {\n        transform: translateX(100px)\n    }\n    .mouth {\n        width: 200px;\n        height: 200px;\n        position: absolute;\n        top: 180px;\n        left: 50%;\n        margin-left: -100px;\n    }\n    .mouth .up {\n        position: relative;\n        top: -20px;\n        z-index: 1;\n    }\n    .mouth .up .lip {\n        border: 3px solid black;\n        height: 30px;\n        width: 100px;\n        background: #ffe600;\n        border-top-color: transparent;\n        border-right-color: transparent;\n        position: relative;\n        position: absolute;\n        left: 50%;\n        margin-left: -50px;\n    }\n    .mouth .up .lip.left{\n        border-radius: 0 0 0 50px;\n        transform: rotate(-15deg) translateX(-53px);\n    }\n    .mouth .up .lip.right{\n        border-radius: 0 0 50px 0;\n        transform: rotate(15deg) translateX(54px);\n    }\n    .mouth .up .lip::before {\n        content:'';\n        display: block;\n        width: 100px;\n        height: 30px;\n        position: absolute;\n        bottom: 0;\n        background: #ffe600;\n    }\n    .mouth .up .lip.left::before{\n        border-radius: 0 0 0 50px;\n        right: -6px;\n    }\n    .mouth .up .lip.right::before{\n        border-radius: 0 0 50px 0;\n        left: -6px;\n    }\n    .mouth .down {\n        height: 150px;\n        position: absolute;\n        top: 0;\n        width: 100%;\n        overflow: hidden;\n    }\n    .mouth .down .yuan1 {\n        border: 3px solid black;\n        width: 150px;\n        height: 1000px;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        margin-left: -75px;\n        border-radius: 75px/300px;\n        background: #9b000a;\n        overflow: hidden;\n    }\n    .mouth .down .yuan1 .yuan2 {\n        width: 200px;\n        height: 240px;\n        background: #ff485f;\n        position: absolute;\n        bottom: -130px;\n        left: 50%;\n        margin-left: -100px;\n        border-radius: 100px;\n    }\n    .face {\n        position: absolute;\n        left: 50%;\n        border: 3px solid black;\n        width: 80px;\n        height: 80px;\n        top: 200px;\n        margin-left: -40px;\n        z-index: 3;\n    }\n    .face > img {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        display: none;\n    } \n    .face:hover > img {\n        display: block;\n    }\n    .face.left {\n        transform: translateX(180px);\n        background: #ff0000;\n        border-radius: 50%;\n    }\n    .face.left > img {\n        transform: rotateY(180deg);\n        transform-origin: 0 0;\n    }\n    .face.right {\n        transform: translateX(-180px);\n        background: #ff0000;\n        border-radius: 50px;\n    }\n `;
var $e402f9079cddd898$export$9099ad97b570f7c = $e402f9079cddd898$var$string;


const $a8d8f3267b56674a$var$player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,
    init: ()=>{
        $a8d8f3267b56674a$var$player.ui.demo.innerText = $e402f9079cddd898$export$9099ad97b570f7c.substr(0, $a8d8f3267b56674a$var$player.n);
        $a8d8f3267b56674a$var$player.ui.demo2.innerHTML = $e402f9079cddd898$export$9099ad97b570f7c.substr(0, $a8d8f3267b56674a$var$player.n);
        $a8d8f3267b56674a$var$player.bindEvents();
        $a8d8f3267b56674a$var$player.play();
    },
    bindEvents: ()=>{
        for(let key in $a8d8f3267b56674a$var$player.events)if ($a8d8f3267b56674a$var$player.events.hasOwnProperty(key)) {
            const value = $a8d8f3267b56674a$var$player.events[key];
            document.querySelector(key).onclick = $a8d8f3267b56674a$var$player[value];
        }
    },
    run: ()=>{
        $a8d8f3267b56674a$var$player.n += 1;
        if ($a8d8f3267b56674a$var$player.n > $e402f9079cddd898$export$9099ad97b570f7c.length) {
            window.clearInterval($a8d8f3267b56674a$var$player.id);
            return;
        }
        console.log($a8d8f3267b56674a$var$player.n + ":" + $e402f9079cddd898$export$9099ad97b570f7c.substr(0, $a8d8f3267b56674a$var$player.n));
        $a8d8f3267b56674a$var$player.ui.demo.innerText = $e402f9079cddd898$export$9099ad97b570f7c.substr(0, $a8d8f3267b56674a$var$player.n);
        $a8d8f3267b56674a$var$player.ui.demo2.innerHTML = $e402f9079cddd898$export$9099ad97b570f7c.substr(0, $a8d8f3267b56674a$var$player.n);
        $a8d8f3267b56674a$var$player.ui.demo.scrollTop = $a8d8f3267b56674a$var$player.ui.demo.scrollHeight;
    },
    play: ()=>{
        $a8d8f3267b56674a$var$player.id = setInterval($a8d8f3267b56674a$var$player.run, $a8d8f3267b56674a$var$player.time);
    },
    pause: ()=>{
        window.clearInterval($a8d8f3267b56674a$var$player.id);
    },
    slow: ()=>{
        $a8d8f3267b56674a$var$player.pause();
        $a8d8f3267b56674a$var$player.time = 300;
        $a8d8f3267b56674a$var$player.play();
    },
    normal: ()=>{
        $a8d8f3267b56674a$var$player.pause();
        $a8d8f3267b56674a$var$player.time = 100;
        $a8d8f3267b56674a$var$player.play();
    },
    fast: ()=>{
        $a8d8f3267b56674a$var$player.pause();
        $a8d8f3267b56674a$var$player.time = 0;
        $a8d8f3267b56674a$var$player.play();
    }
};
$a8d8f3267b56674a$var$player.init();


//# sourceMappingURL=text.2c8a4f58.js.map
