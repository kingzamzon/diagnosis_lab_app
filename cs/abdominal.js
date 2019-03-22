function tDay(){
        var d = new Date();
        var day = d.getDate();

        var year = d.getFullYear();
        var month = d.getMonth()+1;

        var all = day + "/" + month + "/" + year;

        document.putdate.tday.value = all;
        document.putdate.pliver.value = "Normal in size(span 9.6cm) with homogeneous echo pattern and regular margin. No focal/diffuse lesion is seen. There is no IBHR dilatation. ";

        document.putdate.pgall.value = "Is well distended with no evidence of gallstones or cholecystitis. Its contents are clear. Gall bladder wall thickness is normal. CBD is normal in course and caliber.";

        document.putdate.ppancreas.value = "Is normal in size, margin and echotexture. No dilated pancreatic duct. No abnormal calcification is noted in the pancreatic gland.";

        document.putdate.pspleen.value = "Is normal in size(span 6.1cm), shape and echotexture. No focal lesion is seen. Splenic hilum is normal.";

        document.putdate.pportal.value = "Normal is caliber and course. No para aortic lymphadenopathy. No ascites.";

        document.putdate.pkidneys.value = "Both kidneys are normal in size (RK: 7.2 x 3.1cm; LK: 6.3 x 5.1cm), shape, position, amd contour with normal coritico-medullary differentiation.";

        document.putdate.pothers.value = "There is no evidence of renal calculus/ Hydronephorsis/ Hydroureter. There is no free peritoneal fluid or intra-abdominal mass lesion seen. \nThe bowel loops are normal in caliber and peristaltic activity.";

        document.putdate.pimpression.value = "No sonographic abnormality is seen. --or--- \n PID seen and fibroid (10 cm) \n ADVICED TO DO HVS AND URINE M/C/S";
        
       }

    function Reload() {
          location.reload();
      }
      function saveData() {
          pta_name= document.putdate.p_name.value;
          pd_name= document.putdate.tday.value;
          pa_name= document.putdate.psex.value;
          ps_name= document.putdate.page.value;
          pl_name= document.putdate.pliver.value;
          pg_name= document.putdate.pgall.value;
          pp_name= document.putdate.ppancreas.value;
          psp_name= document.putdate.pspleen.value;
          pt_name= document.putdate.pportal.value;
          pk_name= document.putdate.pkidneys.value;
          po_name= document.putdate.pothers.value;
          pi_name= document.putdate.pimpression.value;
          if(window.sessionStorage){ //localStorage
             sessionStorage.setItem("pta_name", pta_name);
             sessionStorage.setItem("pd_name", pd_name);
             sessionStorage.setItem("pa_name", pa_name);
             sessionStorage.setItem("ps_name", ps_name);
             sessionStorage.setItem("pl_name", pl_name);
             sessionStorage.setItem("pg_name", pg_name);
             sessionStorage.setItem("pp_name", pp_name);
             sessionStorage.setItem("psp_name", psp_name);
             sessionStorage.setItem("pt_name", pt_name);
             sessionStorage.setItem("pk_name", pk_name);
             sessionStorage.setItem("po_name", po_name);
             sessionStorage.setItem("pi_name", pi_name);
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