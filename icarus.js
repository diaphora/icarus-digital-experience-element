//Header element defers JavaScript loading until after HTML: <script><script src="icarus.js" script type="text/javascript" defer>
//Or, alternatively, loading simultaneously: <script><script src="icarus.js" script type="text/javascript" async>

    //The purpose of this JavaScript code is to produce interactive text balloons that do not deter from the site's function or its ability to serve the needs of the user.

function mouseoverNo() {
        var popup = document.getElementById("BinaryPopup1");
        popup.classList.toggle("show") popup.text:"You know who else read books? John Brown. Just sayin'."};
}

//Model for MouseoverNo object HTML: <element onmouseover="mouseoverNo()"><div class="popup" onclick="mouseoverNo()"><span>

object.onmouseover = function mouseoverNo() {
        var popup = document.getElementById("BinaryPopup1");
        popup.classList.toggle("show") popup.text:"You know who else read books? John Brown. Just sayin'."};
}

    function mouseoverNo() {
      var popup = document.getElementById("BinaryPopup1");
        popup.classList.toggle("show") popup.text:"You know who else read books? John Brown. Just sayin'."};
}

//You know who else read books? Gandhi. Just sayin'.

function mouseoverYes() {
  var popup = document.getElementById("BinaryPopup2");
  popup.classList.toggle("show"); popup.text:"Well, thanks for being you!"};
}

object.onmouseover = function mouseoverYes() {
        var popup = document.getElementById("BinaryPopup2");
        popup.classList.toggle("show"); popup.text:"Well, thanks for being you!"};

//Model for MouseoverYes object HTML: <element onmouseover="mouseoverYes()"><div class="popup" onclick="mouseoverYes()"><span>

    function mouseoverYes() {
      var popup = document.getElementById("BinaryPopup2");
        popup.classList.toggle("show") popup.text:"Well, thanks for being you!"};
}

//Well, thanks for being you!

//

//Client Content for Opentips:
//A book isn't the WORST thing you could buy online.
//What are you supposed to be doing with two dollars anyway?
//You shouldn't expect applause just yet.

function Opentip(){style: "light", target: true, showOn:"mouseover", borderWidth: 0, stemLength: 18, stemBase: 20, borderRadius:18, delay:0.4}

///Model for Opentip in HTML:<div id="dark1" class="test" >Dark styles without title, hover to show</div><script type="text/javascript">function Opentip("#dark1", "You shouldn't expect applause just yet.", {style: "dark", target: true, });</script>
