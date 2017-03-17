<?php include 'database.php'; ?>
<?php
//create select query
$query = "SELECT * FROM shouts ORDER BY id DESC LIMIT 5";
$shouts = mysqli_query($con, $query);

?>
<!DOCTYPE html>
<html>
<head>
	<title>php & ajax shoutbox</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/shout.css">
	<script src="js/shoutb.js"></script>
</head>
<body>
<div id="container">
	<header>
		<h1>JS Shoutbox</h1>
	</header>
	<div id="shouts">
		<ul>
			<?php while($row = mysqli_fetch_assoc($shouts)) : ?>
			<li><?php echo $row['name'];?>: <?php echo $row['shout'];?> [<?php echo $row['date'];?>9</li>
			<?php endwhile; ?>
		</ul>
	</div>
	<footer>
		<form>
			<label>Name: </label>
			<input type="text" name="name" id="name">
			<label>Shout: </label>
			<input type="text" name="shout" id="shout">
			<input type="submit" name="" id="submit" value="SHOUT!">
		</form>
	</footer>

	<img src="img/170317-phpajax-shoutbox.jpg" border="1">
	<img src="img/shoutbox.jpg" border="1">
	<img src="img/shoutb.jpg" border="1">

</div>
</body>
</html>