var covers = document.getElementsByClassName("cover");
var teller = 0;
while (teller < covers.length) {
       covers[teller].onmouseover = function() {
            var source = this.getAttribute("src");
            this.setAttribute("src", this.getAttribute("data-rug"));
            this.setAttribute("data-rug", source);
       };
       covers[teller].onmouseout = function() {
         var source = this.getAttribute("src");
         this.setAttribute("src", this.getAttribute("data-rug"));
         this.setAttribute("data-rug", source);
       };
       teller++;
};
