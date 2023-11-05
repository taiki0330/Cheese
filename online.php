<?php require_once 'products.php'; ?>




<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./css/online.css">
      <title>チーズオンラインストア</title>
</head>
<body>
      <div class="container">
            <div class="app-container">
                  <h1 class="title">CheeseCake shopping</h1>
                  <form id="cart" method="post" action="cart.php">
                        <div class="cards-container">
                              <?php foreach($products as $product): ?>          
                              <div class="card">
                                    <img class="card-image cart-img" src="<?php echo $product->getImage(); ?>" alt="">
                                    <p class="card-title"><?php echo $product->getName(); ?></p>
                                    <div class="flex justify-between">
                                          <p class="card-price"><?php echo $product->getPrice()."円"; ?></p>
                                          <p class="card-price">(税込 <?php echo $product->displayPrice(); ?>)</p>
                                          <input name="<?php echo $product->getId(); ?>" min="0" class="item-number" type="number" value="0">
                                    </div>
                              </div>
                              <?php endforeach; ?>
                        </div>
                  </form>
                  <div class="btn-footer bg-gray">
                        <input form="cart" class="cart-btn" type="submit" name="submit" value="カートに追加" />
                  </div>
            </div>
      </div>
</body>
</html>