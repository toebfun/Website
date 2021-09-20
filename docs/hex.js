                function copyDivToClipboard() {
                    var range = document.createRange();
                    range.selectNode(document.getElementById("color"));
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
                }

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("dblclick", setBg);
setBg();

var btn = document.getElementById('genNew');
var elem = document.getElementById('elem');

genNew.addEventListener('click', function() {
  elem.classList.remove('show');
  // this force-restarts the CSS animation
  void elem.offsetWidth;
  elem.classList.add('show');
});
