// buat id navbar di html
// tambahkan "transition: top 0.8s;" style navbar
// Copyright (c) 2020 Rizky Darmawan(jabutech.com) and Easy Tutorials channel youtube https://www.youtube.com/watch?v=07kbIA4DWtE

var prevScrollpos = window.pageYOffset;
            window.onscroll = function(){

                var currrentScrollpos = window.pageYOffset;

                if(prevScrollpos > currrentScrollpos){
                    document.getElementById("navbar").style.top = "0";
                }else{
                    document.getElementById("navbar").style.top = "-100px";
                }

                prevScrollpos = currrentScrollpos;
            }