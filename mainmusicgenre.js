function getresults(){

	var ques1 = document.mus.ques1.value;
	var ques2 = document.mus.ques2.value;
	var ques3 = document.mus.ques3.value;
	var ques4 = document.mus.ques4.value;
	var ques5 = document.mus.ques5.value;

	var jazz = 0;
	var indie = 0;
	var pop = 0;
	var rock = 0;


	switch(ques1){
		case "Walking across the beach with my lover, as the moon illuminates the landscape": jazz++;
		case "Listening to records and talking about conspiracy theories": indie++;
		case "Karaoke, baby!": pop++;
		case "Running around town and going on adventures :)": rock++;	

	}

	switch(ques2){
		case "Only if I'm shaking my hips!": jazz++;
		case "I like to chilllllllll": indie++;
		case "YES!!!": pop++;
		case "I love to whip my head back and forth!": rock++;	

	}

	switch(ques3){
		case "At a small venue with dim lighting, sitting and snapping my fingers to live music": jazz++;
		case "Car jams!! With friends": indie++;
		case "At a party with disco balls!": pop++;
		case "At a concert!! Definitely with yelling involved": rock++;	

	}

	switch(ques4){
		case "Sherlock Holmes": jazz++;
		case "Perks of Being a Wallflower": indie++;
		case "The Fault in Our Stars": pop++;
		case "The Shining": rock++;	

	}

	switch(ques5){
		case "TRAVELING BACK IN TIME": jazz++;
		case "ROLLING DOWN A HILL": indie++;
		case "SHIMMYING": pop++;
		case "FOOD FIGHT!!": rock++;	

	}


	var mgenre = "random";
	document.getElementById("done_submit").style.visibility= "visible";
	document.getElementById("resp").innerHTML = mgenre;


	var maximum = 0;
	if (jazz>maximum){
		mgenre = "You should listen to jazz! Awesome :) Here's some awesome jazz artists: Count Basie, Charlie Parker, Chick Corea, Miles Davis, and Herbie Hancock! If you're interested in jazz interpretations of modern music, check out Postmodern Jukebox! And if you're interested in jazz singers, check out Sarah Vaughan, Ella Fitzgerald, Frank Sinatra, and Nat King Cole. Also a quick Google search will get you more great artists:) thanks!";
		maximum = jazz;
		var elem = document.createElement("img");
		elem.src="https://media3.giphy.com/media/llJ2dQhZWcIaeVwcoe/giphy.gif";
		document.getElementById("resp").innerHTML = mgenre;
		document.getElementById("resp").appendChild(elem);
	}
	if (indie>maximum){
		mgenre = "You got indie! Indie is very broad and has a bunch of sub-genres, like indie electronica, indie folk, indie pop, indie rock, chillwave, and math rock. Some great indie bands include The Strokes, Vampire Weekend, Hippo Campus, COIN, CRUISR, and Bad Suns, and a Google search can give you even more! Thanks for taking the quiz :)";
		maximum = indie;
		var elem = document.createElement("img");
		elem.src="https://media3.giphy.com/media/3o6ozkS0d2wOcl8naE/source.gif";
		document.getElementById("resp").innerHTML = mgenre;
		document.getElementById("resp").appendChild(elem);
	}
	if (pop>maximum){
		mgenre = "You got pop music as your genre! Pop music consists of many artists that are popular today and also is great to dance to at parties! It's a cool genre that's evolved over time, into what's on the radio today. Cool pop artists include: Ariana Grande, Lady Gaga, Michael Jackson, Justin Bieber, Billie Eilish, Troye Sivan, Charlie Puth, and even more with a quick Google search! Thanks for taking this quiz:)";
		maximum = pop;
		var elem = document.createElement("img");
		elem.src="https://media.giphy.com/media/107Cji2Kk4Hrry/giphy.gif";
		document.getElementById("resp").innerHTML = mgenre;
		document.getElementById("resp").appendChild(elem);
	}
	if (rock>maximum){
		mgenre = "ROCK ON!!! You should listen to rock!! This genre is so much fun to play and to dance to! Some great rock artists include: Queen, The Red Hot Chili Peppers, The Foo Fighters, Queens of the Stone Age, Fleetwood Mac, TOTO, The Beatles, Foreigner, Led Zeppelin, and more with a quick Google search! Thanks for taking this quiz:)";
		maximum = rock;
		var elem = document.createElement("img");
		elem.src="https://media2.giphy.com/media/AxdLNBvuKIP0Q/giphy.gif";
		document.getElementById("resp").innerHTML = mgenre;
		document.getElementById("resp").appendChild(elem);
	}
}
