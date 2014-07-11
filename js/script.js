	function initArray() {
		this.length = initArray.arguments.length
		for (var i = 0; i < this.length; i++)
			this[i+1] = initArray.arguments[i]
	}
	var pos = new initArray(9,9,9,9,9,9,9,9,9);
	var nummoves= 0;

	function random() {
		today = new Date();
		num = today.getTime();
		num = Math.round(Math.abs(Math.sin (num)*1000000)) % 9;
		return num;
	}

	function display(pos) {
		for (var i=0; i<9; i++)  {
			document.forms[0].elements[i].value = pos[i];
		}
		document.forms[0].moves.value= nummoves;
		win();
	}

	function move(num) {
		if (num < 8 && pos[num+1]==0) {
			pos[num+1]= pos[num];
			pos[num]= 0;
			nummoves++;
		}
		else if (num > 0 && pos[num-1]==0) {
			pos[num-1]= pos[num];
			pos[num]= 0;
			nummoves++;
		} 
		else if (num > 2 && pos[num-3]==0) {
			pos[num-3]= pos[num];
			pos[num]= 0;
			nummoves++;
		}
		else if (num < 6 && pos[num+3]==0 ) {
			pos[num+3]= pos[num];
			pos[num]= 0;
			nummoves++;
		}
		display(pos);
	}
	function win() {     
		if (pos[0]== 1 & pos[1]== 2 & pos[2]== 3 & pos[3]== 4 & 
			pos[4]== 5 & pos[5]== 6 & pos[6]== 7 & pos[7]== 8 & pos[8]== 0) {
			if (confirm('You did it! Do you want to restart?')) newgame();
   		}
	}
	function newgame() {
		var x=1;
		for (var i=0; i<9; i++) {
			pos[i]=9;
		}
		for (var i=0; i<9;i++) {
			randomnum=random();
			if (randomnum==9) randomnum=8;
			x=1;
			for (var j=0; j<9; j++)  {
				if (j==i)
					continue;
				if (randomnum==pos[j]) {
					x=0;
					break;
   				}
			}
			if (x==0) {
				i--;
				continue;
			}
			pos[i]=randomnum;
		}
		nummoves=0;
		display(pos);   
	}   