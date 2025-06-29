<!DOCTYPE html>
<html>
<head>
  <title>Simple JavaScript Example</title>
</head>
<body>

<h2>Click the Button</h2>

<button onclick="showMessage()">Click Me!</button>

<p id="message"></p>

<script>
  function showMessage() {
    let msg = "Hello! You clicked the button.";
    document.getElementById("message").innerText = msg;
  }
</script>

</body>
</html>

