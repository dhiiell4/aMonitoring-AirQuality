    // Progress Bar Nilai Kadar CO di Baddoka
    var firebaseRef = firebase.database().ref("Device1/CO");
        firebaseRef.on("value" , function(snapshot){
          snapshot.forEach(function(element){
            console.log(element.val());

            progressBar = document.querySelectorAll('.progress-bar-monoksida-baddoka');
            progressBar.forEach(function(classprogress) {
            console.log(classprogress)

            if (element.val() >= '301.0000') {
                classprogress.classList.add('bg-dark');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '95%';
            }

            else if (element.val() >= '201.0000' && element.val() <= '300.9999') {
                classprogress.classList.add('bg-danger');
                classprogress.classList.remove('bg-dark', 'bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '80%';
            }

            else if (element.val() >= '101.0000' && element.val() <= '200.9999') {
                classprogress.classList.add('bg-warning');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-info', 'bg-success');
                classprogress.style.width = '55%';
            }

            else if (element.val() >= '51.0000' && element.val() <= '100.9999') {
                classprogress.classList.add('bg-info');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-success');
                classprogress.style.width = '35%';
            }

            else if (element.val() >= '21.0000' && element.val() <= '50.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '23%';
            }

            else if (element.val() >= '0.0000' && element.val() <= '20.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '10%';
            }

            })
            });
        })   
    // Progress Bar Nilai Kadar CO2 di Baddoka
    var firebaseRef = firebase.database().ref("Device1/CO2");
        firebaseRef.on("value" , function(snapshot){
        snapshot.forEach(function(element){
            console.log(element.val());

            progressBar = document.querySelectorAll('.progress-bar-dioksida-baddoka');
            progressBar.forEach(function(classprogress) {
            console.log(classprogress)

            if (element.val() >= '2001.0000') {
                classprogress.classList.add('bg-danger');
                classprogress.classList.remove('bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '90%';
            }

            else if (element.val() >= '1001.0000' && element.val() <= '2000.9999') {
                classprogress.classList.add('bg-warning');
                classprogress.classList.remove('bg-danger', 'bg-info', 'bg-success');
                classprogress.style.width = '70%';
            }

            else if (element.val() >= '351.0000' && element.val() <= '1000.9999') {
                 classprogress.classList.add('bg-info');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-success');
                classprogress.style.width = '50%';
            }

            else if (element.val() >= '0.0000' && element.val() <= '350.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '20%';
            }

            })
            });
        })

    // Progress Bar Nilai Kadar CO di Daya
    var firebaseRef = firebase.database().ref("Device2/CO");
        firebaseRef.on("value" , function(snapshot){
          snapshot.forEach(function(element){
            console.log(element.val());

            progressBar = document.querySelectorAll('.progress-bar-monoksida-daya');
            progressBar.forEach(function(classprogress) {
            console.log(classprogress)

            if (element.val() >= '301.0000') {
                classprogress.classList.add('bg-dark');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '95%';
            }

            else if (element.val() >= '201.0000' && element.val() <= '300.9999') {
                classprogress.classList.add('bg-danger');
                classprogress.classList.remove('bg-dark', 'bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '80%';
            }

            else if (element.val() >= '101.0000' && element.val() <= '200.9999') {
                classprogress.classList.add('bg-warning');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-info', 'bg-success');
                classprogress.style.width = '55%';
            }

            else if (element.val() >= '51.0000' && element.val() <= '100.9999') {
                classprogress.classList.add('bg-info');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-success');
                classprogress.style.width = '35%';
            }

            else if (element.val() >= '21.0000' && element.val() <= '50.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '23%';
            }

            else if (element.val() >= '0.0000' && element.val() <= '20.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '10%';
            }

            })
            });
        })  
    // Progress Bar Nilai Kadar CO2 di Daya
    var firebaseRef = firebase.database().ref("Device2/CO2");
        firebaseRef.on("value" , function(snapshot){
        snapshot.forEach(function(element){
            console.log(element.val());

            progressBar = document.querySelectorAll('.progress-bar-dioksida-daya');
            progressBar.forEach(function(classprogress) {
            console.log(classprogress)

            if (element.val() >= '2001.0000') {
                classprogress.classList.add('bg-danger');
                classprogress.classList.remove('bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '90%';
            }

            else if (element.val() >= '1001.0000' && element.val() <= '2000.9999') {
                classprogress.classList.add('bg-warning');
                classprogress.classList.remove('bg-danger', 'bg-info', 'bg-success');
                classprogress.style.width = '70%';
            }

            else if (element.val() >= '351.0000' && element.val() <= '1000.9999') {
                 classprogress.classList.add('bg-info');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-success');
                classprogress.style.width = '50%';
            }

            else if (element.val() >= '0.0000' && element.val() <= '350.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '20%';
            }

            })
            });
        })   
   
   // Progress Bar Nilai Kadar CO Lokasi [3]
    var firebaseRef = firebase.database().ref("Device3/CO");
        firebaseRef.on("value" , function(snapshot){
          snapshot.forEach(function(element){
            console.log(element.val());

            progressBar = document.querySelectorAll('.progress-bar-monoksida-lokasi');
            progressBar.forEach(function(classprogress) {
            console.log(classprogress)

            if (element.val() >= '301.0000') {
                classprogress.classList.add('bg-dark');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '95%';
            }

            else if (element.val() >= '201.0000' && element.val() <= '300.9999') {
                classprogress.classList.add('bg-danger');
                classprogress.classList.remove('bg-dark', 'bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '80%';
            }

            else if (element.val() >= '101.0000' && element.val() <= '200.9999') {
                classprogress.classList.add('bg-warning');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-info', 'bg-success');
                classprogress.style.width = '55%';
            }

            else if (element.val() >= '51.0000' && element.val() <= '100.9999') {
                classprogress.classList.add('bg-info');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-success');
                classprogress.style.width = '35%';
            }

            else if (element.val() >= '21.0000' && element.val() <= '50.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '23%';
            }

            else if (element.val() >= '0.0000' && element.val() <= '20.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-dark', 'bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '10%';
            }

            })
            });
        })  
    // Progress Bar Nilai Kadar CO2 Lokasi [3]
    var firebaseRef = firebase.database().ref("Device3/CO2");
        firebaseRef.on("value" , function(snapshot){
        snapshot.forEach(function(element){
            console.log(element.val());

            progressBar = document.querySelectorAll('.progress-bar-dioksida-lokasi');
            progressBar.forEach(function(classprogress) {
            console.log(classprogress)

            if (element.val() >= '2001.0000') {
                classprogress.classList.add('bg-danger');
                classprogress.classList.remove('bg-warning', 'bg-info', 'bg-success');
                classprogress.style.width = '90%';
            }

            else if (element.val() >= '1001.0000' && element.val() <= '2000.9999') {
                classprogress.classList.add('bg-warning');
                classprogress.classList.remove('bg-danger', 'bg-info', 'bg-success');
                classprogress.style.width = '70%';
            }

            else if (element.val() >= '351.0000' && element.val() <= '1000.9999') {
                 classprogress.classList.add('bg-info');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-success');
                classprogress.style.width = '50%';
            }

            else if (element.val() >= '0.0000' && element.val() <= '350.9999') {
                classprogress.classList.add('bg-success');
                classprogress.classList.remove('bg-danger', 'bg-warning', 'bg-info');
                classprogress.style.width= '20%';
            }

            })
            });
        })   