<?php
function hitung_vocal($kata){
  $arr = str_split($kata);
  $vocal = ['a', 'i', 'u', 'e', 'o'];
  $found = array_intersect($vocal, $arr);
  $count = array_count_values($arr);
  $result = [];
  foreach ($found as $item) {
    $result[$item] = $count[$item];
  }
  return $result;
}
?>

<html>
<head>
    <link rel="stylesheet" href="form.css">
  <title>Hitung Vokal</title>
</head>
<body>
  <h1>Hitung Huruf Vocal</h1>
 
  <form method="POST" action="<?php $PHP_SELF ?>">
    <p>
      Masukkan Kata: <br>
      <textarea name="kata"></textarea>
    </p>
    <p>
      <button type="submit">Hitung</button>
    </p>
  </form>
 
  <?php if ($_POST && isset($_POST['kata'])): ?>
    <hr>
 
    <table border="1">
      <?php foreach (hitung_vocal($_POST['kata']) as $huruf => $jumlah): ?>
        <tr>
          <td style="width:100px">Huruf  :<?php echo $huruf ?></td>
          <td style="width:100px">Jumlah :<?php echo $jumlah ?></td>
        </tr>
      <?php endforeach ?>
    </table>
  <?php endif ?>
</body>
</html>