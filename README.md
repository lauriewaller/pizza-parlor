# Pizza Parlor

#### A website for a user to order a custom pizza

#### By **Laurie Waller**

## Technologies Used

* CSS
* HTML
* JavaScript
* jQuery

## Description

This website helps a user order a pizza, with options to choose the pizza toppings and size. The site then calculates the pizza cost for the user. 

## Setup/Installation Requirements

  1. Go to the main page of the repository (https://github.com/lauriewaller/pizza-parlor)
  2. In the top righthand corner of the list of files, click the Code dropdown menu.
  3. Click on the clipboard icon to copy the URL to the GitHub repo.
  4. On your computer, open Terminal and navigate to the parent folder where you plan to clone the repo folder.
  5. Type in `git clone` and then paste the URL you copied:
      `git clone https://github.com/lauriewaller/pizza-parlor`. Press Enter.
  6. One great application to open your files in is Visual Studio Code. To download VS Code, go to https://code.visualstudio.com/ and click on Download in the top righthand corner. From there, choose the donwload type necessary from your computer and follow the prompts.
  7. After you have completed the download, return to Terminal. Navigate to the pizza-parlor directory, type `code .` and press Enter. This will open all files in VS Code for you.

## Tests 

**Describe: addCost()**

Test: "It should add the cost of the toppings the user chooses. If "pepperoni" = 2 and "sausage" = 2:"
Expect: (addCost("pepperoni," "sausage").toEqual(4));

Test: "It should add the cost of the pizza size and the user toppings the user chooses. If "pepperoni" = 2, "sausage" = 2, and "small" = 10:"
Expect: (addCost("pepperoni," "sausage," "small").toEqual(14));

## Known Bugs

* No known bugs at this time.

## License

MIT

Copyright (c) 2021 by Laurie Waller

## Contact Information

_Laurie Waller (lauriewaller7@gmail.com)_
