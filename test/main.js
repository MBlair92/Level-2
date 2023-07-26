// Random range function that returns 0, 1, or 2
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  class Player {
    constructor(name, coins =0, status = "Powered Up", star = true, active = true) {
      this.name = name;
      this.totalCoins = coins;
      this.status = status;
      this.hasStar = star;
      this.gameActive = active;
    }

// setName of type function - sets name to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"
    setName(namePicked) {
     return this.name = namePicked;
}
        

    gotHit() {
      if (this.status === "Powered Up") {
        this.status = "Big";
      } else if (this.status === "Big") {
        this.status = "Small";
      } else if (this.status === "Small") {
        this.status = "Dead";
      }
      this.checkStar();
    }
  
    gotPowerup() {
      if (this.status === "Small") {
        this.status = "Big";
      } else if (this.status === "Big") {
        this.status = "Powered Up";
      } else if (this.status === "Powered Up") {
        this.hasStar = true;
      }
    }
  
    addCoin() {
      this.totalCoins++;
    }
  
    checkStar() {
      if (this.hasStar) {
        this.hasStar = false;
      }
    }
  
    print() {
      console.log(`
        Name: ${this.name},
        Total Coins: ${this.totalCoins},
        Status: ${this.status},
        Star: ${this.hasStar ? "Active" : "Inactive"}
      `);
    }
  }
  
  // Create the player object
  const player = new Player();
  
  // Set player name
  player.setName("Luigi");
  
  // Function that randomly calls gotHit(), gotPowerup(), or addCoin() on the player object
  function randomAction() {
    const randomNumber = getRandomNumber(0, 2);
    switch (randomNumber) {
      case 0:
        player.gotHit();
        break;
      case 1:
        player.gotPowerup();
        break;
      case 2:
        player.addCoin();
        break;
    }
    player.print();
  
    // End the setInterval when player is dead
    if (player.status === "Dead") {
      clearInterval(interval);
    }
  }
  
  // Call randomAction every 1 second using setInterval
  const interval = setInterval(randomAction, 1000);