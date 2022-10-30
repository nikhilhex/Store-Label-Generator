let cnv;
$("#generate").click(function() {
  let isNum = ($.isNumeric($("#price-input").val()));
  if (isNum) {
     $("#name").text($("#name-input").val());
  $("#price").text("$" + $("#price-input").val());
  JsBarcode("#barcode", $("#name").text());
  $("#result").css("display", "block");
  html2canvas(document.querySelector("#result")).then(canvas => {
    document.body.appendChild(canvas);
    cnv = canvas;
});
  $("#result").css("display", "none");
  $("#download").css("display", "block"); 
  }
})

$("#download").click(function() {
  var link = document.createElement("a");
  link.download = "store-label.png";
  link.href = cnv.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
})