
var Students, LondonFd, budget,cambridgeFD,pages;

// Describe this function...
function calculation() {
 budget = 0;
 if (Students >= 3 && Students <= 6 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 390;
 } else if (Students >= 7 && Students <= 13 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 560;
 } else if (Students >= 14 && Students <= 29 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 840;
 } else if (Students >= 30 && Students <= 46 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 995;
 } else if (Students >= 47 && Students <= 54 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1385;
 } else if (Students >= 55 && Students <= 61 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1555;
 } else if (Students >= 62 && Students <= 77 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1835;
 } else if (Students >= 78 && Students <= 96 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1990;
 } else if (Students >= 3 && Students <= 6 && LondonFd == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 390;
 }
  if (Students >= 3 && Students <= 6 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 350;
 } else if (Students >= 7 && Students <= 13 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 560;
 } else if (Students >= 14 && Students <= 29 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 705;
 } else if (Students >= 30 && Students <= 46 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 845;
 } else if (Students >= 47 && Students <= 54 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1195;
 } else if (Students >= 55 && Students <= 61 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1405;
 } else if (Students >= 62 && Students <= 77 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1550;
 } else if (Students >= 78 && Students <= 96 && cambridgeFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1690;
 }
 if (Students >= 3 && Students <= 6 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 290;
 } else if (Students >= 7 && Students <= 13 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 500;
 } else if (Students >= 14 && Students <= 29 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 510;
 } else if (Students >= 30 && Students <= 46 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 585;
 } else if (Students >= 47 && Students <= 54 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 875;
 } else if (Students >= 55 && Students <= 61 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1085;
 } else if (Students >= 62 && Students <= 77 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1095;
 } else if (Students >= 78 && Students <= 96 && cambridgeHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1170;
 }
 if (Students >= 3 && Students <= 6 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 445;
 } else if (Students >= 7 && Students <= 13 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 660;
 } else if (Students >= 14 && Students <= 29 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 890;
 } else if (Students >= 30 && Students <= 46 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1045;
 } else if (Students >= 47 && Students <= 54 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1490;
 } else if (Students >= 55 && Students <= 61 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1705;
 } else if (Students >= 62 && Students <= 77 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1935;
 } else if (Students >= 78 && Students <= 96 && OxfordFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 2090;
 }
  if (Students >= 3 && Students <= 6 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 390;
 } else if (Students >= 7 && Students <= 13 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 560;
 } else if (Students >= 14 && Students <= 29 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 705;
 } else if (Students >= 30 && Students <= 46 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 845;
 } else if (Students >= 47 && Students <= 54 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1235;
 } else if (Students >= 55 && Students <= 61 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1405;
 } else if (Students >= 62 && Students <= 77 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1550;
 } else if (Students >= 78 && Students <= 96 && NorwichFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1690;
 }
 if (Students >= 3 && Students <= 6 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 300;
 } else if (Students >= 7 && Students <= 13 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 335;
 } else if (Students >= 14 && Students <= 29 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 690;
 } else if (Students >= 30 && Students <= 46 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 725;
 } else if (Students >= 47 && Students <= 54 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1025;
 } else if (Students >= 55 && Students <= 61 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1060;
 } else if (Students >= 62 && Students <= 77 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1415;
 } else if (Students >= 78 && Students <= 96 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1450;
 }
  if (Students >= 3 && Students <= 6 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 385;
 } else if (Students >= 7 && Students <= 13 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 685;
 } else if (Students >= 14 && Students <= 29 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 840;
 } else if (Students >= 30 && Students <= 46 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 985;
 } else if (Students >= 47 && Students <= 54 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1370;
 } else if (Students >= 55 && Students <= 61 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1670;
 } else if (Students >= 62 && Students <= 77 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1825;
 } else if (Students >= 78 && Students <= 96 && BrightonFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1970;
 }
if (Students >= 3 && Students <= 6 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 300;
 } else if (Students >= 7 && Students <= 13 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 335;
 } else if (Students >= 14 && Students <= 29 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 690;
 } else if (Students >= 30 && Students <= 46 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 725;
 } else if (Students >= 47 && Students <= 54 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1025;
 } else if (Students >= 55 && Students <= 61 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1060;
 } else if (Students >= 62 && Students <= 77 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1415;
 } else if (Students >= 78 && Students <= 96 && SouthendFD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1450;
 }
  if (Students >= 3 && Students <= 6 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 220;
 } else if (Students >= 7 && Students <= 13 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 320;
 } else if (Students >= 14 && Students <= 29 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 410;
 } else if (Students >= 30 && Students <= 46 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 485;
 } else if (Students >= 47 && Students <= 54 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 705;
 } else if (Students >= 55 && Students <= 61 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 805;
 } else if (Students >= 62 && Students <= 77 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 895;
 } else if (Students >= 78 && Students <= 96 && IpswichHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 970;
 }

 
 if (Students >= 3 && Students <= 6 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 290;
 } else if (Students >= 7 && Students <= 13 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 290;
 } else if (Students >= 14 && Students <= 29 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 590;
 } else if (Students >= 30 && Students <= 46 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 685;
 } else if (Students >= 47 && Students <= 54 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 975;
 } else if (Students >= 55 && Students <= 61 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 975;
 } else if (Students >= 62 && Students <= 77 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1275;
 } else if (Students >= 78 && Students <= 96 && EdmundsHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 1370;
 }

if (Students >= 3 && Students <= 6 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 365;
 } else if (Students >= 7 && Students <= 13 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 365;
 } else if (Students >= 14 && Students <= 29 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 410;
 } else if (Students >= 30 && Students <= 46 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 455;
 } else if (Students >= 47 && Students <= 54 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 820;
 } else if (Students >= 55 && Students <= 61 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 820;
 } else if (Students >= 62 && Students <= 77 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 865;
 } else if (Students >= 78 && Students <= 96 && ClactonHD == true) {
   budget = (typeof budget == 'number' ? budget : 0) + 910;
 }
 
 if (Students >= 1 && Students <= 6 && pages == 1) {
budget = (typeof budget == 'number' ? budget : 0) + 270;
} else if (Students >= 1 && Students <= 6 && pages == 2) {
budget = (typeof budget == 'number' ? budget : 0) + 270;
} else if (Students >= 1 && Students <= 6 && pages == 3) {
budget = (typeof budget == 'number' ? budget : 0) + 380;
} else if (Students >= 1 && Students <= 6 && pages == 4) {
budget = (typeof budget == 'number' ? budget : 0) + 380;
} else if (Students >= 1 && Students <= 6 && pages == 5) {
budget = (typeof budget == 'number' ? budget : 0) + 380;
} else if (Students >= 1 && Students <= 6 && pages == 6) {
budget = (typeof budget == 'number' ? budget : 0) + 380;
} else if (Students >= 1 && Students <= 6 && pages == 7) {
budget = (typeof budget == 'number' ? budget : 0) + 450;
}
 
 if (Students >= 7 && Students <= 13 && pages == 1) {
budget = (typeof budget == 'number' ? budget : 0) + 420;
} else if (Students >= 7 && Students <= 13 && pages == 2) {
budget = (typeof budget == 'number' ? budget : 0) + 450;
} else if (Students >= 7 && Students <= 13 && pages == 3) {
budget = (typeof budget == 'number' ? budget : 0) + 620;
} else if (Students >= 7 && Students <= 13 && pages == 4) {
budget = (typeof budget == 'number' ? budget : 0) + 540;
} else if (Students >= 7 && Students <= 13 && pages == 5) {
budget = (typeof budget == 'number' ? budget : 0) + 620;
} else if (Students >= 7 && Students <= 13 && pages == 6) {
budget = (typeof budget == 'number' ? budget : 0) + 620;
} else if (Students >= 7 && Students <= 13 && pages == 7) {
budget = (typeof budget == 'number' ? budget : 0) + 690;
}
  
 if (Students >= 14 && Students <= 29 && pages == 1) {
budget = (typeof budget == 'number' ? budget : 0) + 570;
} else if (Students >= 14 && Students <= 29 && pages == 2) {
budget = (typeof budget == 'number' ? budget : 0) + 720;
} else if (Students >= 14 && Students <= 29 && pages == 3) {
budget = (typeof budget == 'number' ? budget : 0) + 910;
} else if (Students >= 14 && Students <= 29 && pages == 4) {
budget = (typeof budget == 'number' ? budget : 0) + 760;
} else if (Students >= 14 && Students <= 29 && pages == 5) {
budget = (typeof budget == 'number' ? budget : 0) + 860;
} else if (Students >= 14 && Students <= 29 && pages == 6) {
budget = (typeof budget == 'number' ? budget : 0) + 930;
} else if (Students >= 14 && Students <= 29 && pages == 7) {
budget = (typeof budget == 'number' ? budget : 0) + 930;
}
 
 if (Students >= 30 && Students <= 46 && pages == 1) {
budget = (typeof budget == 'number' ? budget : 0) + 620;
} else if (Students >= 30 && Students <= 46 && pages == 2) {
budget = (typeof budget == 'number' ? budget : 0) + 790;
} else if (Students >= 30 && Students <= 46 && pages == 3) {
budget = (typeof budget == 'number' ? budget : 0) + 1000;
} else if (Students >= 30 && Students <= 46 && pages == 4) {
budget = (typeof budget == 'number' ? budget : 0) + 830;
} else if (Students >= 30 && Students <= 46 && pages == 5) {
budget = (typeof budget == 'number' ? budget : 0) + 950;
} else if (Students >= 30 && Students <= 46 && pages == 6) {
budget = (typeof budget == 'number' ? budget : 0) + 1010;
} else if (Students >= 30 && Students <= 46 && pages == 7) {
budget = (typeof budget == 'number' ? budget : 0) + 1010;
}
 
 if (Students >= 47 && Students <= 54 && pages == 1) {
budget = (typeof budget == 'number' ? budget : 0) + 840;
} else if (Students >= 47 && Students <= 54 && pages == 2) {
budget = (typeof budget == 'number' ? budget : 0) + 1010;
} else if (Students >= 47 && Students <= 54 && pages == 3) {
budget = (typeof budget == 'number' ? budget : 0) + 1330;
} else if (Students >= 47 && Students <= 54 && pages == 4) {
budget = (typeof budget == 'number' ? budget : 0) + 1160;
} else if (Students >= 30 && Students <= 46 && pages == 5) {
budget = (typeof budget == 'number' ? budget : 0) + 1280;
} else if (Students >= 30 && Students <= 46 && pages == 6) {
budget = (typeof budget == 'number' ? budget : 0) + 1340;
} else if (Students >= 30 && Students <= 46 && pages == 7) {
budget = (typeof budget == 'number' ? budget : 0) + 1410;
}
 
 
 if (Students >= 55 && Students <= 61 && pages == 1) {
budget = (typeof budget == 'number' ? budget : 0) + 990;
} else if (Students >= 55 && Students <= 61 && pages == 2) {
budget = (typeof budget == 'number' ? budget : 0) + 1190;
} else if (Students >= 55 && Students <= 61 && pages == 3) {
budget = (typeof budget == 'number' ? budget : 0) + 1570;
} else if (Students >= 55 && Students <= 61 && pages == 4) {
budget = (typeof budget == 'number' ? budget : 0) + 1320;
} else if (Students >= 55 && Students <= 61 && pages == 5) {
budget = (typeof budget == 'number' ? budget : 0) + 1520;
} else if (Students >= 55 && Students <= 61 && pages == 6) {
budget = (typeof budget == 'number' ? budget : 0) + 1580;
} else if (Students >= 55 && Students <= 61 && pages == 7) {
budget = (typeof budget == 'number' ? budget : 0) + 1650;
}
 
 
  

  
 $('[bloc=budget]').text(budget);
}


$("[name=Students]").on("input", function () {
   Students = getValueFromInput("Students");
   });

   $("[name=Students]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     Students = getValueFromInput("Students");
     });

$("[name=Students]").on("input", function () {
   Students = getValueFromInput("Students");
     calculation();
});

   $("[name=Students]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     Students = getValueFromInput("Students");
       calculation();
});

$("[name=LondonFd]").on("input", function () {
   LondonFd = getValueFromInput("LondonFd");
   });

   $("[name=LondonFd]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     LondonFd = getValueFromInput("LondonFd");
     });

$("[name=LondonFd]").on("input", function () {
   LondonFd = getValueFromInput("LondonFd");
     calculation();
});

 $("[name=LondonFd]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     LondonFd = getValueFromInput("LondonFd");
       calculation();
});

$("[name=cambridgeHD]").on("input", function () {
   cambridgeHD = getValueFromInput("cambridgeHD");
   });

   $("[name=cambridgeHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     cambridgeHD = getValueFromInput("cambridgeHD");
     });

$("[name=cambridgeHD]").on("input", function () {
   cambridgeHD = getValueFromInput("cambridgeHD");
     calculation();
});

 $("[name=cambridgeHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     cambridgeHD = getValueFromInput("cambridgeHD");
       calculation();
});
$("[name=cambridgeFD]").on("input", function () {
   cambridgeFD = getValueFromInput("cambridgeFD");
   });

   $("[name=cambridgeFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     cambridgeFD = getValueFromInput("cambridgeFD");
     });

$("[name=cambridgeFD]").on("input", function () {
   cambridgeFD= getValueFromInput("cambridgeFD");
     calculation();
});

 $("[name=cambridgeFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
    cambridgeFD = getValueFromInput("cambridgeFD");
       calculation();
});
$("[name=OxfordFD]").on("input", function () {
   OxfordFD = getValueFromInput("OxfordFD");
   });

   $("[name=OxfordFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     OxfordFD = getValueFromInput("OxfordFD");
     });

$("[name=OxfordFD]").on("input", function () {
   OxfordFD= getValueFromInput("OxfordFD");
     calculation();
});

 $("[name=OxfordFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
    OxfordFD = getValueFromInput("OxfordFD");
       calculation();
});
$("[name=NorwichFD]").on("input", function () {
   NorwichFD = getValueFromInput("NorwichFD");
   });

   $("[name=NorwichFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     NorwichFD = getValueFromInput("NorwichFD");
     });

$("[name=NorwichFD]").on("input", function () {
   NorwichFD = getValueFromInput("NorwichFD");
     calculation();
});

 $("[name=NorwichFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
    NorwichFD = getValueFromInput("NorwichFD");
       calculation();
});
  
  $("[name=SouthendFD]").on("input", function () {
   SouthendFD = getValueFromInput("SouthendFD");
   });

   $("[name=SouthendFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     SouthendFD = getValueFromInput("SouthendFD");
     });

$("[name=SouthendFD]").on("input", function () {
   SouthendFD = getValueFromInput("SouthendFD");
     calculation();
});

 $("[name=SouthendFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
    SouthendFD = getValueFromInput("SouthendFD");
       calculation();
});
  
 $("[name=BrightonFD]").on("input", function () {
   BrightonFD = getValueFromInput("BrightonFD");
   });

   $("[name=BrightonFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     BrightonFD = getValueFromInput("BrightonFD");
     });

$("[name=BrightonFD]").on("input", function () {
   BrightonFD= getValueFromInput("BrightonFD");
     calculation();
});

 $("[name=BrightonFD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
    BrightonFD = getValueFromInput("BrightonFD");
       calculation();
});

$("[name=IpswichHD]").on("input", function () {
   IpswichHD = getValueFromInput("IpswichHD");
   });

   $("[name=IpswichHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     IpswichHD = getValueFromInput("IpswichHD");
     });

$("[name=IpswichHD]").on("input", function () {
   IpswichHD = getValueFromInput("IpswichHD");
     calculation();
});

 $("[name=IpswichHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
    IpswichHD = getValueFromInput("IpswichHD");
       calculation();
});
  
  
  
$("[name=EdmundsHD]").on("input", function () {
  EdmundsHD = getValueFromInput("EdmundsHD");
   });

   $("[name=EdmundsHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     EdmundsHD = getValueFromInput("EdmundsHD");
     });

$("[name=EdmundsHD]").on("input", function () {
   EdmundsHD = getValueFromInput("EdmundsHD");
     calculation();
});

 $("[name=EdmundsHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
   EdmundsHD = getValueFromInput("EdmundsHD");
       calculation();
});
  
  $("[name=ClactonHD]").on("input", function () {
  ClactonHD = getValueFromInput("ClactonHD");
   });

   $("[name=ClactonHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
     ClactonHD = getValueFromInput("ClactonHD");
     });

$("[name=ClactonHD]").on("input", function () {
   ClactonHD = getValueFromInput("ClactonHD");
     calculation();
});

 $("[name=ClactonHD]").parent("label.w-radio").on("click", function () {
     clickedRadioButtonValue = $("input", this).val();
   ClactonHD = getValueFromInput("ClactonHD");
       calculation();
});
  
$("[name=pages]").on("input", function () {
pages = getValueFromInput("pages");
calculation();
});

$("[name=pages]").parent("label.w-radio").on("click", function () {
clickedRadioButtonValue = $("input", this).val();
pages = getValueFromInput("pages");
calculation();
});





