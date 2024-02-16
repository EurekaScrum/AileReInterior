<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2 Images Side by Side in 4 Rows</title>
  <style>
    /* Optional: Add some styling to control image size and spacing */
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .image-row {
      display: flex;
      margin-bottom: 10px; /* Adjust spacing between rows */
    }

    img {
      width: 48%; /* Set the width to 48% to leave some space for margins */
      height: auto;
      margin-right: 4px; /* Adjust spacing between images */
    }

    img:last-child {
      margin-right: 0; /* Remove margin for the last image in each row */
    }
  </style>
</head>
<body>

  <!-- First Row -->
  <div class="image-container">
    <!-- Image 1 with External Link -->
    <a href="https://www.amazon.in/gp/product/B0CG4HM927/ref=ppx_yo_dt_b_asin_image_o02_s00?ie=UTF8&th=1" target="_blank">
      <img src="assets/images/sofa.jpg" alt="Image 1">
    </a>

    <!-- Image 2 with External Link -->
    <a href="https://www.amazon.in/gp/product/B0CHJP3R3P/ref=ppx_yo_dt_b_asin_title_o00_s03?ie=UTF8&psc=1" target="_blank">
      <img src="assets/images/BLDCFan.jpg" alt="BLDC Fan">
    </a>
  </div>

  <!-- Second Row -->
  <div class="image-container">
    <!-- Image 1 with External Link -->
    <a href="https://www.amazon.in/gp/product/B0B56CVZVS/ref=ppx_yo_dt_b_asin_image_o02_s00?ie=UTF8&th=1" target="_blank">
      <img src="assets/images/LenovoLaptop.jpg" alt="Laptop Amazon Link">
    </a>

    <!-- Image 2 with External Link -->
    <a href="https://www.amazon.in/gp/product/B0C77H29ST/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&th=1&psc=1" target="_blank">
      <img src="assets/images/LiNingBadminetonShoes.jpg" alt="Image 2">
    </a>
  </div>

  <!-- Third Row -->
  <div class="image-container">
    <!-- Image 1 with External Link -->
    <a href="https://www.amazon.in/gp/product/B0BTHLMS39/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1" target="_blank">
      <img src="assets/images/Fridge.jpg" alt="Image 1">
    </a>

    <!-- Image 2 with External Link -->
    <a href="https://www.amazon.in/gp/product/B0BPPQHSHJ/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&th=1" target="_blank">
      <img src="assets/images/suitCase.jpeg" alt="Image 2">
    </a>
  </div>

  <!-- Fourth Row -->
  <div class="image-row">
    <!-- Image 1 with External Link -->
    <a href="https://www.amazon.in/gp/product/B0CBBC218L/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1" target="_blank">
      <img src="assets/images/dartBoard.jpg" alt="Image 1">
    </a>
  </div>

</body>
</html>
