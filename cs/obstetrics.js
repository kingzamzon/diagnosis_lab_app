function tDay(){
        var d = new Date();
        var day = d.getDate();

        var year = d.getFullYear();
        var month = d.getMonth()+1;

        var all = day + "/" + month + "/" + year;
        document.putdate.tday.value = all;
        document.putdate.uterus.value = "Gravid";
        document.putdate.gestation.value = "One";
        document.putdate.lieas.value = "Logitudinal";
        document.putdate.foewell.value = "Normal";
        document.putdate.foecar.value = "Present 117/M";
        document.putdate.foelim.value = "Active";
        document.putdate.plalo.value = "Posterior";
        document.putdate.plama.value = "VI";
        document.putdate.plapra.value = "Nil";
        document.putdate.internalos.value = "Open";
        document.putdate.amniotic.value = "Clear and adequate";
        document.putdate.grossfoe.value = "Nil";
        document.putdate.adnexal.value = "Nil";
        document.putdate.otherut.value = "Nil";
        document.putdate.foetalwei.value = "1.70kg";
        document.putdate.lgender.value = "XY";
        document.putdate.expd.value = all;
        document.putdate.impression.value = "A viable and active foetus in an cephalic presentation & longitudinal lie at 36 weeks 2 days";
    }

    function Reload() {
          location.reload();
      }
      function saveData() {
          patient_name= document.putdate.patientname.value;
          hospital_name= document.putdate.hospitalname.value;
          da_te= escape(document.putdate.tday.value);
          u_name= document.putdate.uterus.value;
          nog_name= document.putdate.hospitalname.value;
          p_name= document.putdate.gestation.value;
          lat_name= document.putdate.lieas.value;
          fwb_name= document.putdate.foewell.value;
          fcp_name= document.putdate.foecar.value;
          flm_name= document.putdate.foelim.value;
          pl_name= document.putdate.plalo.value;
          pmg_name= document.putdate.plama.value;
          ppt_name= document.putdate.plapra.value;
          ico_name= document.putdate.internalos.value;
          afc_name= document.putdate.amniotic.value;
          gfad_name= document.putdate.grossfoe.value;
          apd_name= document.putdate.adnexal.value;
          oumd_name= document.putdate.otherut.value;
          fpw_name= document.putdate.foetalwei.value;
          lg_name= document.putdate.lgender.value;
          bpd_name= document.putdate.bpd.value;
          fl_name= document.putdate.fl.value;
          week_name= document.putdate.bweek.value;
          day_name= document.putdate.bday.value;
          edd_name= document.putdate.expd.value;
          if(window.sessionStorage){ //localStorage
             sessionStorage.setItem("patient_name", patient_name);
             sessionStorage.setItem("hospital_name", hospital_name);
             sessionStorage.setItem("da_te", da_te);
             sessionStorage.setItem("u_name", u_name);
             sessionStorage.setItem("nog_name", nog_name);
             sessionStorage.setItem("p_name", p_name);
             sessionStorage.setItem("lat_name", lat_name);
             sessionStorage.setItem("fwb_name", fwb_name);
             sessionStorage.setItem("fcp_name", fcp_name);
             sessionStorage.setItem("flm_name", flm_name);
             sessionStorage.setItem("pl_name", pl_name);
             sessionStorage.setItem("pmg_name", pmg_name);
             sessionStorage.setItem("ppt_name", ppt_name);
             sessionStorage.setItem("ico_name", ico_name);
             sessionStorage.setItem("afc_name", afc_name);
             sessionStorage.setItem("gfad_name", gfad_name);
             sessionStorage.setItem("apd_name", apd_name);
             sessionStorage.setItem("oumd_name", oumd_name);
             sessionStorage.setItem("fpw_name", fpw_name);
             sessionStorage.setItem("lg_name", lg_name);
             sessionStorage.setItem("bpd_name", bpd_name);
             sessionStorage.setItem("fl_name", fl_name);
             sessionStorage.setItem("week_name", week_name);
             sessionStorage.setItem("day_name", day_name);
             sessionStorage.setItem("edd_name", edd_name);
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