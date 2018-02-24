while(cont<5) {
                results[cont] = new Array(5);
                cont = cont+1
        }

        var a = 0
        var b = 0
        while(a<5) {
                b = 0
                while(b <5){
                                results[a][b]=0
                                b=b+1
                }
        a = a+1
        }

 maxx = function(s) {
                                if (s == 5){
                                        s = 4;
                                }
                                var z = s
                                var w = 0
                                var maxx = 0
                                while(w <5){
                                        if (results[z][w]>maxx){
                                                maxx = results[z][w]
                                        }
                                        w = w+1
                                }
                                return maxx
                }

 index =  function(s) {
                                var x = s
                                var y = 0
                                var max = 0
                                while(y < 5){
                                        if (results[x][y]>max){
                                                max = results[x][y]
                                                var index = y
                                        }
                                        y = y+1
                                }
                                if(max <2){
                                        if (!index || curiosity == true)  {
                                                index = Math.floor(Math.random()*(actions.length))
                                                curiosity = false
                                        }
                                }
                                return index
                 }
  while(true)     {



                        var i = index(current)
                        var action = actions[i]

                        console.log(out[action])
                        if (action == (4-current)) {
                                results[current][action] = results[current][action] + 0.2*(2+0.2*maxx(current+1) - results[current][action])
                                current = current + 1
                        }
                        else {
                                results[current][action] = results[current][action] + 0.2*(1+0.2*maxx(current+1) - results[current][action])
                                current = current + 1
                                }
                        if (current == 5) {
                                console.log("\n\n")
                                current = 0
                                var response = ''
                        response = rl.question("\n\n Press enter to continue");
                        console.log("\n\n")
                        }
                        var check = Math.floor((Math.random() * 2) + 1);
                        if(check == 1 ){
                                curiosity = true;
                        }

        }
