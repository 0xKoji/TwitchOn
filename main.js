var check = true
var collected = 0

function clickPoint() {
    var reward = document.querySelector('[aria-label="Claim Bonus"]')

    if(reward){
        console.log('Found ', reward)
        collected += 1
        reward.click()
    }

}

function main(){
    setTimeout(function(){
        if(check === true){
            console.log('enabled')
            var loop = window.setInterval(function(){
                clickPoint();
            }, 5000)
        }else{
            clearInterval(loop)
            console.log('disabled')
        }
    }, 10000);
}

main()


