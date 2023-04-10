		var page0 = 3;//顯示頁碼 m1.scr的頁數
		var page = 3;//傳送頁數
		var Chapter = 1;

		//自動設定高度
		//var windowHeight = window.outerHeight;
			//document.getElementById('t2').height = windowHeight*1.47;
			//document.getElementById('td2.2').height = windowHeight*1.47;

		//自動設定寬度
		//var windowWidth = window.outerWidth;
		//windowWidth = windowWidth*0.88;
		//document.getElementById('f').width = windowWidth;

			//跳頁
			sw.onclick = function() {
				x = document.getElementById('i1').value;
				c2 = page;
				c3 = page-1;
				page0 = x;
				page = x;
				document.getElementById('page0').textContent = Chapter+'-'+page0;
				p = m1.src.replace(c2+'.png',page+'.png');
				document.getElementById('m1').src = p;
				page--;
				p2 = m2.src.replace(c3+'.png',page+'.png');
				document.getElementById('m2').src = p2;
				page++;
			}

			//換章
			function imgError() {
				alert('章を変えてください。請換章。');
			}
			
			//下一頁
			b1.onclick = function() {
				c = page;
				page0++;
				page0++;
				page++;
				c2 = page;
				page++;
				document.getElementById('page0').textContent = Chapter+'-'+page0; 
				p = m1.src.replace(c+'.png',page+'.png');
				document.getElementById('m1').src = p;

				//換m2
				c3 = page-3;
				p2 = m2.src.replace(c3+'.png',c2+'.png');
				document.getElementById('m2').src = p2;

				//跳頁
				document.getElementById("i1").value = page;
				//測試
				//document.getElementById('g').textContent = p2;

			}

			//上一頁
			b2.onclick = function() {
				d = page;
					if(d<2){
					d=2;
					}
					page0--;	
					page0--;
				page--;
				d2 = page;
				page--;	
					if(page<3){
					page=3;
					}
					if(page0<3){
						page0=3;
					}

				document.getElementById('page0').textContent = Chapter+'-'+page0;
				document.getElementById('i1').value = page0; 
				p = m1.src.replace(d+'.png',page+'.png');
				document.getElementById('m1').src = p;

				//換m2
				d3 = page-1;
					if(d3<2){
						d3=2;
					}
				p2 = m2.src.replace(d2+'.png',d3+'.png');
				document.getElementById('m2').src = p2;

				//跳頁
				document.getElementById("i1").value = page;

				//測試
				//document.getElementById('g').textContent = p;

			}

			C1page.onclick = function() {
				C = 1;
				a = m1.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'5.png');
				document.getElementById('m1').src = a;

				page--;
				a2 = m2.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'4.png');
				document.getElementById('m2').src = a2;

				page0 = 5;
				page = 5;
				document.getElementById('page0').textContent = page0;

				//測試
				//document.getElementById('g').textContent = a2;

				Chapter = C;
			}

			C2page.onclick = function() {
				C = 2;
				a = m1.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'23.png');
				document.getElementById('m1').src = a;

				page--;
				a2 = m2.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'22.png');
				document.getElementById('m2').src = a2;

				page0 = 23;
				page = 23;
				document.getElementById('page0').textContent = page0;

				//測試
				//document.getElementById('g').textContent = a;

				Chapter = C;
			}

			C3page.onclick = function() {
				C = 3;
				a = m1.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'76.png');
				document.getElementById('m1').src = a;

				page--;
				a2 = m2.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'75.png');
				document.getElementById('m2').src = a2;

				page0 = 76;
				page = 76;
				document.getElementById('page0').textContent = page0;

				//測試
				//document.getElementById('g').textContent = a;

				Chapter = C;
			}

			C4page.onclick = function() {
				C = 4;
				a = m1.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'166.png');
				document.getElementById('m1').src = a;

				page--;
				a2 = m2.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'165.png');
				document.getElementById('m2').src = a2;

				page0 = 166;
				page = 166;
				document.getElementById('page0').textContent = page0;

				//測試
				//document.getElementById('g').textContent = a;

				Chapter = C;
			}

			C5page.onclick = function() {
				C = 5;
				a = m1.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'293.png');
				document.getElementById('m1').src = a;

				page--;
				a2 = m2.src.replace('C'+Chapter+'page/'+Chapter+'-'+page+'.png','C'+C+'page/'+C+'-'+'292.png');
				document.getElementById('m2').src = a2;

				page0 = 293;
				page = 293;
				document.getElementById('page0').textContent = page0;

				//測試
				//document.getElementById('g').textContent = a;

				Chapter = C;
			}
 
			function changepage(){
				p = page0+3;
				document.getElementById('DC').style.display = 'block';

				document.getElementById('p1').textContent = p;
				p = 0;
			}

			function changepageout(){
				document.getElementById('DC').style.display = 'none';

			}
 
			function mouseover(){
				document.getElementById('Title2').style.animationPlayState = 'running';
				document.getElementById('Title2').style.animationName = 't';
				document.getElementById('Title3').style.height = 100+'px';

				document.getElementById('chapterlist').style.animationPlayState = 'running';
				document.getElementById('chapterlist').style.animationName = 'list';
				document.getElementById('chapterlist').style.zIndex = 7;

				document.getElementById('copyright2').style.zIndex = 4;
				document.getElementById('copyright').style.animationPlayState = 'running';
				document.getElementById('copyright').style.animationName = 'cr';
				
			}

			function mouseout(){
				document.getElementById('Title2').style.animationName = 'tback';
				document.getElementById('Title3').style.height = 15+'px';

				document.getElementById('chapterlist').style.animationName = 'listback';	
				document.getElementById('chapterlist').style.zIndex = 5;
				
				document.getElementById('copyright').style.animationName = 'crback';
				document.getElementById('copyright2').style.width = 'fit-content';	
			}

			document.oncontextmenu = function() { return false;};

			document.onkeydown = function(theEvent) {
				if (theEvent != null) {
						event = theEvent;
				}

				if (event.altKey || event.ctrlKey) {
						return false;
        		}

				if (event.keyCode >= 112 && event.keyCode <= 123 || event.keyCode == 8) {
						try {
								// Firefox 會丟 Exception，所以用 try-cache 擋住
								event.keyCode = 0; 
						} catch(e){}
						return false;
				}
			}				

				/*function showCoords(event){
					event = event || window.event;
					event.preventDefault();
					x = event.clientX;
					y = event.clientY;
					var cood = 'X:' + x + ',Y:' + y;
					document.getElementById('test2').innerHTML = cood;
				}會破壞input number 
				https://stackoverflow.com/questions/34282278/arrows-not-working-on-input-type-number/37521764*/
