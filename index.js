const ab = document.querySelector('#about');
const abc = document.querySelector('#about-content');
const conta= document.querySelector('#contact');
const contac = document.querySelector('#contact-content');
var scr = screen.width;
ab.addEventListener("click",()=>{
    const abox= new WinBox({
        title: "About Me",
        background: "#00aa00",
        height:'250',
        width:'250',
        top:10,
        left:10,
        right:10,
        bottom:10,
        mount:abc, 
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})

conta.addEventListener("click",()=>{
    const bbox= new WinBox({
        title: "Contact Me",
        background: "#00aa00",
        height:'250',
        width:'250',
        top:10,
        left:10,
        right:10,
        bottom:10,
        mount:contac, 
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})
