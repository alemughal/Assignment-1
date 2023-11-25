import inquirer from 'inquirer';

// Function to simulate buying groceries
async function buyGroceries(): Promise<void> {
  let totalBill: number = 0;

  console.log("Welcome to the supermarket!");

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'section',
      message: 'Which section would you like to visit?',
      choices: ['Fruits', 'Vegetables'],
    },
  ]);

  if (answer.section === 'Fruits') {
    console.log("You are in the fruits section.");
    totalBill += await buyItems(['Apple', 'Banana', 'Orange', 'Kiwi', 'Mango', 'Pineapple']);
  } else {
    console.log("You are in the vegetables section.");
    totalBill += await buyItems(['Carrot', 'Potato', 'Broccoli', 'Cabbage', 'Onion', 'Garlic']);
  }

  console.log(`Your total bill is $${totalBill.toFixed(2)}`);

  // Check for discounts
  const discountedTotal = applyDiscount(totalBill);

  // Checkout process
  await checkoutProcess(discountedTotal);
}

// Function to simulate buying items (fruits or vegetables)
async function buyItems(items: string[]): Promise<number> {
  const answer = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'choices',
      message: `Which items would you like to buy?`,
      choices: items,
    },
  ]);

  let itemsTotal = 0;
  answer.choices.forEach((choice: string) => {
    const itemPrice = getItemPrice(choice);
    if (itemPrice > 0) {
      console.log(`You added ${choice} to your cart. Price: $${itemPrice.toFixed(2)}`);
      itemsTotal += itemPrice;
    } else {
      console.log(`Invalid choice: ${choice}. No item added to the bill.`);
    }
  });

  return itemsTotal;
}

// Function to get the price of an item
function getItemPrice(item: string): number {
  const prices: Record<string, number> = {
    'Apple': 1.5,
    'Banana': 0.75,
    'Orange': 2.0,
    'Kiwi': 1.8,
    'Mango': 2.5,
    'Pineapple': 3.0,
    'Carrot': 1.0,
    'Potato': 0.5,
    'Broccoli': 1.75,
    'Cabbage': 1.2,
    'Onion': 0.9,
    'Garlic': 1.3,
  };

  return prices[item] || 0;
}

// Function to apply discounts based on the total bill amount
function applyDiscount(totalBill: number): number {
  let discountedTotal: number;

  if (totalBill >= 5) {
    discountedTotal = totalBill * 0.9; // 10% discount for bills $5 and above
    console.log(`Congratulations! You've got a 10% discount. Your discounted total is $${discountedTotal.toFixed(2)}`);
  } else {
    console.log("No discount applied. Thank you for shopping!");
    discountedTotal = totalBill;
  }

  return discountedTotal;
}

// Function to simulate the checkout process
async function checkoutProcess(totalAmount: number): Promise<void> {
  console.log("Let's proceed to checkout.");

  const paymentMethods = ['Credit Card', 'Debit Card', 'Cash'];
  let selectedPaymentMethod: string | null = null;

  while (!selectedPaymentMethod) {
    const paymentAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'paymentMethod',
        message: 'Choose a payment method:',
        choices: paymentMethods,
      },
    ]);

    selectedPaymentMethod = paymentAnswer.paymentMethod;
  }

  console.log(`You've selected ${selectedPaymentMethod} as your payment method.`);
  console.log(`Thank you for your purchase of $${totalAmount.toFixed(2)}. Have a great day!`);
}


buyGroceries();
