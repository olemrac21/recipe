import Card from './component/comp.jsx'
import './App.css'

function App() {
 

  return (
    <>
      <div className='card-main-container'>
      <div className='card-container'>
        <Card
          image = '/images/img-adobo.jpg'
          title = 'Adobo'
          body ='Adobo is a classic Filipino dish featuring tender meat marinated in vinegar, soy sauce, garlic, and spices, then simmered until rich and flavorful.'
        />
        <div className='card-preparation-time'>
        <span>Preparation Time: <strong className='card-time'>10 minutes (plus marinating time)</strong></span>
        <span>Cooking Time:<strong className='card-time'>1 hour</strong></span>
        <span>Servings:<strong className='card-time'>4</strong></span>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        <li>1 kg (2.2 lbs) chicken or pork, cut into serving pieces</li>
        <li>1/2 cup soy sauce</li>
        <li>1/2 cup vinegar</li>
        <li>6 cloves garlic, minced</li>
        <li>1 teaspoon whole peppercorns</li>
        <li>2 bay leaves</li>
        <li>1 tablespoon cooking oil</li>
        <li>1 cup water</li>
      </ul>
      <hr />
      <h3>Step by Step Instructions:</h3>
      <ul>
          <li>In a bowl, combine the soy sauce, vinegar, minced garlic, peppercorns, and bay leaves.</li>
          <li>Add the chicken or pork pieces to the marinade, ensuring they are fully coated. Marinate in the refrigerator for at least 30 minutes, preferably overnight for best flavor.</li>
          <li>Heat oil in a large pan over medium heat. Remove the meat from the marinade and brown on all sides.</li>
          <li>Pour in the marinade mixture and water. Bring to a boil, then reduce the heat to low and simmer, covered, for about 45 minutes to 1 hour or until the meat is tender and the sauce has thickened.</li>
          <li>Serve hot with steamed rice.</li>
      </ul>
      <hr />
      <h3>Nutrition Facts: (Per Serving)</h3>
      <ul className='card-nutri'>
        <li>Calories:
          <p>350</p></li>
          <li>Protein:
          <p>25g</p></li>
          <li>Fat:
          <p>20g</p></li>
          <li>Carbohydrates:
          <p>15g</p></li>
      </ul>
      </div>

      {/* pansit start */}
      <div className='card-container'>
        <Card
          image = '/images/img-kare-kare.jpg'
          title = 'Kare - Kare'
          body ='Kare Kare is a traditional Filipino stew complimented with a thick savory peanut sauce. The commonly used meats for this dish are ox tail, tripe, and pork leg; on some occasions goat and chicken meat are also used. Besides the peanuts.'
        />
        <div className='card-preparation-time'>
        <span>Preparation Time: <strong className='card-time'>10 minutes </strong></span>
        <span>Cooking Time:<strong className='card-time'>2 hour and 30 mins</strong></span>
        <span>Servings:<strong className='card-time'>4</strong></span>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        <li>3 lbs oxtail cut in 2 inch slices you an also use tripe or beef slices</li>
        <li>1 piece small banana flower bud sliced</li>
        <li>1 bundle pechay or bok choy</li>
        <li>1 bundle string beans cut into 2 inch slices</li>
        <li>4 pieces eggplants sliced</li>
        <li>1 cup ground peanuts</li>
        <li>1/2 cup peanut butter</li>
        <li>1/2 cup shrimp paste</li>
        <li>34 Ounces water about 1 Liter</li>
        <li>1/2 cup annatto seeds soaked in a cup of water</li>
        <li>1/2 cup toasted ground rice</li>
        <li>1 tbsp garlic minced</li>
        <li>1 piece onion chopped</li>
        <li>salt and pepper</li>
      </ul>
      <hr />
      <h3>Step by Step Instructions:</h3>
      <ul>
          <li>In a large pot, bring the water to a boil.</li>
          <li>Put in the oxtail followed by the onions and simmer for 2.5 to 3 hrs or until tender (35 minutes if using a pressure cooker).</li>
          <li>Once the meat is tender, add the ground peanuts, peanut butter, and coloring (water from the annatto seed mixture) and simmer for 5 to 7 minutes.</li>
          <li>On a separate pan, saute the garlic then add the banana flower, eggplant, and string beans and cook for 5 minutes.</li>
          <li>Transfer the cooked vegetables to the large pot (where the rest of the ingredients are).</li>
          <li>Add salt and pepper to taste.</li>
          <li>Serve hot with shrimp paste. Enjoy!.</li>
      </ul>
      <hr />
      <h3>Nutrition Information</h3>
      <ul className='card-nutri'>
        <li>Calories:
          <p>6g Calories: 934kcal</p></li>
          <li>Protein:
          <p>91g</p></li>
          <li>Fat:
          <p>53g</p></li>
          <li>Carbohydrates:
          <p>24g</p></li>
      </ul>
      </div>
        {/* pansit end */}
{/* lechon start */}
<div className='card-container'>
        <Card
          image = '/images/img-lechon.jpg'
          title = 'Lechon'
          body ='Lechón comprises a whole pig spit-roasted over charcoal and flavored with oil and spices.'
        />
        <div className='card-preparation-time'>
        <span>Preparation Time: <strong className='card-time'>15 minutes </strong></span>
        <span>Cooking Time:<strong className='card-time'>3 hours</strong></span>
        <span>Servings:<strong className='card-time'>20</strong></span>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        <li>1 whole pig (20 kg) (44 lb)</li>
        <li>10-20 bundles of lemongrass</li>
        <li>15 bay leaves</li>
        <li>1 kg (2.2 lb) garlic</li>
        <li>1 kg (2.2 lb) onion</li>
        <li>2-3 cups (550-820g) salt and pepper</li>
        <li>GLAZE</li>
        <li>evaporated milk</li>
      </ul>
      <hr />
      <h3>Step by Step Instructions:</h3>
      <ul>
          <li>Take a pig whose entrails have been removed and wash its inside with boiling water. Leave to drain.</li>
          <li>Rub the mixture of salt and pepper on the pig’s skin and its inside..</li>
          <li>Skewer a pig on a long bamboo stick.</li>
          <li>Prepare the stuffing by pounding together lemon grass and spring onions, and mixing them with bay leaves, garlic, and onion. Stuff the pig and sew its belly with a kitchen thread.</li>
          <li>To make the skin red and crispy, brush it with evaporated milk..</li>
          <li>Roast the pig for 4 to 5 hours over hot charcoal, until the meat is tender. Occasionally, glaze the skin with the remaining evaporated milk.</li>
        </ul>
      <hr />
      <h3>Nutrition Information</h3>
      <ul className='card-nutri'>
        <li>Calories:
          <p>242g</p></li>
          <li>Protein:
          <p>27g</p></li>
          <li>Fat:
          <p>14g</p></li>
          <li>Carbohydrates:
          <p>0g</p></li>
      </ul>
      </div>
        {/* lechon end */}
  {/*pansit start */}
<div className='card-container'>
        <Card
          image = '/images/img-pansit.jpg'
          title = 'Pansit Guisado'
          body ='Pancit Guisado is a Filipino noodle dish. It is also known as Pancit Bihon Gisado. This dish is composed of rice noodles, shredded chicken, shrimp, and vegetables.'
        />
        <div className='card-preparation-time'>
        <span>Preparation Time: <strong className='card-time'>10 minutes </strong></span>
        <span>Cooking Time:<strong className='card-time'>12 minutes</strong></span>
        <span>Servings:<strong className='card-time'>2</strong></span>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        <li>1/2 lb pancit bihon</li>
        <li>1 piece Knorr Shrimp Cube</li>
        <li>1/2 lb. chicken thigh boiled and shredded</li>
        <li>3/4 cup carrot julienne</li>
        <li>3 pieces stalks celery chopped</li>
        <li>3/4 cup sliced long green beans</li>
        <li>1 piece onion sliced into thin pieces</li>
        <li>5 cloves garlic crushed</li>
        <li>1/2 cup chopped parsley</li>
        <li>1/4 teaspoon ground black pepper</li>
        <li>4 tablespoons cooking oil</li>
        <li>4 cups waterl</li>
      </ul>
      <hr />
      <h3>Step by Step Instructions:</h3>
      <ul>
          <li>Soak pancit bihon in water for 8 to 10 minutes. Drain water and set noodles aside..</li>
          <li>Heat oil in a pot. Pan-fry shrimp for 1 minute per side. Remove and set aside.</li>
          <li>Saute onion and garlic using remaining cooking oil. Add Chinese sausage. Cook for 1 minute.</li>
          <li>Add shredded chicken and celery. Cook for 1 to 2 minutes.</li>
          <li>Add Knorr Shrimp Cube. Crush the cube and continue to saute for 30 seconds.</li>
          <li>Pour-in soy sauce. Add parsley, carrot, green beans, and cabbage. Stir. Cover and cook for 3 minutes using medium heat.</li>
          <li>Add pancit. Toss ingredients using a kitchen tong.</li>
          <li>Season with ground black pepper and add the shrimp back. Toss until well blended. Cover the pot and continue to cook for 2 to 5 minutes between low to medium heat.</li>
          <li>Transfer to a serving plate. Serve. Share and enjoy!</li>
        </ul>
      <hr />
      <h3>Nutrition Information</h3>
      <ul className='card-nutri'>
        <li>Calories:
          <p>193kcal (10%) </p></li>
          <li>Protein:
          <p>8g (16%)</p></li>
          <li>Fat:
          <p>15g (23%)</p></li>
          <li>Carbohydrates:
          <p>5g (2%)</p></li>
          <li>Sodium:
          <p>898mg (37%)</p></li>
          <li>Potassium:
          <p>197mg (6%)</p></li>
      </ul>
      </div>
        {/* pansit end */}
         {/*sinigang start */}
<div className='card-container'>
        <Card
          image = '/images/img-sinigang.jpg'
          title = 'Sinigang na Baboy'
          body ='Sinigang na baboy with Gabi is a Filipino pork soup with taro cooked in a sour broth. Sinigang is my comfort food, and one of the first few dishes that I tried to make way back when I was starting to learn how to cook..'
        />
        <div className='card-preparation-time'>
        <span>Preparation Time: <strong className='card-time'>10 minutes </strong></span>
        <span>Cooking Time:<strong className='card-time'>1 hour and 30 minutes</strong></span>
        <span>Servings:<strong className='card-time'>5</strong></span>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        <li>2 lbs. pork belly sliced into cubes</li>
        <li>2 to 3 cups kangkong leaves</li>
        <li>3 pieces long green chili pepper siling pansigang</li>
        <li>2 pieces tomato quartered</li>
        <li>1 cup sliced daikon radish labanos</li>
        <li>10 to 12 pieces snake beans cut in 2 inch length pieces</li>
        <li>1 piece onion quartered</li>
        <li>15 pieces okra</li>
        <li>2 pieces taro peeled and cut in half (gabi)</li>
        <li>8 cups water</li>
        <li>2 packs Knorr Sinigang sa Sampaloc Mix Original (20 gram pack)</li>
        <li>3 tablespoons fish sauce patis</li>
      </ul>
      <hr />
      <h3>Step by Step Instructions:</h3>
      <ul>
          <li>Pour water into a cooking pot. Let boil.</li>
          <li>Add onion and tomato. Boil for 5 to 8 minutes..</li>
          <li>Put the pork in the cooking pot. Boil for 25 minutes..</li>
          <li>Add the taro. Cover and continue to boil for 30 minutes.</li>
          <li>Add Knorr Shrimp Cube. Crush the cube and continue to saute for 30 seconds.</li>
          <li>Add Knorr Sinigang sa Sampaloc mix, fish sauce, and ground black pepper; stir.</li>
          <li>Add the chili peppers, okra, and snake beans. Cook for 7 minutes.</li>
          <li>Transfer to as serving bowl. Serve with a small bowl with patis and spicy chili.</li>
          <li>Share and enjoy!</li>
        </ul>
      <hr />
      <h3>Nutrition Information</h3>
      <ul className='card-nutri'>
        <li>Calories:
          <p>799kcal (40%) </p></li>
          <li>Protein:
          <p>15g (30%)</p></li>
          <li>Fat:
          <p>80g (123%)</p></li>
          <li>Carbohydrates:
          <p>3g (1%)</p></li>
          <li>Sodium:
          <p>856mg (36%)</p></li>
          <li>Potassium:
          <p>383mg (11%)</p></li>
      </ul>
      </div>
        {/* pansit end */}
    </div>
    </>
  )
}

export default App
