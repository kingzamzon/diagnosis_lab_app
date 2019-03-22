function tDay(){
        var d = new Date();
        var day = d.getDate();

        var year = d.getFullYear();
        var month = d.getMonth()+1;

        var all = day + "/" + month + "/" + year;

        document.putdate.tday.value = all;
        document.putdate.tbody.value = "GBulky, non-gravid anteverted uterus observed measuring 62.0mm X 79.0mm X 31.1mm in LXAPXT."  ;
        document.putdate.tbody1.value = "Homogeneous myometial echopattern. The endometrial plate is within normal limits. No gross anomaly seen on scan."  ;
        document.putdate.tbody2.value = "Adnexae - free bilaterally"  ;
        document.putdate.tbody3.value = "Pounch of Douglas - Clear fluid is observed within the posterior cul-de-sac."  ;
        document.putdate.impression1.value = "Pulse"  ;
        document.putdate.impression2.value = "HVS M/C/S is advised."  ;
        document.putdate.impression3.value = "Milk"  ;
       }

    function Reload() {
          location.reload();
      }
      function saveData() {
          pt_name= document.putdate.pname.value;
          clinic_name= document.putdate.clinicname.value;
          asex_name= document.putdate.asex.value;
          tday_name= document.putdate.tday.value;
          tbody_name= document.putdate.tbody.value;
          tbody1_name= document.putdate.tbody1.value;
          tbody2_name= document.putdate.tbody2.value;
          tbody3_name= document.putdate.tbody3.value;
          impression1_name= document.putdate.impression1.value;
          impression2_name= document.putdate.impression2.value;
          impression3_name= document.putdate.impression3.value;
          if(window.sessionStorage){ //localStorage
             sessionStorage.setItem("pt_name", pt_name);
             sessionStorage.setItem("clinic_name", clinic_name);
             sessionStorage.setItem("asex_name", asex_name);
             sessionStorage.setItem("tday_name", tday_name);
             sessionStorage.setItem("tbody_name", tbody_name);
             sessionStorage.setItem("tbody1_name", tbody1_name);
             sessionStorage.setItem("tbody2_name", tbody2_name);
             sessionStorage.setItem("tbody3_name", tbody3_name);
             sessionStorage.setItem("impression1_name", impression1_name);
             sessionStorage.setItem("impression2_name", impression2_name);
             sessionStorage.setItem("impression3_name", impression3_name);
            }else{
              document.write("Web storage is not supported")
          }
        }
      function myFunction() {
          var x = document.getElementById("firstP");
            if (x.style.display === "none") {
                 x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }  
        function myFunction1() {
          var x = document.getElementById("tagP");
            if (x.style.display === "none") {
                 x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }