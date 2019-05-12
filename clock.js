setInterval(function(){  
    	const date = new Date();  
        const format = [      
        	(date.getHours()),      
        	(date.getMinutes()<10?'0':'') + date.getMinutes(),      
        	(date.getSeconds())  ].join(":");  
        document.getElementById("clock").innerHTML = format;
    }, 0);