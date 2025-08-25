import CategoryImg1 from '../assets/frozen-fruits.jpg'
import CategoryImg2 from '../assets/vegitables.jpg'
import CategoryImg3 from '../assets/basmati.jpg'
import CategoryImg4 from '../assets/nonbasmati.jpg'
import CategoryImg5 from '../assets/jaggery.jpeg'

//Fresh Fruits & Vegetables Images
import FreshOnionImg1 from '../assets/products/freshFruits/onion1.jpg'
import FreshOnionImg2 from '../assets/products/freshFruits/onion2.jpg'
import FreshOnionImg3 from '../assets/products/freshFruits/onion3.jpg'
import FreshOnionImg4 from '../assets/products/freshFruits/onion4.jpg'
import FreshOnionImg5 from '../assets/products/freshFruits/onion5.jpg'
import FreshPomoImg1 from '../assets/products/freshFruits/pomo1.jpg'
import FreshPomoImg2 from '../assets/products/freshFruits/pomo2.jpg'
import FreshPomoImg3 from '../assets/products/freshFruits/pomo3.jpg'
import FreshBananaImg1 from '../assets/products/freshFruits/banana1.jpg'
import FreshBananaImg2 from '../assets/products/freshFruits/banana2.jpg'
import FreshBananaImg3 from '../assets/products/freshFruits/banana3.jpg'
import FreshChiliImg1 from '../assets/products/freshFruits/chili1.jpg'
import FreshChiliImg2 from '../assets/products/freshFruits/chili2.jpg'
import FreshChiliImg3 from '../assets/products/freshFruits/chili3.jpg'
import FreshChiliImg4 from '../assets/products/freshFruits/chili4.jpeg'
import FreshDrumsticksImg1 from '../assets/products/freshFruits/drum1.jpg'
import FreshDrumsticksImg2 from '../assets/products/freshFruits/drum2.jpeg'
import FreshDrumsticksImg3 from '../assets/products/freshFruits/drum3.jpg'
import FreshDrumsticksImg4 from '../assets/products/freshFruits/drum4.jpeg'

//Frozen Fruits Images
import FrozenMangoImg from '../assets/products/frozenFruits/frozen-mango.jpg'
import FrozenStrawberryImg1 from '../assets/products/frozenFruits/straw1.jpg'
import FrozenStrawberryImg2 from '../assets/products/frozenFruits/straw2.jpg'
import FrozenStrawberryImg3 from '../assets/products/frozenFruits/straw3.jpg'
import FrozenStrawberryImg4 from '../assets/products/frozenFruits/straw4.jpg'
import FrozenCustardImg1 from '../assets/products/frozenFruits/custard1.jpg'
import FrozenCustardImg2 from '../assets/products/frozenFruits/custard2.jpg'

//Basmati Rice Images
import BasmatiPusaImg from '../assets/products/basmatiRice/pusa.jpg'
import Basmati1121Img from '../assets/products/basmatiRice/1121.jpg'
import BasmatiGoldenImg from '../assets/products/basmatiRice/golden.jpg'
import BasmatiSugandhaImg from '../assets/products/basmatiRice/sugandha.jpg'
import BasmatiSharbatiImg from '../assets/products/basmatiRice/sharbati.jpg'

//Non Basmati Rice Images
import BasmatiSonamasoriImg from '../assets/products/nonBasmatiRice/sonamasori.jpg'
import BasmatiBrokenImg from '../assets/products/nonBasmatiRice/broken.jpg'

// Jaggery Images
import JaggeryImg from '../assets/products/jaggery/jaggery.jpg'

export const Category = [
  {
    id: 1,
    name: "Fresh Fruits & Vegetables",
    image: CategoryImg2
  },
  {
    id: 2,
    name: "Frozen Fruits",
    image : CategoryImg1
  },
  {
    id: 3,
    name: "Basmati Rice",
    image: CategoryImg3
  },
  {
    id: 4,
    name: "Non Basmati Rice",
    image: CategoryImg4
  },
  {
    id: 5,
    name: "Jaggery",
    image: CategoryImg5
  }
];

export const Products = [

  // ===================== Fresh Fruits & Vegetables ========================

  {
    id: 101,
    name: "Fresh Onion",
    slug: "fresh-onion",
    feature: "There are major varieties in onions example agri found,dark red,light red,Pusa white,garva there are certain varieties of yellow onion that are suitable for export in European countries, Maharashtra ranks first in onion production with the share of 42.53% the grade designation and quality development parameters have also been set up for the identifying quality Onions. Packing size Holy depends on the importing buyer and country requirement generally Sri Lanka 25 kg Malaysian Indonesia 10 kg Singapore 8 kg in Gulf countries 5 kg to 20 kg different sizes of onions required by different countries like the Middle East and Gulf 40 to 60 mm Malaysia Singapore African part Sri Lanka size in 25 to 30 mm onion consumption has also been reported to have anti-proliferative,effective in cancer and helps to improve metabolism. ",
    descTitle: "Prevention and Damage Control of Fresh Onions.",
    description: [
      "Handling- onions should not be dropped onto a non-resilient surface from more than 6 feet height if onions are in which state after packing in the Store or drugs the better height is 2 to 2.5 m",
      "Storage- Sprouting in onion is controlled by temperature weight loss is higher when the temperature is about 35 degrees onions are stored at the temperature of 32 35 degrees Celsius in cold storage temperature is maintained at 0.2 degrees Celsius while the RH is kept at 60-75% in India the onions are bulk stored in special houses.",
      "Packing- for safe handling onions are packed in mash bags according to the market demand commonly big onions are packed in 5 to 25 kg mesh bags and jute bags.",
      "Curing- onions are considered cured when the neck is tight and the outer scales are dried until they rustle during is the major post-harvest operation.",
      "Grading- onions after processing are graded manually before they are marketed sorting and grinding after the storage is done yield better prices onions are categorized based on their size.",
    ],
    images: [
      FreshOnionImg1,
      FreshOnionImg2,
      FreshOnionImg3,
      FreshOnionImg4,
      FreshOnionImg5,
    ],
    categoryId: 1,
    categoryName: "Fresh Fruits & Vegetables"
  },
  {
    id: 102,
    name: "Fresh Pomegranates",
    slug: "fresh-pomegranates",
    feature: "Pomegranate is globally recognised as a superfood owning to its nutritional characteristics pomegranates are also used in many other varieties such as pomegranate juice,pomegranate Jelly, pomegranate seed oil.It is also used in Ayurvedic medicine as digestive and stomactic.Pomegranate prevent the harding of the artery walls with access fat,leaving your arteries fat free and plumping with antioxidant.Two separate study claim that pomegranate juicies helps fight prostate cancer in one lab experiment the juices slowed the growth of the cultured cancer cells and promote cell death.In second experiment pomegranate juice improve the condition of the blood and improving the health of individuals down with cardiovascular disease.Pomegranate can reduce the damage of cartilage is an excellent source of dietary fiber and health benefiting nutrition including VitaminC,vitaminA,and Folic acid.",
    descTitle: "Prevention and Damage Control of Fresh Pomegranate.     ",
    description: [
      "Irrigation-First irrigation is provided in the case of Mrig Bahar crops in the middle weekly irrigation in summer and that during at fortnight intervals in recommended.",
      "Drip Irrigation-The average annual water requirement through drip irrigation is 20 CM it helps to increase the yield by 30 to 35%.",
      "Traning-plants are trained on a single steam or in a multi-stem system.",
      "Intercropping-It is possible only during the rainy season.",
      "Grading-fruits are graded based on their weight size and color.",
      "Storage-It can be stored in cold storage up to 2 months at a temperature of 5 degrees Celsius longer storage should be at 10 degrees Celsius and 95% RH to avoid chilling injury and weight loss.",
      "Packing-The size of packages according to the grade of the fruits corrugated fiber board is mostly used the White colored boxes having five plies are generally used for export purple.",
    ],
    images: [
      FreshPomoImg1,
      FreshPomoImg2,
      FreshPomoImg3,
    ],
    categoryId: 1,
    categoryName: "Fresh Fruits & Vegetables"
  },
  {
    id: 103,
    name: "Fresh Banana",
    slug: "fresh-banana",
    feature: "India is the land of traditional bananas and these varieties play a vital role in the banana trade that the country also consume banana in greater quantity.Bananas are highly perishable good the banana itself a functional food as its reach of energy potassium and fiber mainly due to its potential nutritional value and number of derived product from its likewise there are many value-added innovation product of Banana which offer function benefits to consumers due to the consumers demand for the less oil absorbed deep dry chips banana chips with more than 25% reduction in oil.The banana stem can also be used to prepare pickle,juicies,dried powder with good sensorial acceptabiliy.The removal of tiny kidney stones & cleans the urinary tract & washout impurities.",
    descTitle: "Prevention and Damage Control Of Fresh Bananas",
    description: [
      "It is basically a tropical crop that grows well in a temperature range of 15 degrees to 35° with relative humidity of 75 to 85 percent",
      "Irrigation-. large quantity of water for increasing productivity. The water requirement of banana hai has been worked out to be 1800 to 2000 mm per annum in winter irrigation is provided at an interval of 7 to 8 days while in summer it should given at an interval of 4 to 5 days.",
      "Drip irrigation- drip system helps to maintain the proportion of soil and soil water which results in early and vigorous growth of branches.",
      "Water soluble fertilizer is applied Banana is harvested when slightly or fully manual depending on the market preference.",
      "Grading- is mainly based on size color and maturity of the fruit banana are exported in cold chain storage at 13 degrees Celsius Nitrogen is the key element for Rapid growth it requires monitoring Phosphorus is applied with nitrogen potassium stimulates early shooting and faster fruit maturation soil test is necessary and effective banana performance best in soil with the pH of 0.5 or above.",
    ],
    images: [
      FreshBananaImg1,
      FreshBananaImg2,
      FreshBananaImg3,
    ],
    categoryId: 1,
    categoryName: "Fresh Fruits & Vegetables"
  },
  {
    id: 104,
    name: "Fresh Green Chilli",
    slug: "fresh-green-chilli",
    feature: "Bhan origin of chillies is believed to be as old as 7000 BC Christopher Columbus who discovered America in 1493 broad chilly to the rest of the world top destinations for India green chillies include the UAE Qatar Saudi Arabia and the United Kingdom India proudly holds the title of Bean the world's leading exporter of green chilli and animal studies suggested that green chilli extract may be useful in treating stomach ulcers green chilli may 8 in reducing the accumulation of body fat they might boost the metabolism of fat green chilli is good antibacterial activity against the number of pathogenic bacterial including shikala Dyson Terry he should do bonus Arrow Geno Sa Wipro it is also used and antioxidant got health skin benefit diabetes increase haemoglobin healthy hair when release cold release in India we use multiple in Ayurvedic it has the nutritional value of vitamin D calcium iron potassium and some percentage of these vitamin indicates vitamin A vitamin B12 vitamin B2 vitamin B3.",
    descTitle: "Prevention and Damage Control Of Fresh Green Chilli",
    description: [
      "Prevention and damage control of fresh green chilli temperature to be maintained after being boxed free calling has a huge impact on self-life the precooling rooms are enormously massive for a long-lasting",
      "Grading- all Red Brown and broken Chilli will be removed and all of these broken Chilli will be discarded leaves or also removed.",
      "Sorting- live removal required Swift Breeze through the fan they strain chilli in front of the fan rid of any further dust.",
      "Prevention And Damage Control- green chilli's routes are where the majority of its problems are found the space between each plant is measured at 1.5 feet in a walking tunnel while it is maintained at one foot in an open tunnel green chilli grows quickly inside a tunnel or on a low wall which makes them more susceptible to following of during Storms or strong winds in open farming most of the farmers faces problems of plant been destroyed by wind.",
      "Irrigation- water only when the top layer of soil is dry the amount of water and how often you water depends on the soil type and climate watering is avoided it can cause the plant to shed flowers.",
      "Drip Irrigation- it can increase crop yield and reduce production costs.",
      "Sunlight- Chilli plants need direct sunlight to grow well and should be protected from wind Greenhouse or polytonal is ideal.",
    ],
    images: [
      FreshChiliImg1,
      FreshChiliImg2,
      FreshChiliImg3,
      FreshChiliImg4,
    ],
    categoryId: 1,
    categoryName: "Fresh Fruits & Vegetables"
  },
  {
    id: 105,
    name: "Fresh Drumsticks",
    slug: "fresh-drumsticks",
    feature: "Drumsticks is also known as moringa alifera drumstick render it's unique flavour to the dishes Morgan obtains its name from the Tamil word Murga India is the largest producer of drumsticks drumsticks is a fast-growing tree and widely cultivated for its tender seed pot nutritional value of drumsticks per 100 grams energy 64 calorie carbohydrates 8.28 gram dietary fibre 2.09 gram diamine B1.2 57 mg vitamin A 378 gram Vitamin B6 1.2 MG Trends the bone in growing children beneficial in treating condition like Arthritis and also hell minor bone fractures then the employment and antibacterial properties of drumstick assets in lesson the symptoms of asthma drumstick promotes secretion of digestive juice helps in the stomach functioning of digestive gut heal domestic improve the circulation of blood and nutrition to the heart does regulation hypertension the sticks in the diet may help in reducing the development of stones in the Kidney and bladder national Minerals and vitamins and fibres help to significantly bring down blood sugar drumsticks is valuable in shielding the liver against the damage and caused by ant tubercular drugs and speed up the healing process",
    descTitle: "Prevention and Damage Control of Fresh Drumsticks",
    description: [
      "Handling- it should not be dropped in moist areas and always kept in dried area.",
      "Irrigation- Drumstick plants do not need much watering the crop is quite Hardy and during the dry season requires irrigation once into week for commercial cultivation.",
      "Storage- kept only in an intact sealed container temperature is controlled in cold storage.",
    ],
    images: [
      FreshDrumsticksImg1,
      FreshDrumsticksImg2,
      FreshDrumsticksImg3,
      FreshDrumsticksImg4,
    ],
    categoryId: 1,
    categoryName: "Fresh Fruits & Vegetables"
  },

  // ===================== Frozen Fruits ========================
  {
    id: 201,
    name: "FROZEN MANGO",
    slug: "frozen-mango",
    feature: "MANGO(MANGIFERA INDICA)MEMBER OF CASHEW FAMILY(ANACARDIACASE)& ONE OF THE MOST IMPORTANT & WIDELY CULTIVATED FRUITS OF THE TROPICAL WORLD.MANGOES ARE RICH SOURCE OF VITAMIN A,C & D INDIA RANKS 1st AMONG WORLD'S MANGO PRODUCING COUNTRIES FOR ABOUT 50%OF THE WORLD'S MANGO PRODUCTION.MANGO IS A LOW-CALORIE FRUIT THAT IS HIGH IN FIBRE & A GREAT SOURCE OF VITAMIN E.MANGOES ARE GOOD SOURCE OF ANTIOXIDANTS CONTAINING CERTAIN PHYTOCHEMICALS SUCH AS GALLOTANNINS & MANGIFERIN WHICH HAVE BEEN STUDIED FOR THEIR HEALTH BENEFITS.CONSUMING MANGOES CAN HELP STRENGTHEN & PROTECT THE BODY & PROMOTES EYE HEALTH,PREVENT CANCER,CHOLESTROL LEVEL.MANGOES ORIGINATED IN INDIA OVER 4000 YEARS AGO,MANGOES SPREAD GRADUALLY THROUGHOUT ASIA & THEN THE REST OF THE WORLD.OVER 500 VARITIES OF MANGOES ARE FOUND IN INDIA,ALPHONSO,KESAR,BADAMI,AMRAPALI,TOTAPURI.",
    descTitle: "PREVENTION AND DAMAGE CONTROL OF FROZEN MANGOES",
    description: [
      "1.SORTING-REMOVING DEFECTIVE MANGOES ENSURING UNIFORM QUALITY OF END PRODUCTS.",
      "2.WASHING-THE FRUIT WASHING MACHINE WASHES & CKEAN THE SURFACE OF THE MANGO REMOVING FOREIGN MATTER SUCH AS LEAVES & RESIDUES.",
      "3.CUTTING-THE MANGOES ARE USUALLY IN THE FORM OF HALVES ACCORDING TO THE CUSTOMER NEEDS,THE MANGOES CAN BE FURTHER CUT INTO DICES,CHUNKS & SLICES.",
      "4.PRE-COOLING -BEFORE FREEZING THE CUT MANGOES ARE COOLED DOWN BY COOLER'S RETANINING THE APPEARANCE & TEXTURE OF THE MANGOES WHILE  SAVING ENERGY FOR THE FREEZING PROCESS.",
      "5.FREEZING-INDUSTRIAL IQF TUNNEL FREEZERS ARE USED TO QUICKLY FREEZE THE MANGOES WITH ADVANCE TECHNOLOGY & INNOVATIVE DESIGN.IQF FREEZING SYSTEMS CAN RAPIDLY FREEZE PREMIUM MANGOES.",
      "6.PACKING-IT IS IMPORTANT TO OBTAIN QUALITY BOXES,OTHERWISE THEY MAY COLLAPSE DURING TRANSPOTATION.",
    ],
    images: [
      FrozenMangoImg,
    ],
    categoryId: 2,
    categoryName: "Frozen Fruits"
  },
  {
    id: 202,
    name: "FROZEN STRAWBERRY",
    slug: "frozen-strawberry",
    feature: "STRAWBERRY(FRAGARAI X ANANASSA)IS A WIDELY GROWN HYBRID SPECIES OF THE GENUS FRAGARIA IN THE ROSE FAMILY.STRAWBERRY IS APPRECIATED FOR ITS AROMA,BRIGHT RED COLOUR,JUICY TEXTURE & SWEETNESS.TO ASSES THE NURITIONAL VALUE OF FRUIT PRODUCTS A SPECIAL ATTENTION IS PAID TO THE CONTENT OF BIO ANTIOXIDANTS-BIOLOGICALLY ACTIVE SUBSTANCES.THE QUALITY FRUIT IS GIVEN BY MICRONUTRIENS.ANTIOXIANTS PLAYS A PROTECTIVE ROLE IN PREVENTING CARDIOVASCULAR DISEASE,DIABETES,GASTROINTESTINAL DISEASE HAVE A POSOTIVE ROLE IN LIFETIME.",
    descTitle: "PREVENTION  AND DAMAGE CONTROLL OF FROZEN STRAWBERRY",
    description: [
      "1.FREEZING-STRAWBERRY MAY BE FROZEN WHOLE,SLICED,CRUSHED OR PUREED DEPENDING ON THEIR INTENTED USE IN RECIPIES.",
      "2.ROW COVERS-IT REDUCE EVAPORATIVE COOLING & THE RATE OF COOLING UNDER THE COVER.WHEN USING IRRIGATION & ROW COVERS TO PROTECT AGAINST FROST IRRIGATION & RAW COVERS WORK TOGETHER VERY EFFECTIVELY.",
    ],
    images: [
      FrozenStrawberryImg1,
      FrozenStrawberryImg2,
      FrozenStrawberryImg3,
      FrozenStrawberryImg4,
    ],
    categoryId: 2,
    categoryName: "Frozen Fruits"
  },
  {
    id: 203,
    name: "FROZEN CUSTARD APPLE",
    slug: "frozen-custard-apple",
    feature: "CUSTARD APPLE(ANNONA SQUAMOSAL) IS A DELICIOUS FRUIT.CUSTARD APPLE ARE RICH IN FLAVONOIDS WHICH MAY HELP TO TREAT TUMORS & CANCERS.THEY  ARE ALSO RICH IN CARBOHYDRATES,POTASSIUM & MAGNESIUM.IT IS CONSIDERED AS BENEFICAL FOR CARDIAC DISEASE,DIABETES,HYPERTENSION,HELPS IN DETOXIFIES THE BODY WITH HIGH FIBRE CONTENT & SUPPORT HEART HEALTH.THE HIGH POTASSIUM CONTENT IN CUSTARD APPLES HELPS MAINTAIN HEALTHY BOLLD PRESSURE & REGULATES HEART FUNCTION.CUSTARD APPLE IS AN EXCELLENT SOURCE OF VITAMIN C WHICH HELPS TO BOOST IMMUNITY AS WELL AS VITAMIN B6,WHICH SUPPORTS BRAIN HEALTH & METABOLISM.IT IS ALSO GOOD SOURCE OF DIETARY FIBRE WHICH AIDS DIGESTION PREVENTS CONSTIPATION & PROMOTE GUT HEALTH.",
    descTitle: "",
    description: [
      "",
    ],
    images: [
      FrozenCustardImg1,
      FrozenCustardImg2,
    ],
    categoryId: 2,
    categoryName: "Frozen Fruits"
  },

  // ===================== Basmati Rice ========================
  {
    id: 301,
    name: "PUSA BASMATI",
    slug: "pusa-basmati",
    feature: "PUSA BASMATI RICE IS A HYBRED AND SEMI-DWARF VARIEY OF BASMATI RICE THAT SHARES MANY OF THE SAME QUALITIES AS REGULAR BASMATI.PUSA BASMATI RICE CONTAIN 8 ESSENTIAL AMINO ACIDS,IT IS NON STICKY AFTER COOKING.",
    descTitle: "",
    description: [],
    images: [
      BasmatiPusaImg,
    ],
    categoryId: 3,
    categoryName: "Basmati Rice"
  },
  {
    id: 302,
    name: "1121 BASMATI RICE",
    slug: "1121-basmati-rice",
    feature: "1121 BASMATI RICE IS A HIGH QUALITY RICE KNOWN FOR IT'S LONG GRAINS & DISTINCTIVE AROMA.",
    descTitle: "",
    description: [],
    images: [
      Basmati1121Img,
    ],
    categoryId: 3,
    categoryName: "Basmati Rice"
  },
  {
    id: 303,
    name: "GOLDEN BASMATI RICE",
    slug: "golden-basmati-rice",
    feature: "GOLDEN BASMATI RICE IS A PARBOILED VERSION OF 1121 EXTRA LONG GRAIN BASMATI RICE BUT YELLOWISH COLOUR.THE YELLOW HUE COMES COMES FROM PERBOILING RICE WITH ITS NATURAL BROWN HUSK WHICH ID REMOVED AFTERWARDS.",
    descTitle: "",
    description: [],
    images: [
      BasmatiGoldenImg,
    ],
    categoryId: 3,
    categoryName: "Basmati Rice"
  },
  {
    id: 304,
    name: "SUGANDHA BASMATI RICE",
    slug: "sugandha-basmati-rice",
    feature: "THIS TYPE OF BASMATI RICE IN INDIA,DUE TO ITS ALLURING SCENT,LONG SHELF LIFE,PREMIUM QUALITY,FLAVOUR & EASE TO DIGESTION.IT IS SAFE TO EAT SINCE IT IS FREE OF TINY STONES & DUST.",
    descTitle: "",
    description: [],
    images: [
      BasmatiSugandhaImg,
    ],
    categoryId: 3,
    categoryName: "Basmati Rice"
  },
  {
    id: 305,
    name: "SHARBATI BASMATI RICE",
    slug: "sharbati-basmati-rice",
    feature: "IT IS MADE FROM THE HYBRID OF TRADITIONAL BASMATI RICE & HAS NO SPECIFIC .IT IS ABOUT 14-15MM LONG IN LENGTH.",
    descTitle: "",
    description: [],
    images: [
      BasmatiSharbatiImg,
    ],
    categoryId: 3,
    categoryName: "Basmati Rice"
  },

  // ===================== Non Basmati Rice ========================
  {
    id: 401,
    name: "SONA MASURI RICE",
    slug: "sona-masuri-rice",
    feature: "SONA MASURI IS A LIGHT WEIGHT AND AROMATIC MEDIUM-GRAIN RICE WHICH IS THE RESULT OF A CROSS COMBINATON OF THE SONA AND MASURI RICE VARITIES.",
    descTitle: "",
    description: [],
    images: [
      BasmatiSonamasoriImg,
    ],
    categoryId: 4,
    categoryName: "Non Basmati Rice"
  },
  {
    id: 402,
    name: "BROKEN RICE",
    slug: "broken-rice",
    feature: "BROKEN RICE IS FRAGMENTED NOT CONSIDERED TO BE DEFECTIVE AND BESIDE ESTHETICS.",
    descTitle: "",
    description: [],
    images: [
      BasmatiBrokenImg,
    ],
    categoryId: 4,
    categoryName: "Non Basmati Rice"
  },

    // ===================== Jaggery ========================
    {
    id: 501,
    name: "JAGGERY",
    slug: "jaggery",
    feature: "JAGGERY IS AN UNREFINED NATURAL SUGAR THAT IS PRODUCED WITHOUT ADDING ANY CHEMICALS.MORE THAN 70% OF THE TOTAL WORLD JAGGERY PRODUCTION IS DONE IN INDIA.JAGGERY IS POPULARY KNOWN AS THE MEDICINAL SUGAR AND IT IS NUTRINALLY COMPARABLE WITH HONEY.IT HAS BEEN USED AS A SWEETNEER IN AYURVEDIC MEDICINE FOR 3000 YEARS.INDIAN AYURVEDIC MEDICINE CONSIDERS JAGGERY TO BE BENEFICAL IN TREATING THROAT AND LUNG INFECTION WHITEREFINED SUGAR MAINLY CONSIST OF GULCOSE AND FURCTOSE JAGGERY CONTAIN OF GLUCOSE AND SUCROSE BUT JAGGERY ALSO HAS MINERALS AND VITAMINS WHICH LACK REFINED SUGAR.THE MINERALS CONTENT OF JAGGERY INCLUDE CALCIUM,PHOSPHRUS,MAGNESIUM,POTASSIUM AND IRON TRACES OF ZINC AND COPPER.THE VITAMINS CONTENT INCLUDES FOLIC ACID AND B-COMPLEX VITAMINS.IT ALSO PREVENTS RHEUMATIC AFFLICATIONS PREVENTS DISORDERS OF BILE HELPS IN RELIEVING FATIQUE,RELAXATION OF MUSCLES,NERVES AND BLOOD VESSELS MAINTAIN BLOOD PRESSURE AND REDUCE WATER RETENSION.",
    descTitle: "",
    description: [],
    images: [
      JaggeryImg,
    ],
    categoryId: 5,
    categoryName: "Jaggery"
  },
]