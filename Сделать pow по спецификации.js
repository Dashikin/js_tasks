<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://js.cx/test/libs.js"></script>
  <script src="test.js"></script>
</head>
<body>

  <script>
    function pow(x, n) {
      if (n < 0) return NaN;
      if (Math.round(n) != n) return NaN;
	  if (n == 0 && x == 0) return NaN;
     
        var result = 1;
        for (var i = 0; i < n; i++) {
        result *= x;
        }
      return result;
    }

  </script>

</body>
</html>