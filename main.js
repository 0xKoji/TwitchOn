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
        console.log("Enabled")
        var loop = window.setInterval(function(){
            clickPoint();
        }, 5000)
    }, 3000);
}

main()


