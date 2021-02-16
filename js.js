function letsStart() {
    stop:for (i = 0; i <= 1000; i++) {
        let signal = prompt("Text something")
        if (!signal) break stop
    }
    
    alert("Access denied")
}

letsStart()