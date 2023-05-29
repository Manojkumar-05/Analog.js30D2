

const setTime = () =>{
     const minsBar = document.querySelector('.min')
     const hrsBar = document.querySelector('.hr')
     const secondsBar = document.querySelector('.sec')


     const now = new Date()
     const sec = now.getSeconds()
     const seconds =((sec/60) * 360 )
     secondsBar.style.transform = `rotate(${seconds}deg)`
     console.log(sec);

     let hr = now.getHours()
     console.log(hr);
      if(hr > 12){
      let hrs = hr - 12
      let hour = hrs * 30
      hrsBar.style.transform = ` rotate(${hour}deg)`
     }
      else{
      let hour = hr * 30
      hrsBar.style.transform = ` rotate(${hour}deg)`
      }
     
      const min = now.getMinutes()
      console.log(min);
     const mins = ((min/60) * 360 )
     minsBar.style.transform = `rotate(${mins}deg)`
}


setInterval(setTime , 1000);

