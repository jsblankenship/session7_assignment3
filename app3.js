// JavaScript Document

function counter(){			
				var count = 0;				
				return function(){
					return ++count;
				};		
			};			
			var incrementCounter = counter();
			
			function onButtonClick(){			
				var count = incrementCounter();				
				console.log(count);
			}