
const hitung = document.querySelector(".hitung")


function calcWr(){

    var match = document.getElementById("matches").value //60
    var wr = document.getElementById("winrate").value // 70
    var target = document.getElementById("target").value  //90 

    match = Number(match);
    wr = Number(wr);
    target = Number(target);

    if (isNaN(match) || isNaN(wr) || isNaN(target)) {
        return "bruih";
    }
    if(target >= 100){
       return "bruh";
    }
    else{
        var totalWin = match*wr/100; // 60*70/100 = 42 win
        var totalWin2 = totalWin; // 42 win
    
        for (let i = 1; i>0 ; i++) {
    
            totalWin = totalWin + 1; // 42+1 = 43 win
            match = match + 1; // 60+1 = 61win
        
            var looprate = totalWin/match*100; //43/61 * 100 = 70.49
        
            if(looprate >= target){
                break;
            }
        }
    
        return totalWin-totalWin2;
    }



}

const hasil = document.getElementById("hasil");


hitung.addEventListener("click", function(){

    var match = document.getElementById("matches").value //60
    var wr = document.getElementById("winrate").value // 70
    var target = document.getElementById("target").value  //90 

    match = Number(match);
    wr = Number(wr);
    target = Number(target);


    if (isNaN(match) || isNaN(wr) || isNaN(target)) {
        hasil.textContent = `isi dengan angka wir`
    }

    else if(target >= 100){
        hasil.textContent = 'WR dah gabisa 100 wir'
    }

    else{
        var needWin = Math.round(calcWr());
        target2 = document.getElementById("target").value 
    
        hasil.innerHTML = `Anda perlu winstreak <span style="color:#ff9c3f;">${needWin}x</span> untuk mencapai WR <span style="color:#ff9c3f;">${target2}%</span>`
    }

})

document.addEventListener("keydown", function(event) {

    console.log(event.key)

    if (event.key === 'Enter') {

        var match = document.getElementById("matches").value //60
        var wr = document.getElementById("winrate").value // 70
        var target = document.getElementById("target").value  //90 

    
        if (isNaN(match) || isNaN(wr) || isNaN(target)) {
            hasil.textContent = `isi dengan angka wir`
        }
    
        else if(target >= 100){
            hasil.textContent = 'WR dah gabisa 100 wir'
        }
    
        else{
            var needWin = Math.round(calcWr());
            target2 = document.getElementById("target").value 
        
            hasil.innerHTML = `Anda perlu winstreak <span style="color:#ff9c3f;">${needWin}x</span> untuk mencapai WR <span style="color:#ff9c3f    ;">${target2}%</span>`
        }
    
    }
});



// buat function buat nerima ke 3 value tsb

// lalu keluarin hasilnya