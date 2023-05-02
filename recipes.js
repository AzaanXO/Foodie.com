const recipes = {
    0: {
        title: "Chicken curry",
        img: "img4.jpg",
        ingredients: "<li>500g of chicken, cut into pieces</li><li>2 tablespoons of olive oil</li><li>1 onion, minced</li><li>2 cloves of garlic, minced</li><li>2 tablespoons of curry powder</li><li>1 tablespoon of tomato paste</li><li>400 ml of coconut milk</li><li>Salt and pepper to taste</li>",
        preparation: "<li>In a pan, heat the olive oil and sauté the onion and garlic for a few minutes until slightly browned.</li><li> Add the chicken pieces and sauté until browned on all sides.</li><li>Add the curry powder and tomato paste and mix well.</li><li> Pour in the coconut milk and let simmer for 15 to 20 minutes until the sauce thickens and the chicken is cooked through.</li><li> Season with salt and pepper to taste.</li>",
        nutri: "Calories: 462; Protein: 38g; Fat: 32g; Saturated fat: 18g; Carbohydrates: 9g; Fiber: 2g; Sugar: 4g; Sodium: 477mg",
        reviews: [["John","The food was fantastic!"]]
    },
    1: {
        title: "Salted Salmon",
        img: "img8.jpg",
        ingredients: "<li>4 salmon fillets</li><li>2 tablespoons of kosher salt</li><li>1 tablespoon of sugar</li><li>1 tablespoon of black pepper</li><li>1 tablespoon of olive oil</li><li>Lemon wedges, for serving</li>",
        preparation: "<li>Combine the kosher salt, sugar, and black pepper in a small bowl.</li><li>Place the salmon fillets in a shallow dish and sprinkle the salt mixture over them, making sure they are completely coated.</li><li>Cover the dish with plastic wrap and refrigerate for at least 1 hour or up to 24 hours.</li><li>When ready to cook, preheat the oven to 425°F (218°C).</li><li>Remove the salmon from the dish and rinse under cold water to remove the excess salt mixture.</li><li>Pat the salmon dry with paper towels and brush with olive oil.</li><li>Place the salmon fillets on a baking sheet lined with parchment paper and bake for 12 to 15 minutes, or until the fish is cooked through and flakes easily with a fork.</li><li>Serve with lemon wedges.</li>",
        nutri: "Calories: 328; Protein: 34g; Fat: 20g; Saturated fat: 4g; Carbohydrates: 1g; Fiber: 0g; Sugar: 1g; Sodium: 3620mg",
        reviews: [["Emily","Great service and atmosphere."]]
    },
    2: {
        title: "Spaghetti bolognaise",
        img: "img3.jpg",
        ingredients: "<li>400g spaghetti</li><li>400g minced beef</li><li>2 tablespoons of olive oil</li><li>1 onion, chopped</li><li>2 cloves of garlic, minced</li><li>1 can of chopped tomatoes</li><li>1 teaspoon of sugar</li><li>1 teaspoon of dried basil</li><li>Salt and pepper to taste</li>",
        preparation: "<li>Cook the spaghetti in a large pot of boiling salted water according to package instructions.</li><li> In a separate pan, heat the olive oil and sauté the onion and garlic for a few minutes until slightly browned.</li><li> Add the minced beef and sauté until browned on all sides.</li><li> Add the chopped tomatoes, sugar, dried basil, salt and pepper, and simmer for 20-30 minutes until the sauce has thickened.</li><li> Serve the spaghetti with the bolognaise sauce on top.</li>",
        nutri: "Calories: 532; Protein: 29g; Fat: 13g; Saturated fat: 4g; Carbohydrates: 75g; Fiber: 6g; Sugar: 8g; Sodium: 578mg",
        reviews: [["Jack","Delicious meal, highly recommended."]]
    },
    3: {
        title: "Fish and chips",
        img: "img1.jpg",
        ingredients: "<li>500g potatoes, cut into chips</li><li>500g white fish fillets</li><li>1 cup of flour</li><li>1 teaspoon of baking powder</li><li>1 cup of beer</li><li>Salt and pepper to taste</li>",
        preparation: "<li>Preheat the oven to 200°C (400°F) and place the chips on a baking tray. Drizzle with olive oil and season with salt and pepper.</li><li> Bake the chips for 30-35 minutes until crispy and golden.</li><li> In a separate bowl, mix the flour, baking powder, salt and pepper together. Gradually add the beer to form a smooth batter.</li><li> Dip the fish fillets into the batter and deep-fry in hot oil until golden brown and cooked through.</li><li> Serve the fish and chips hot with a side of ketchup or tartar sauce.</li>",
        nutri: "Calories: 642; Protein: 39g; Fat: 19g; Saturated fat: 3g; Carbohydrates: 74g; Fiber: 8g; Sugar: 2g; Sodium: 804mg",
        reviews: [["Sarah","Everything tasted amazing!"]]
    },
    4: {
        title: "Pesto pasta",
        img: "img7.jpg",
        ingredients: "<li>400g pasta (penne or fusilli)</li><li>2 cups of fresh basil leaves</li><li>1/2 cup of pine nuts</li><li>2 cloves of garlic, minced</li><li>1/2 cup of grated parmesan cheese</li><li>1/2 cup of olive oil</li><li>Salt and pepper to taste</li>",
        preparation: "<li>Cook the pasta in a large pot of boiling salted water according to package instructions.</li><li> In a food processor, blend the basil leaves, pine nuts, garlic, parmesan cheese, olive oil, salt and pepper until smooth.</li><li> Drain the cooked pasta and toss with the pesto sauce until well cooked.",
        nutri: "Calories: 432; Protein: 23g; Fat: 10g; Saturated fat: 3g; Carbohydrates: 55g; Fiber: 4g; Sugar: 6g; Sodium: 478mg",
        reviews: [["Michael","Top-notch dining experience."]]
    },
    5: {
        title: "Spaghetti Carbonara",
        img: "img9.jpg",
        ingredients: "<li>400g of spaghetti</li><li>200g of bacon, diced</li><li>4 egg yolks</li><li>1/2 cup of grated Parmesan cheese</li><li>1/2 cup of grated Pecorino Romano cheese</li><li>2 cloves of garlic, minced</li><li>Salt and pepper to taste</li>",
        preparation: "<li>Cook the spaghetti in boiling salted water according to package directions until al dente.</li><li> While the pasta is cooking, sauté the bacon in a large pan over medium heat until crispy.</li><li> In a bowl, whisk together the egg yolks, Parmesan cheese, and Pecorino Romano cheese until well combined.</li><li> When the pasta is cooked, reserve 1 cup of the pasta cooking water, then drain the spaghetti and add it to the pan with the bacon.</li><li> Add the garlic to the pan and sauté for a minute until fragrant.</li><li> Remove the pan from the heat and quickly stir in the egg and cheese mixture, adding reserved pasta water as needed to create a creamy sauce.</li><li> Season with salt and pepper to taste.</li>",
        nutri: "Calories: 750; Protein: 39g; Fat: 31g; Saturated fat: 12g; Carbohydrates: 77g; Fiber: 4g; Sugar: 3g; Sodium: 830mg",
        reviews: [["Ashley","A truly enjoyable dining experience."]]
    },
    6: {
        title: "Tiramisu",
        img: "img5.png",
        ingredients: "<li>500g of mascarpone cheese</li><li>3 eggs, separated</li><li>1/2 cup of sugar</li><li>1/2 cup of heavy cream</li><li>1 cup of strong espresso, cooled</li><li>1/4 cup of amaretto liqueur (optional)</li><li>24 ladyfingers</li><li>Cocoa powder, for dusting</li>",
        preparation: "<li>In a large bowl, beat the egg yolks and sugar together until pale and creamy.</li><li> Add the mascarpone cheese to the bowl and beat until smooth.</li><li> In another bowl, beat the egg whites until stiff peaks form.</li><li> In a third bowl, whip the heavy cream until soft peaks form.</li><li> Gently fold the egg whites into the mascarpone mixture, then fold in the whipped cream.</li><li> In a shallow dish, combine the cooled espresso and amaretto liqueur (if using).</li><li> Dip the ladyfingers into the espresso mixture, then layer them in the bottom of a 9x13 inch baking dish.</li><li> Spread half of the mascarpone mixture over the ladyfingers, then repeat with another layer of espresso-soaked ladyfingers and mascarpone mixture.</li><li> Cover and chill the tiramisu in the refrigerator for at least 2 hours or overnight.</li><li> Dust the top of the tiramisu with cocoa powder before serving.</li>",
        nutri: "Calories: 435; Protein: 29g; Fat: 13g; Saturated fat: 4g; Carbohydrates: 75g; Fiber: 6g; Sugar: 8g; Sodium: 578mg",
        reviews: [["David","Phenomenal flavors and presentation."]]
    },
    7: {
        title: "Beef stir-fry",
        img: "img2.jpg",
        ingredients: "<li>400g of beef, thinly sliced</li><li>2 tablespoons of vegetable oil</li><li>1 red pepper, sliced</li><li>1 green pepper, sliced</li><li>1 onion, sliced</li><li>2 cloves of garlic, minced</li><li>2 tablespoons of soy sauce</li><li>1 tablespoon of honey</li><li>Salt and pepper to taste</li>",
        preparation: "<li>In a wok or large pan, heat the vegetable oil over high heat.</li><li> Add the beef and stir-fry for 2-3 minutes until browned.</li><li> Add the peppers, onion, and garlic and stir-fry for another 2-3 minutes until vegetables are slightly softened.</li><li> In a small bowl, mix together the soy sauce and honey and add to the pan. Stir-fry for another 1-2 minutes until the sauce has thickened and everything is well coated.</li><li> Season with salt and pepper to taste.</li>",
        nutri: "Calories: 387; Protein: 28g; Fat: 22g; Saturated fat: 6g; Carbohydrates: 18g; Fiber: 3g; Sugar: 12g; Sodium: 801mg",
        reviews: [["Olivia","Wonderful selection and quality."]]
    },
    8: {
        title: "Roasted salmon with vegetables",
        img: "img6.jpg",
        ingredients: "<li>4 salmon fillets</li><li>1 zucchini, sliced</li><li>1 red pepper, sliced</li><li>1 yellow pepper, sliced</li><li>1 red onion, sliced</li><li>3 tablespoons of olive oil</li><li>1 tablespoon of honey</li><li>2 tablespoons of whole-grain mustard</li><li>1 tablespoon of dried rosemary</li><li>Salt and pepper to taste</li>",
        preparation: "<li>Preheat the oven to 200°C (400°F).</li><li> Place the salmon fillets in a large baking dish.</li><li> In a bowl, mix together the sliced vegetables, olive oil, honey, whole-grain mustard, and dried rosemary.</li><li> Season with salt and pepper to taste.</li><li> Pour the vegetable mixture over the salmon fillets and toss to coat.</li><li> Bake for 20 to 25 minutes, or until the salmon is cooked through and the vegetables are tender.</li>",
        nutri: "Calories: 367; Protein: 32g; Fat: 21g; Saturated fat: 3g; Carbohydrates: 13g; Fiber: 3g; Sugar: 9g; Sodium: 456mg",
        reviews: [["Ethan","Mouth-watering dishes, loved it!"]]
    },
    9: {
        title: "Chicken nuggets",
        img: "img10.jpg",
        ingredients: "<li>500g of boneless, skinless chicken breasts, cut into small pieces</li><li>1/2 cup of all-purpose flour</li><li>1 teaspoon of paprika</li><li>1 teaspoon of garlic powder</li><li>1 teaspoon of onion powder</li><li>1/2 teaspoon of salt</li><li>1/4 teaspoon of black pepper</li><li>2 eggs, beaten</li><li>2 cups of panko breadcrumbs</li><li>Oil for frying</li>",
        preparation: "<li>In a bowl, mix together the flour, paprika, garlic powder, onion powder, salt, and black pepper.</li><li> In another bowl, beat the eggs.</li><li> In a third bowl, place the panko breadcrumbs.</li><li> Dip the chicken pieces into the flour mixture, then into the beaten eggs, and finally into the panko breadcrumbs, making sure to coat each piece evenly.</li><li> Heat oil in a large frying pan over medium-high heat.</li><li> Fry the chicken nuggets for 2 to 3 minutes on each side, or until golden brown and cooked through.</li><li> Remove the chicken nuggets from the pan and place them on a paper towel to drain any excess oil.</li>",
        nutri: "Calories: 418; Protein: 38g; Fat: 17g; Saturated fat: 4g; Carbohydrates: 28g; Fiber: 1g; Sugar: 1g; Sodium: 523mg",
        reviews: [["Ava","Excellent food and friendly staff."]]
    }
}

for (i = 0; i < Object.keys(recipes).length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-recipe-number", i);
    card.setAttribute("data-recipe-name", Object.values(recipes)[i]["title"].toLowerCase());
    card.innerHTML = `<img src="./media/${Object.values(recipes)[i]["img"]}" alt="Recipe image" loading="eager"><h3>${Object.values(recipes)[i]["title"]}</h3><p>${Object.values(recipes)[i]["nutri"]}</p><button class="detailsButton">Click here for details</button>`;
    document.getElementById("recipeList").appendChild(card);
}