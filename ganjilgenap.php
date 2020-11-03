<html>
<head>
</head>
<body>  
<h2>Menentukan Angka Ganjil Genap</h2>

	<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">  
	  Angka: <input type="text" name="bil">
	  <br><br>
	  <input type="submit" name="submit" value="Submit">  
	</form>
	<br>
	<?php
	$tampil = "";

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			$bil = $_POST["bil"];
			
			if ($bil % 2 == 0){ 
			    echo "Angka $bil Merupakan Genap"; 
		}else {
			    echo "Angka $bil Merupakan Ganjil"; 
		}
	}
?>
</body>
</html>