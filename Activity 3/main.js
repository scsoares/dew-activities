//write your JS code here:

// var myWindow = window.open("", "", "width=200,height=100");


// var msgWindow = window.open("", "MsgWindow", "width=300,height=100");
// msgWindow.document.write("<p>some text.</p>");

// var msgWindow2 = window.open('https://google.com', 'msgWindow', 'width=500,height=500');


// myMsgWindow.window.open("", "_self");
// myMsgWindow.document.write("<p>Adieu!</p>");

// msgWindow2.window.location.href = 'https://linkedin.com';


// window.open("https://google.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=200,height=400");

// window.location.replace('https://google.com');

// let test = window.open("", "", "width=200,height=100");
// setTimeout(() => {
//     test.opener.document.write('something');
// }, 5000);


let iframe = document.createElement('iframe');
iframe.src = 'iframe.html';
document.body.appendChild(iframe);
iframe.onload = function () {
    let iframeDoc = iframe.contentDocument || iframe.contentDocument.Window.document;
    iframeDoc.write('some text');
};