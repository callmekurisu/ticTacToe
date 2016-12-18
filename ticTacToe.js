$(document).ready(function() {
  
  
  $("#xA1").hide();$("#xA2").hide();$("#xA3").hide();
  $("#xB1").hide();$("#xB2").hide();$("#xB3").hide();
  $("#xC1").hide();$("#xC2").hide();$("#xC3").hide();
    
  //x position active ?
  var xA1 = false; var xA2 = false; var xA3 = false;
  var xB1 = false; var xB2 = false; var xB3 = false;
  var xC1 = false; var xC2 = false; var xC3 = false;
  
  $("#oA1").hide();$("#oA2").hide();$("#oA3").hide();
  $("#oB1").hide();$("#oB2").hide();$("#oB3").hide();
  $("#oC1").hide();$("#oC2").hide();$("#oC3").hide();
  
  //o position active ?
  var oA1 = false; var oA2 = false; var oA3 = false;
  var oB1 = false; var oB2 = false; var oB3 = false;
  var oC1 = false; var oC2 = false; var oC3 = false;  
 
  function hideOButtons () {
    $("#oA1b").hide();$("#oA2b").hide();$("#oA3b").hide();
    $("#oB1b").hide();$("#oB2b").hide();$("#oB3b").hide();
    $("#oC1b").hide();$("#oC2b").hide();$("#oC3b").hide();
  }
  
  function showOButtons () {
    $("#oA1b").show();$("#oA2b").show();$("#oA3b").show();
    $("#oB1b").show();$("#oB2b").show();$("#oB3b").show();
    $("#oC1b").show();$("#oC2b").show();$("#oC3b").show();
  }
  
  function hideXButtons () {
    $("#xA1b").hide();$("#xA2b").hide();$("#xA3b").hide();
    $("#xB1b").hide();$("#xB2b").hide();$("#xB3b").hide();
    $("#xC1b").hide();$("#xC2b").hide();$("#xC3b").hide();
  }
  
  function showXButtons () {
    $("#xA1b").show();$("#xA2b").show();$("#xA3b").show();
    $("#xB1b").show();$("#xB2b").show();$("#xB3b").show();
    $("#xC1b").show();$("#xC2b").show();$("#xC3b").show();
  }
  
  $("#lose").hide(); $("#draw").hide();
  
  //counting turns for what?
  //maybe use this later?
  var turns = 0;
  
  //game auto restarts with lose or draw
  function resetAll(){
  $("#xA1").hide();$("#xA2").hide();$("#xA3").hide();
  $("#xB1").hide();$("#xB2").hide();$("#xB3").hide();
  $("#xC1").hide();$("#xC2").hide();$("#xC3").hide();
  
  $("#oA1").hide();$("#oA2").hide();$("#oA3").hide();
  $("#oB1").hide();$("#oB2").hide();$("#oB3").hide();
  $("#oC1").hide();$("#oC2").hide();$("#oC3").hide();
  
  $("#lose").hide(); $("#draw").hide();
  $("#playerO").show(500);$("#playerX").show(500);
    //x positon off
    xA1 = false; xA2 = false; xA3 = false;
    xB1 = false; xB2 = false; xB3 = false;
    xC1 = false; xC2 = false; xC3 = false;
    //o position off
    oA1 = false; oA2 = false; oA3 = false;
    oB1 = false; oB2 = false; oB3 = false;
    oC1 = false; oC2 = false; oC3 = false;
    hideOButtons();hideXButtons();  
  };
  //select player, x or o
    
  
  $("#playerX").on("click", function(){
    $("#playerO").hide(500);
    hideOButtons();
    showXButtons();
     //select positions on the grid
    //computer moves to counter win
    //if position taken go to alt position
    
    
    
    $("#xA1b").on("click", function(){
    $("#xA1").show(100);
    turns++;
      xA1 = true;
      //first move xA1
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //second move xA1 and xA2
       if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
     }
      //xA1 diag block
       if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB1").show(100);
      oB1 = true; 
     }
      //xA1 and xA3 block
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(1000);
      oA2 = true;
     }
      
      //xA1 loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA1 horizontal loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA1 loss to oA3 diag
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA1 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA1 and xB1  
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xA1 and xA3
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
     }
      //xA1 diag block
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA2").show(100);
      oA2 = true; 
     }
      //xA1 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA1 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(1000);
      oC2 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA1 diag loss
        if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
          $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA1 vertical loss middle
        if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
          $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB3 and xA1
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
     }
      //xC3 and xA1
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
      }
      //xC2 and xA1
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
      }
      //xA1 diag block
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xA1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA1 diag loss 
      if(xA1==true&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
       //xA1 draw
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xA1 diag loss
           if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xA1 leading to draw
          if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA1 diag loss
          if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA1 vertical loss middle
          if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA1 diag loss 
          if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA1 diag block
          if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA1 vertical loss middle
          if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
   });
    
    
    
    $("#xA2b").on("click", function(){
    $("#xA2").show(100);
      turns++;
      xA2 = true; 
      //first move xA2
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //second move xA1 and xA2 again
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
     }
      //xA2 and xA3
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //xA2 xA3 block
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xA2 diag loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA2 horizontal loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      
      //xA2 vertical middle block
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
      }
      //xA2 loss to oA3 diag
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 horizontal loss middle
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
 //xA2 diag loss   
      if(xA1==true&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA2 horizontal loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA2 vertical block middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);   
     }
      
      //xA2 diag loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA2 and xC2
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
        
     }
      //xA2 diag loss
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(1000);
      oA1 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,5000);
     }
      //xA2 horizontal loss middle
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA2 vertical block middle
        if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
          $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA2 diag loss
        if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
          $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA2 vertical block middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      }
    //xA2 horizontal loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA2 diag loss
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA2 diag loss
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB2 draw
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA2 diag loss
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA2 vertical loss left
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA2 and xB1 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xA2 diag loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xA2 diag loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 and xA2   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
      }
      //xA2 diag loss
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xA2 diag loss
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC1 and xA2 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA3 = true;
      }
      //xA2 and xC3
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      }
      //xA2 and xB2
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     }
      //xA2 leading to block
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
       $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA2 vertical loss left
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
       $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA2 horizontal block top, draw
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA2 horizontal loss left
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA2 vertical block top
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      }
      //xA2 horizontal block top
       if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
      
     }
      //xA2 and oC2 block
       if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
       }
      //xA2 vertical loss right
       if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xA2 to xC2, draw
       if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
         $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
       }
   });
    
    
    
    $("#xA3b").on("click", function(){
    $("#xA3").show(100);
      turns++;
      xA3 = true;
      //xA3 first move
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //xA3 and xA2 
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xA1 and xA3 block
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
     }
      //xA2 xA3 block
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xA3 block resulting in tie
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#draw").show(100);
        window.setTimeout(resetAll,3000);
     }
      //xA3 loss from trap
    
  if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
    window.setTimeout(resetAll,3000);
     }
      //xA3 loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 horizontal loss middle
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 diag block
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
     }
      //xA3 diag block  
      if(xA1==true&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
     }
      //xA3 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,5000);
      }
       //xA3 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,5000);
      }
      //xA3 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA3 loss trap
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 and xB3
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     }
      //xA3 and xC3
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
     }
      //xA3 diag block with draw
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA3 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB1 and xA3
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
      }
      //xA3 and xC1
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
      }
      //xA3 and xC2
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
      }
      //xA3 diag block 
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xA3 diag block
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xA3 diag loss   
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA3 leading to a draw 
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      }
      //xA3 diag loss
           if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xA3 leads to trap
           if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
           }
      //xA3 leading to draw
           if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xA3 loss
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xA3 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xA3 and xB2
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xA3 horizontal loss left
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA3 vertical block top
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      }
      //xA3 horizontal block top
       if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xA3 to oC1
       if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
       }
      //xA3 vertical block top
       if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xA3 to oC2, draw
       if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
         $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xA3 diag block
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA3 vertical loss middle
          if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA3 vertical loss middle
          if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA3 diag loss
          if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
   });
    
    
    
    $("#xB1b").on("click", function(){
    $("#xB1").show(100);
      turns++;
      xB1=true;
      //xB1 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //xB1 and xB3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
     }
      //xB1 Block resulting in tie, final move for computer
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
       $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      
 //xB1 Loss
      if(xA1==true&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
          if(xA1==true&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC3 = true;
        $("#lose").show(1000);
            window.setTimeout(resetAll,3000);
     }
            if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
       window.setTimeout(resetAll,3000);
     }
      //xB1 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
       //xB1 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      
      //xB1 block middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
        $("#draw").show(1000);
       window.setTimeout(resetAll,3000);
     }
       //xB1 loss to oA3 diag
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
 //xA1 and xB1  
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xB1 and xC1  
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xB1 loss trap
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oC2").show(100);
      oC2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 horizontal block middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
     }
      //xB1 diag loss
        if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
          $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 vertical loss middle
        if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
          $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss
      if(xA1==true&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB1 and xA3
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
      }
      //xB1 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 vertical block left
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
        $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xA2 and xB1 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xB1 and xC2
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xB1 diag loss   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss
           if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB1 diag loss
           if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB1 draw 
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss
           if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB1 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB1 leading to draw
          if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss
          if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 horizontal loss bottom
           if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==true&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xB1 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
           }
       //xB1 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xB1 vertical block left
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
      }
      //xB1 leading to draw
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 vertical
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
       //xB1 vertical block left 
       if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB1 vertical loss top 
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
       //xB1 horizontal loss top
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB1 and xB2
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
     }
      //B1 and C3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      }
      //xB1 vertical loss middle
          if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB1 diag loss
          if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
   });
    
    
    
    $("#xB2b").on("click", function(){
    $("#xB2").show(100);
      turns++;
      xB2 = true;
      //xB2 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      
     
   });
    
    
    
    $("#xB3b").on("click", function(){
    $("#xB3").show(100);
      turns++;
      xB3=true;
      //xB3 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //xB1 and xB3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
     }
    //xB3 Loss  
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      
      //tie final move for computer
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB3 vertical block resulting in draw
       if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB1").show(100);
      oB1 = true;
       $("#draw").show(1000);
         window.setTimeout(resetAll,3000);
     }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB3 final move and draw
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA2").show(100);
      oA2 = true;
      $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      
      //xB3 horizontal middle block
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB3 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB3 loss to oA3 diag
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
 //xB3 diag loss   
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB3 verticl block middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
     }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB3 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB3 loss trap
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA3 and xB3
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     }
      //xB3 and xC3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
     }
      //xB3 and xA1
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
     }
      //xB3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB3 diag loss
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB3 horizontal block middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB3 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 vertical loss left
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 diag loss 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 diag loss
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
 //xB3 and xA2   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
      }
      //xB3 and xC2   
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      }
      //xB3 diag loss
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 leading to draw
          if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 diag loss
          if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 horizontal loss bottom
           if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==true&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xB3 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
           }
      //xB3 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xB3 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xB3 vertical loss left
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
       $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 and xB2
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      }
      //xB3 leading to draw
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 vertical
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 vertical loss top 
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 vertical loss left 
       if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 horizontal loss top
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB3 vertical loss middle
          if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 diag loss 
          if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 and xC1 
          if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      }
   });
    
    
    
    $("#xC1b").on("click", function(){
    $("#xC1").show(100);
      xC1=true;
      turns++;
      //xC1 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //xC1 second move
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     }
      //xC1 Block
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
     }
      //xC1 and xC3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     }
      //xC1 Loss
     if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
        $("#lose").show(1000);
       window.setTimeout(resetAll,3000);
     }
            if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
              window.setTimeout(resetAll,3000);
     }
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC1 Loss from trap
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xA1 and xA3
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
     }
      //xB1 and xC1  
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xC1 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oC2").show(100);
      oC2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC1 horizontal loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC1 horizontal loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      } 
      //xC1 diag block
        if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     }
      //xC1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC1 diag block
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
        $("#xB3").show(100);
      xB3 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC1 diag block
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==true&&oB3==false&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC1 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB3 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xB1
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
      }
    //xA3 and xC1
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
      }
      //xC1 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC1 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC1 diag block   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
        $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC1 diag loss   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,000);
      }
      //xC1 diag block 
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      }
      //xC1 and xA2 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
      }
      //xC1 diag block
          if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      }
      //xC1 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xC1 diag draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xC1 diag block oA3
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
           }
      //xC1 leads to draw
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xC1 vertical block left
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      }
      //xC1 leading to draw
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC1 vertical
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC1 vertical loss top 
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB2 and xC1
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      
     }
      //xC1 to oA3
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
       }
      //xC1 vertical loss top
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xC1 vertical loss middle
          if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 and xC1 
          if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      }
   });
    
    
    
    $("#xC2b").on("click", function(){
    $("#xC2").show(100);
      turns++;
      xC2=true;
      //xC2 first move
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //xC2 second move
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     }
      //xC2 Block with xB1 and xB2
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xC2 Loss
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 Block
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
     }
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
     }
      //xC3 and xC2
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xC2 block vertical middle for draw
      if(xA1==true&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 verticl block middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC2 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
     //xA2 and xC2
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xC2 vertical block middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oB1").show(100);
      oB1 = true; 
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#oA1").show(100);
      oA1 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 vertical block middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 horizontal loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC2 diag loss
        if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
          $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 vertical block middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
     //xC2 and xA1
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
      }
      //xC2 leading to draw
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC2 diag loss
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC2 vertical block middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
     }
      //xA3 and xC2
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true;
      }
      //xC2 diag loss 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC2 diag loss
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xB1 and xC2
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA1").show(100);
      oA1 = true; 
     }
      //xC2 diag loss   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB3 and xC2   
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      }
     //xC2 diag loss
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC2 diag loss
          if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 diag loss
          if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 leading to block
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
       $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 vertical loss left
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
       $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 horizontal loss top
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 horizontal loss left
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 vertical loss top
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 and xB2
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
     }
      //xC2 horizontal loss top
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC2 vertical loss right
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xC2 to oA2
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
       }
      //xC2 to oA2, draw
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
         $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xC2 vertical block middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      }
      //xC2 vertical block middle
          if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC3").show(100);
      oC3 = true;
      }
    });
    
    
    
    $("#xC3b").on("click", function(){
    $("#xC3").show(100);
      xC3=true;
      turns++;
      //xC3 first move
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB2").show(100);
      oB2 = true; 
     }
      //xC3 block
      if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
     }
      //xC1 and xC3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     }
     //xC3 Loss
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC3 loss from trap
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC2 and xC3 
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xC3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xB3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC3 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC3 diag block
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
     }
      //xC3 diag block leading to trap
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xA3 and xC3
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true;
     }
      //xB3 and xC3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
     }
      //xC3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //xC3 and xA1
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true; 
      }
      //xC3 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xA2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //xC3
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
      }
      //xC3 vertical loss middle
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC3 diag block
      //xA3 and xC2
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      }
      //xC3 diag block 
      if(xA1==false&&xA2==true&&xA3==true&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB3").show(100);
      oB3 = true; 
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC3 diag loss 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC3 diag block
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true; 
     }
      //xC3 diag block   
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      }
       //xC3 diag loss
           if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==false&&xC2==true&&xC3==true&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
     //xC3 diag block 
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      }
      //xA2 and xC3
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      }
      //xC3 vertical loss left
           if(xA1==false&&xA2==true&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xC3 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xC3 loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xC3 leading to draw
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
           }
      //xC3 
           if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
           }
      //xC3 leading to block
      if(xA1==false&&xA2==false&&xA3==true&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
       $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 vertical loss left
      if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true;
       $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC3 horizontal loss top
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xC2 horizontal loss left
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
      //xB2 and xC3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      }
      //xC3 vertical loss top 
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC3 vertical loss left 
       if(xA1==false&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#oB1").show(100);
      oB1 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC3 horizontal loss top
       if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //xC3 horizontal loss top
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xC3 vertical loss top
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==true&&oA1==true&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oA3").show(100);
      oA3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
       }
      //xC3 to oC1
       if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#oC1").show(100);
      oC1 = true;
       }
      //B1 and C3
      if(xA1==false&&xA2==false&&xA3==false&&xB1==true&&xB2==false&&xB3==false&&xC1==false&&xC2==false&&xC3==true&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oA2").show(100);
      oA2 = true;
      }
      //xC3 vertical loss middle
          if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==false&&xB3==true&&xC1==true&&xC2==false&&xC3==true&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==true&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#oC2").show(100);
      oC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
      }
   });
    
  });
  
  
  //X always goes first and plays middle
  $("#playerO").on("click", function(){
    $("#playerX").hide(500);
    hideXButtons();
    showOButtons();
    $("#xB2").show(100);
    xB2 = true;
    
    $("#oA1b").on("click", function(){
      $("#oA1").show();
      oA1 = true;
      
      turns++;
      //oA1 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xA2").show(100);
      xA2 = true; 
     }
      //oA1 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA1 horizontal loss middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
   });
    
    
    
    $("#oA2b").on("click", function(){
    $("#oA2").show();
      oA2 = true;
      turns++;
      //oA2 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xA1").show(100);
      xA1 = true; 
     }
      //oA2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oA2 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oA2 diag loss
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==true){
      $("#xC1").show(100);
      xC1 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oA2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oA2 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA2 horizontal loss middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA2 vertical loss left
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA2 vertical block middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
     }
      //oA2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
   });
    
    
    
    $("#oA3b").on("click", function(){
    $("#oA3").show();
      oA3 = true;
      turns++;
      //oA3 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xA1").show(100);
      xA1 = true; 
     }
      //oA3 diag block
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xB1").show(100);
      xB1 = true; 
     }
      //oA3 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC2").show(100);
      xC2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oA3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oA3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oA3 diag block
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xB3").show(100);
      xB3 = true;
     }
      //oA3 vertical loss left
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xA2").show(100);
      xA2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA3 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xB3").show(100);
      xB3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA3 vertical loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xC2").show(100);
      xC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oA3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
   });
    
    
    
    $("#oB1b").on("click", function(){
    $("#oB1").show();
      oB1 = true;
      turns++;
      //oB1 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xA1").show(100);
      xA1 = true; 
     }
      //oB1 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC2").show(100);
      xC2 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xA3").show(100);
      xA3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 draw
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xB3").show(100);
      xB3 = true;
      $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xC1").show(100);
      xC1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 horizontal block middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xA2").show(100);
      xA2 = true; 
     }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==true){
      $("#xC1").show(100);
      xC1 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 horizontal block middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xA2").show(100);
      xA2 = true;
           }
      //oB1 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss 
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB1 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xA2").show(100);
      xA2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
   });
    
    
    
    $("#oB2b").on("click", function(){
    $("#oB2").show();
      oB2 = true;
      turns++;
   });
    
    
    
    $("#oB3b").on("click", function(){
    $("#oB3").show();
      oB3 = true;
      turns++;
      //oB3 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xA1").show(100);
      xA1 = true; 
     }
      //oB3 horizontal block middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB3 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xC2").show(100);
      xC2 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB3 diag loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#xA3").show(100);
      xA3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB3 draw
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==true){
      $("#xB1").show(100);
      xB1 = true;
      $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB3 diag loss
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==true){
      $("#xC1").show(100);
      xC1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oB3 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB3 vertical loss left
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB3 horizontal block middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
      $("#draw").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB3 vertical loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==true&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==true){
      $("#xA2").show(100);
      xA2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB3 vertical loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==true){
      $("#xC2").show(100);
      xC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oB3 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
   });
   
    
    
    $("#oC1b").on("click", function(){
    $("#oC1").show();
      oC1 = true;
      turns++;
      //oC1 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xA1").show(100);
      xA1 = true; 
     }
      //oC1 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xC2").show(100);
      xC2 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC1 diag block
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xC2").show(100);
      xC2 = true; 
     }
      //oC1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oC1 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oC1 vertical loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xC2").show(100);
      xC2 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oC1 horizontal loss top
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==true){
      $("#xA2").show(100);
      xA2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oC1 vertical loss middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xC2").show(100);
      xC2 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oC1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
   });
    
    
    
    $("#oC2b").on("click", function(){
    $("#oC2").show();
      oC2 = true;
      turns++;
      //oC2 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xA1").show(100);
      xA1 = true; 
     }
      //oC2 vertical block middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xC1").show(100);
      xC1 = true; 
     }
      //oC2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC2 diag loss
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xC1").show(100);
      xC1 = true;
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC2 vertical block middle
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xC1").show(100);
      xC1 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oC2 horizontal loss middle
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
      }
      //oC2 horizontal loss top
      if(xA1==true&&xA2==false&&xA3==true&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==true){
      $("#xA2").show(100);
      xA2 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oB1 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
        $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC2 horizontal block middle, draw
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xA1").show(100);
      xA1 = true;
        $("#draw").show(1000);
        window.setTimeout(resetAll,3000);
           }
      //oC2 diag loss
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oC2 horizontal loss middle
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==true&&xC1==true&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xB1").show(100);
      xB1 = true; 
        $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oC2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oC2 horizontal loss top
      if(xA1==true&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xA3").show(100);
      xA3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oC2 diag loss
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==false){
      $("#xC3").show(100);
      xC3 = true;
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
   });
    
    
    
    $("#oC3b").on("click", function(){
    $("#oC3").show();
      oC3 = true;
      turns++;
      //oC3 first move
      if(xA1==false&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xC1").show(100);
      xC1 = true; 
     }
      //oC3 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xC2").show(100);
      xC2 = true; 
      $("#lose").show(1000);
      window.setTimeout(resetAll,3000);
     }
      //oC3 diag loss
      if(xA1==false&&xA2==true&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC3 vertical loss middle
      if(xA1==false&&xA2==true&&xA3==false&&xB1==true&&xB2==true&&xB3==false&&xC1==true&&xC2==false&&xC3==false&&oA1==true&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xB3").show(100);
      xB3 = true; 
      $("#lose").show(1000);
        window.setTimeout(resetAll,3000);
     }
      //oC3 diag block
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==true&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
     }
      //oC3 diag block
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==true&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xB3").show(100);
      xB3 = true; 
     }
      //oC3 diag block
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==true&&oC1==false&&oC2==false&&oC3==true){
      $("#xA3").show(100);
      xA3 = true; 
     }
      //oC3 diag block
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==false&&oC2==true&&oC3==true){
      $("#xC1").show(100);
      xC1 = true; 
     }
      //oC3 diag block
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==false&&oB2==false&&oB3==false&&oC1==true&&oC2==false&&oC3==true){
      $("#xC2").show(100);
      xC2 = true; 
     }
      //oC3 diag block
      if(xA1==true&&xA2==false&&xA3==false&&xB1==false&&xB2==true&&xB3==false&&xC1==false&&xC2==false&&xC3==false&&oA1==false&&oA2==false&&oA3==false&&oB1==true&&oB2==false&&oB3==false&&oC1==false&&oC2==false&&oC3==true){
      $("#xA2").show(100);
      xA2 = true; 
     }
   });
  });
  
  
  
  /*for debugging only
  $("#reset").on("click",function(){
    $("#playerO").show(500);
    $("#playerX").show(500);
    
    $("#xA1").hide();$("#xA2").hide();$("#xA3").hide();
    $("#xB1").hide();$("#xB2").hide();$("#xB3").hide();
    $("#xC1").hide();$("#xC2").hide();$("#xC3").hide();
  
    $("#oA1").hide();$("#oA2").hide();$("#oA3").hide();
    $("#oB1").hide();$("#oB2").hide();$("#oB3").hide();
    $("#oC1").hide();$("#oC2").hide();$("#oC3").hide();
    
    $("#lose").hide();$("#draw").hide();
    //x posit off  
    xA1 = false; xA2 = false; xA3 = false;
    xB1 = false; xB2 = false; xB3 = false;
    xC1 = false; xC2 = false; xC3 = false;
    //o position off
    oA1 = false; oA2 = false; oA3 = false;
    oB1 = false; oB2 = false; oB3 = false;
    oC1 = false; oC2 = false; oC3 = false;
    //window.location.reload(location);
  });
  */
           
     
});
