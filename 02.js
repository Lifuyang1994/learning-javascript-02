function isLeapYear(){
    var pYear=window.myForm.theYear.value;
    if(!isNaN(parseInt(pYear))){
     if((pYear%4==0 && pYear%100!=0)||(pYear%100==0 && pYear%400==0)){
      window.alert(pYear+"閏年です！");
     }else{
        window.alert(pYear+"閏年ではありません！");
     }
    }else{
     window.alert("正しい年数をいれてください！");
    }
      }